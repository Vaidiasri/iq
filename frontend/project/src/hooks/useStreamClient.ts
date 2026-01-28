import { useState, useEffect } from "react";
import { StreamChat, Channel } from "stream-chat";
import { StreamVideoClient } from "@stream-io/video-react-sdk";
import type { Call } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";
import { initializeStreamClient, disconnectStreamClient } from "../lib/stream";
import { sessionApi } from "../api/sessions";
import type { Session } from "../types";

function useStreamClient(
  session: Session | null | undefined,
  loadingSession: boolean,
  isHost: boolean,
  isParticipant: boolean
) {
  const [streamClient, setStreamClient] = useState<StreamVideoClient | null>(null);
  const [call, setCall] = useState<Call | null>(null);
  const [chatClient, setChatClient] = useState<StreamChat | null>(null);
  const [channel, setChannel] = useState<Channel | null>(null);
  const [isInitializingCall, setIsInitializingCall] = useState(true);

  useEffect(() => {
    let videoCall: Call | null = null;
    let chatClientInstance: StreamChat | null = null;

    const initCall = async () => {
      if (!session?.callId) return setIsInitializingCall(false);
      // Wait until we know if it's the host or participant before giving up? 
      // Or if the logic implies they MUST be one of them, then this is fine.
      if (!isHost && !isParticipant) return setIsInitializingCall(false);
      if (session.status === "completed") return setIsInitializingCall(false);

      try {
        const { token, userId, name, image } = await sessionApi.getStreamToken();

        const client = await initializeStreamClient(
          {
            id: userId,
            name: name,
            image: image,
          },
          token
        );

        setStreamClient(client);

        videoCall = client.call("default", session.callId);
        await videoCall.join({ create: true });
        setCall(videoCall);

        const apiKey = import.meta.env.VITE_STREAM_API_KEY;
        chatClientInstance = StreamChat.getInstance(apiKey);

        await chatClientInstance.connectUser(
          {
            id: userId,
            name: name,
            image: image,
          },
          token
        );
        setChatClient(chatClientInstance);

        const chatChannel = chatClientInstance.channel("messaging", session.callId);
        await chatChannel.watch();
        setChannel(chatChannel);
      } catch (error) {
        toast.error("Failed to join video call");
        console.error("Error init call", error);
      } finally {
        setIsInitializingCall(false);
      }
    };

    if (session && !loadingSession) initCall();

    // cleanup - performance reasons
    return () => {
      // iife
      (async () => {
        try {
          if (videoCall) await videoCall.leave();
          if (chatClientInstance) await chatClientInstance.disconnectUser();
          await disconnectStreamClient();
        } catch (error) {
          console.error("Cleanup error:", error);
        }
      })();
    };
  }, [session, loadingSession, isHost, isParticipant]);

  return {
    streamClient,
    call,
    chatClient,
    channel,
    isInitializingCall,
  };
}

export default useStreamClient;
