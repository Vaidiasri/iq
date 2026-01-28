import { chatClient, streamClient, upsertStreamUser, createStreamCall, createStreamChannel } from "../lib/stream.js";
import Session from "../models/session.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    const user = req.user;

    console.log("=== Creating Session ===");
    
    if (!problem || !difficulty) {
      return res.status(400).json({ message: "Problem and difficulty are required" });
    }

    // Step 1: Sync User
    await upsertStreamUser({
      id: clerkId,
      name: user.name,
      image: user.profileImage,
    });

    // Step 2: Generate ID
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;

    // Step 3: Create DB Session
    let session;
    try {
      session = await Session.create({ problem, difficulty, host: userId, callId });
      console.log("✓ Session created in DB:", session._id);
    } catch (error) {
      console.error("✗ Failed to create session in DB:", error);
      throw new Error(`Failed to create session: ${error.message}`);
    }

    // Step 4: Create Stream Video Call
    try {
      await createStreamCall(callId, clerkId, { 
        problem, 
        difficulty, 
        sessionId: session._id.toString() 
      });
    } catch (error) {
      await Session.findByIdAndDelete(session._id);
      throw new Error(`Failed to create video call: ${error.message}`);
    }

    // Step 5: Create Chat Channel
    try {
      await createStreamChannel(callId, clerkId, `${problem} Session`);
    } catch (error) {
      await Session.findByIdAndDelete(session._id);
      await streamClient.video.call("default", callId).delete({ hard: true });
      throw new Error(`Failed to create chat channel: ${error.message}`);
    }

    console.log("=== Session Created Successfully ===");
    res.status(201).json({ session });

  } catch (error) {
    console.error("=== Session Creation Failed ===");
    console.error("Error:", error.message);
    res.status(500).json({ message: error.message });
  }
}

export async function getActiveSessions(_, res) {
  try {
    const sessions = await Session.find({ status: "active" })
      .populate("host", "name profileImage email clerkId")
      .populate("participant", "name profileImage email clerkId")
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getActiveSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getMyRecentSessions(req, res) {
  try {
    const userId = req.user._id;

    // get sessions where user is either host or participant
    const sessions = await Session.find({
      status: "completed",
      $or: [{ host: userId }, { participant: userId }],
    })
      .sort({ createdAt: -1 })
      .limit(20);

    res.status(200).json({ sessions });
  } catch (error) {
    console.log("Error in getMyRecentSessions controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function getSessionById(req, res) {
  try {
    const { id } = req.params;

    const session = await Session.findById(id)
      .populate("host", "name email profileImage clerkId")
      .populate("participant", "name email profileImage clerkId");

    if (!session) return res.status(404).json({ message: "Session not found" });

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in getSessionById controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function joinSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    if (session.status !== "active") {
      return res.status(400).json({ message: "Cannot join a completed session" });
    }

    if (session.host.toString() === userId.toString()) {
      return res.status(400).json({ message: "Host cannot join their own session as participant" });
    }

    // check if session is already full - has a participant
    if (session.participant) return res.status(409).json({ message: "Session is full" });

    session.participant = userId;
    await session.save();

    const channel = chatClient.channel("messaging", session.callId);
    await channel.addMembers([clerkId]);

    res.status(200).json({ session });
  } catch (error) {
    console.log("Error in joinSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

export async function endSession(req, res) {
  try {
    const { id } = req.params;
    const userId = req.user._id;

    const session = await Session.findById(id);

    if (!session) return res.status(404).json({ message: "Session not found" });

    // check if user is the host
    if (session.host.toString() !== userId.toString()) {
      return res.status(403).json({ message: "Only the host can end the session" });
    }

    // check if session is already completed
    if (session.status === "completed") {
      return res.status(400).json({ message: "Session is already completed" });
    }

    // delete stream video call
    const call = streamClient.video.call("default", session.callId);
    await call.delete({ hard: true });

    // delete stream chat channel
    const channel = chatClient.channel("messaging", session.callId);
    await channel.delete();

    session.status = "completed";
    await session.save();

    res.status(200).json({ session, message: "Session ended successfully" });
  } catch (error) {
    console.log("Error in endSession controller:", error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
}
