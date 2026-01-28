import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage"; // Already TSX
import DashboardPage from "./pages/DashboardPage"; // Already TSX
import SessionPage from "./pages/SessionPage"; // Already TSX
import ProblemPage from "./pages/ProblemPage"; // Already TSX
import ProblemsPage from "./pages/ProblemsPage"; // Already TSX
import { useUser } from "@clerk/clerk-react";
import { Toaster } from "react-hot-toast";

function App() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded)
    return (
      <div className="h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/dashboard"
          element={isSignedIn ? <DashboardPage /> : <Navigate to="/" />}
        />
        <Route
          path="/problems"
          element={isSignedIn ? <ProblemsPage /> : <Navigate to="/" />}
        />
        <Route
          path="/session/:id"
          element={isSignedIn ? <SessionPage /> : <Navigate to="/" />}
        />
        <Route
          path="/problem/:id"
          element={isSignedIn ? <ProblemPage /> : <Navigate to="/" />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
