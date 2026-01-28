import { StreamChat } from "stream-chat";
import { StreamClient } from "@stream-io/node-sdk";
import { ENV } from "./env.js";

const apiKey = ENV.STREAM_API_KEY;
const apiSecret = ENV.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  console.error("STREAM_API_KEY or STREAM_API_SECRET is missing");
  throw new Error("Stream API credentials are not configured properly");
}

export const chatClient = StreamChat.getInstance(apiKey, apiSecret); // will be used chat features
export const streamClient = new StreamClient(apiKey, apiSecret); // will be used for video calls

export const upsertStreamUser = async (userData) => {
  try {
    await chatClient.upsertUser(userData);
    console.log("Stream user upserted successfully:", userData.id);
  } catch (error) {
    console.error("Error upserting Stream user:", error);
    throw error; // Re-throw the error so it can be caught by the caller
  }
};

export const createStreamCall = async (callId, clerkId, sessionData) => {
  try {
    const call = streamClient.video.call("default", callId);
    await call.getOrCreate({
      data: {
        created_by_id: clerkId,
        custom: sessionData,
      },
    });
    console.log("Stream video call created successfully");
  } catch (error) {
    console.error("Error creating Stream video call:", error);
    throw error;
  }
};

export const createStreamChannel = async (callId, clerkId, channelName) => {
  try {
    const channel = chatClient.channel("messaging", callId, {
      name: channelName,
      created_by_id: clerkId,
      members: [clerkId],
    });
    await channel.create();
    console.log("Chat channel created successfully");
    return channel;
  } catch (error) {
    console.error("Error creating chat channel:", error);
    throw error;
  }
};

export const deleteStreamUser = async (userId) => {
  try {
    await chatClient.deleteUser(userId);
    console.log("Stream user deleted successfully:", userId);
  } catch (error) {
    console.error("Error deleting the Stream user:", error);
  }
};
