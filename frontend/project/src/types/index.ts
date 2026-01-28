export interface User {
  _id: string;
  clerkId: string;
  name: string;
  email: string;
  profileImage: string;
  role: "admin" | "user";
  createdAt: string;
  updatedAt: string;
}

export interface Problem {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  description: {
    text: string;
    notes?: string[];
  };
  examples: {
    input: string;
    output: string;
    explanation?: string;
  }[];
  constraints: string[];
  starterCode: Record<string, string>;
  expectedOutput: Record<string, string>;
  testCases?: {
    input: string;
    output: string;
  }[];
}

export interface Session {
  _id: string;
  host: User;
  participant?: User;
  problem: string;
  difficulty: "easy" | "medium" | "hard";
  callId: string;
  status: "active" | "completed";
  code?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SessionConfig {
  problem: string;
  difficulty: string;
}

export interface CodeExecutionResult {
  run: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
  language: string;
  version: string;
}

export interface ExecutionOutput {
  success: boolean;
  output?: string;
  error?: string;
}

export interface StreamUser {
  id: string;
  name: string;
  image?: string;
}
