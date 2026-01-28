import axiosInstance from "../lib/axios";
import type { Session, SessionConfig } from "../types";

export const sessionApi = {
  createSession: async (data: SessionConfig): Promise<{ session: Session }> => {
    const response = await axiosInstance.post("/sessions", data);
    return response.data;
  },

  getActiveSessions: async (): Promise<{ sessions: Session[] }> => {
    const response = await axiosInstance.get("/sessions/active");
    return response.data;
  },
  getMyRecentSessions: async (): Promise<{ sessions: Session[] }> => {
    const response = await axiosInstance.get("/sessions/my-recent");
    return response.data;
  },

  getSessionById: async (id: string): Promise<{ session: Session }> => {
    const response = await axiosInstance.get(`/sessions/${id}`);
    return response.data;
  },

  joinSession: async (id: string): Promise<{ session: Session }> => {
    const response = await axiosInstance.post(`/sessions/${id}/join`);
    return response.data;
  },
  endSession: async (id: string): Promise<{ success: boolean; message: string }> => {
    const response = await axiosInstance.post(`/sessions/${id}/end`);
    return response.data;
  },
  getStreamToken: async (): Promise<{ token: string; userId: string; name: string; image: string; email: string }> => {
    const response = await axiosInstance.get(`/chat/token`);
    return response.data;
  },
};
