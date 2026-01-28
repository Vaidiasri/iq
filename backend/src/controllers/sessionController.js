import { chatClient, streamClient, upsertStreamUser } from "../lib/stream.js";
import Session from "../models/session.js";

export async function createSession(req, res) {
  try {
    const { problem, difficulty } = req.body;
    const userId = req.user._id;
    const clerkId = req.user.clerkId;
    const user = req.user;

    console.log("=== Creating Session ===");
    console.log("Problem:", problem);
    console.log("Difficulty:", difficulty);
    console.log("User ID:", userId);
    console.log("Clerk ID:", clerkId);

    if (!problem || !difficulty) {
      return res.status(400).json({ message: "Problem and difficulty are required" });
    }

    // ensure user is synced to stream
    try {
      console.log("Step 1: Upserting Stream user...");
      await upsertStreamUser({
        id: clerkId,
        name: user.name,
        image: user.profileImage,
      });
      console.log("✓ Stream user upserted successfully");
    } catch (error) {
      console.error("✗ Failed to upsert Stream user:", error);
      throw new Error(`Failed to sync user with Stream: ${error.message}`);
    }

    // generate a unique call id for stream video
    const callId = `session_${Date.now()}_${Math.random().toString(36).substring(7)}`;
    console.log("Step 2: Generated call ID:", callId);

    // create session in db
    try {
      console.log("Step 3: Creating session in database...");
      const session = await Session.create({ problem, difficulty, host: userId, callId });
      console.log("✓ Session created in DB:", session._id);

      // create stream video call
      try {
        console.log("Step 4: Creating Stream video call...");
        await streamClient.video.call("default", callId).getOrCreate({
          data: {
            created_by_id: clerkId,
            custom: { problem, difficulty, sessionId: session._id.toString() },
          },
        });
        console.log("✓ Stream video call created successfully");
      } catch (error) {
        console.error("✗ Failed to create Stream video call:", error);
        console.error("Error details:", error.response?.data || error.message);
        // Delete the session from DB since video call creation failed
        await Session.findByIdAndDelete(session._id);
        throw new Error(`Failed to create video call: ${error.message}`);
      }

      // chat messaging
      try {
        console.log("Step 5: Creating chat channel...");
        const channel = chatClient.channel("messaging", callId, {
          name: `${problem} Session`,
          created_by_id: clerkId,
          members: [clerkId],
        });

        await channel.create();
        console.log("✓ Chat channel created successfully");
      } catch (error) {
        console.error("✗ Failed to create chat channel:", error);
        console.error("Error details:", error.response?.data || error.message);
        // Delete the session and video call since chat creation failed
        await Session.findByIdAndDelete(session._id);
        await streamClient.video.call("default", callId).delete({ hard: true });
        throw new Error(`Failed to create chat channel: ${error.message}`);
      }

      console.log("=== Session Created Successfully ===");
      res.status(201).json({ session });
    } catch (error) {
      // If it's already a thrown error from above, re-throw it
      if (error.message.startsWith("Failed to")) {
        throw error;
      }
      console.error("✗ Failed to create session in DB:", error);
      throw new Error(`Failed to create session: ${error.message}`);
    }
  } catch (error) {
    console.error("=== Session Creation Failed ===");
    console.error("Error:", error.message);
    console.error("Stack:", error.stack);
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
