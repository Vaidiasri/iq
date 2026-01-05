import { useUser } from "@clerk/clerk-react";
import { Routes, Route, Navigate } from "react-router";
import HomePage from "./pages/HomePage";
import ProblemsPage from "./pages/ProblemsPage";
import DashboardPage from "./pages/DashboardPage";
import { Toaster } from "react-hot-toast";

function App() {
  // Clerk se authentication state nikaal rahe hain
  // isSignedIn: user logged in hai ya nahi (true/false/undefined)
  // isLoaded: Clerk authentication check complete hua ya nahi (true/false)
  const { isSignedIn, isLoaded } = useUser();

  return (
    <>
      <Routes>
        {/* <button className="btn btn-primary">Button</button>
         */}
        {/* Public route - koi bhi access kar sakta hai */}
        <Route path="/" element={<HomePage />} />

        {/* Protected route - sirf logged in users ke liye */}
        <Route
          path="/problems"
          element={
            // Pehle check karo ki Clerk load hua ya nahi
            !isLoaded ? (
              // Agar Clerk abhi load ho raha hai, toh loading spinner dikhao
              <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            ) : isSignedIn ? (
              // Agar user logged in hai, toh page dikhao
              <ProblemsPage />
            ) : (
              // Agar user logged in nahi hai, toh home page par redirect karo
              <Navigate to="/" />
            )
          }
        />
        {/* Protected route - sirf logged in users ke liye */}
        <Route
          path="/dashboard"
          element={
            // Pehle check karo ki Clerk load hua ya nahi
            !isLoaded ? (
              // Agar Clerk abhi load ho raha hai, toh loading spinner dikhao
              <div className="flex items-center justify-center min-h-screen">
                <span className="loading loading-spinner loading-lg text-primary"></span>
              </div>
            ) : isSignedIn ? (
              // Agar user logged in hai, toh page dikhao
              <DashboardPage />
            ) : (
              // Agar user logged in nahi hai, toh home page par redirect karo
              <Navigate to="/" />
            )
          }
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

// tw,daisyui , react-hot-toast,react-router-dom,react-query aka tanstack query , axios
