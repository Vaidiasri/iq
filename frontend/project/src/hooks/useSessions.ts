import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { sessionApi } from "../api/sessions";
import type { Session, SessionConfig } from "../types";

export const useCreateSession = () => {
  const result = useMutation({
    mutationKey: ["createSession"],
    mutationFn: (data: SessionConfig) => sessionApi.createSession(data),
    onSuccess: () => toast.success("Session created successfully!"),
    onError: (error: any) => toast.error(error.response?.data?.message || "Failed to create room"),
  });

  return result;
};

export const useActiveSessions = () => {
  const result = useQuery({
    queryKey: ["activeSessions"],
    queryFn: sessionApi.getActiveSessions,
  });

  return result;
};

export const useMyRecentSessions = () => {
  const result = useQuery({
    queryKey: ["myRecentSessions"],
    queryFn: sessionApi.getMyRecentSessions,
  });

  return result;
};

export const useSessionById = (id?: string) => {
  const result = useQuery({
    queryKey: ["session", id],
    queryFn: () => {
      if (!id) throw new Error("Session ID is required");
      return sessionApi.getSessionById(id);
    },
    enabled: !!id,
    refetchInterval: 5000, // refetch every 5 seconds to detect session status changes
  });

  return result;
};

export const useJoinSession = () => {
  const result = useMutation({
    mutationKey: ["joinSession"],
    mutationFn: (id: string) => sessionApi.joinSession(id),
    onSuccess: () => toast.success("Joined session successfully!"),
    onError: (error: any) => toast.error(error.response?.data?.message || "Failed to join session"),
  });

  return result;
};

export const useEndSession = () => {
  const result = useMutation({
    mutationKey: ["endSession"],
    mutationFn: (id: string) => sessionApi.endSession(id),
    onSuccess: () => toast.success("Session ended successfully!"),
    onError: (error: any) => toast.error(error.response?.data?.message || "Failed to end session"),
  });

  return result;
};
