// import {
//   SignedIn,
//   SignedOut,
//   SignInButton,
//   UserButton,
// } from "@clerk/clerk-react";
import { ArrowRight, SparkleIcon } from "lucide-react";
import { Link } from "react-router";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
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
            <div className=" flex flex-col">
              <span className=" font-black text-xl bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent font-mono tracking-wider">
                Code Master
              </span>
              <span className="text-sm text-base-content/60 font-medium ">
                Your AI coding assistant
              </span>
            </div>
          </Link>
          {/* Auth Btn*/}
          <SignedIn>
            <UserButton />
          </SignedIn>
          <SignedOut>
            <SignInButton mode="modal">
              <button className="group px-6 py-3 bg-gradient-to-r from-primary via-secondary to-accent rounded-full font-semibold text-sm shadow-lg  hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>Get Started</span>
                <ArrowRight className="size-4 group-hover:translate-x-0.5 transition-all duration-300" />
              </button>
            </SignInButton>
          </SignedOut>
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
