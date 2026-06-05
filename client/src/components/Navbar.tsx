import { Link } from "react-router-dom";
import StudyPerson from "../assets/book-open-reader-solid-full.svg";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  const hasToken = Boolean(localStorage.getItem("token"));
  return (
   <header className="border-b border-zinc-200 bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2" aria-label="StudyFlow home">
            <img src={StudyPerson} alt="book icon" className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-tight">StudyFlow</span>
          </Link>
          <input placeholder="Search..." className="bg-gray-100 border-none rounded-xl w-64 p-1.5 focus:outline-none" />
          <div className="flex items-center gap-4 mx-right">
             <button><a href="/features" className="px-4 py-1 text-gray-700 hover:bg-zinc-200 transition rounded-xl mx-auto">
              Features
            </a></button>
            <button><a href="/tech-stack" className="px-4 py-1 text-gray-700 hover:bg-zinc-200 transition rounded-xl">
                Tech Stack
            </a></button>
          </div>
         
          <div className="flex items-center gap-3 text-sm">
            {hasToken ? (
              <>
                <Link className="text-zinc-600 hover:text-zinc-950" to="/dashboard">
                  Dashboard
                </Link>
                <ProfileDropdown />
              </>
            ) : (
              <>
                <Link className="text-zinc-600 hover:text-zinc-950" to="/login">
                  Sign In
                </Link>
                <Link
                  className="rounded-xl bg-black px-4 py-2 font-medium text-white transition hover:bg-zinc-800"
                  to="/register"
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
          {/* <div className="flex items-center gap-3 text-sm">
            <Link className="text-zinc-600 hover:bg-zinc-200 px-3 py-1 transition rounded-xl" to="/login">
              Sign In
            </Link>
            <Link
              className="rounded-xl bg-black px-4 py-2 font-medium text-white transition hover:bg-zinc-800"
              to={hasToken ? "/dashboard" : "/register"}
            >
              {hasToken ? "Open Dashboard" : "Get Started"}
            </Link>
          </div> */}
        </nav>
      </header>
  );
}