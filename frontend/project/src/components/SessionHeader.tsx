import type { UseMutationResult } from "@tanstack/react-query";
import { getDifficultyBadgeClass } from "../lib/utils";
import type { Session, Problem } from "../types";
import { Loader2Icon, LogOutIcon } from "lucide-react";

interface SessionHeaderProps {
  session: Session | null | undefined;
  problemData: Problem | null | undefined;
  isHost: boolean;
  endSessionMutation: UseMutationResult<any, any, string, unknown>;
  handleEndSession: () => void;
}

function SessionHeader({
  session,
  problemData,
  isHost,
  endSessionMutation,
  handleEndSession,
}: SessionHeaderProps) {
  return (
    <div className="p-6 bg-base-100 border-b border-base-300">
      <div className="flex items-start justify-between mb-3">
        <div>
          <h1 className="text-3xl font-bold text-base-content">
            {session?.problem || "Loading..."}
          </h1>
          {problemData?.category && (
            <p className="text-base-content/60 mt-1">{problemData.category}</p>
          )}
          <p className="text-base-content/60 mt-2">
            Host: {session?.host?.name || "Loading..."} •{" "}
            {session?.participant ? 2 : 1}/2 participants
          </p>
        </div>

        <div className="flex items-center gap-3">
          <span
            className={`badge badge-lg ${getDifficultyBadgeClass(
              session?.difficulty || "easy" // Fallback to avoid error if undefined
            )}`}
          >
            {(session?.difficulty?.slice(0, 1).toUpperCase() ?? "") +
              (session?.difficulty?.slice(1) ?? "") || "Easy"}
          </span>
          {isHost && session?.status === "active" && (
            <button
              onClick={handleEndSession}
              disabled={endSessionMutation.isPending}
              className="btn btn-error btn-sm gap-2"
            >
              {endSessionMutation.isPending ? (
                <Loader2Icon className="w-4 h-4 animate-spin" />
              ) : (
                <LogOutIcon className="w-4 h-4" />
              )}
              End Session
            </button>
          )}
          {session?.status === "completed" && (
            <span className="badge badge-ghost badge-lg">Completed</span>
          )}
        </div>
      </div>
    </div>
  );
}

export default SessionHeader;
