import { Navigate } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";
import HomeNavbar from "../components/home/HomeNavbar";
import HeroSection from "../components/home/HeroSection";
import FeaturesSection from "../components/home/FeaturesSection";

function HomePage() {
  const { isSignedIn, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-100">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (isSignedIn) return <Navigate to="/dashboard" />;
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      <HomeNavbar isSignedIn={isSignedIn} />
      <HeroSection isSignedIn={isSignedIn} />
      <FeaturesSection />
    </div>
  );
}
export default HomePage;
