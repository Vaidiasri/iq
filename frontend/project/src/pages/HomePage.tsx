// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
import { SparkleIcon } from "lucide-react";
import { Link } from "react-router";
const HomePage = () => {
  return (
    <div className="bg-gradient-to-br from-base-100 via-base-200 to-base-300">
      {/* NavBar Component */}
      <nav className=" bg-base-100/80 backdrop-blur-md border-b border-primary/20 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          {/*Logo*/}
          <Link
            to={"/"}
            className="flex items-center gap-3 hover:scale-105 transition-all duration-300"
          >
            <div className="size-10 rounded-xl bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center shadow-lg">
              <SparkleIcon className="size-6 text-white" />
            </div>
          </Link>
        </div>
      </nav>
      {/* <header>
        <SignedOut>
          <SignInButton mode="modal" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header> */}
    </div>
  );
};

export default HomePage;
