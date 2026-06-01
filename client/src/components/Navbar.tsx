import ProfileDropdown from "./ProfileDropdown";
import StudyPerson from "../assets/book-open-reader-solid-full.svg";

export default function Navbar() {
  return (
    <div className="h-14 border-b bg-white/70 backdrop-blur-md flex items-center justify-between px-6">
      <a href="/">
      <div className="flex items-center gap-2">
        <img src={StudyPerson} alt="book icon" className="w-4 h-4" />
        <span className="text-sm font-medium">StudyFlow</span>
      </div>
      </a>
      <input placeholder="Search..." className="bg-gray-100 border-none rounded-md p-1 focus:outline-none" />
      <button><a href="/features" className="px-4 py-2 text-gray-700 hover:bg-zinc-200 transition">
        Features
      </a></button>
      <button><a href="/tech-stack" className="px-4 py-2 text-gray-700 hover:bg-zinc-200 transition">
        Tech Stack
      </a></button>
      <button><a href="/login" className="px-4 py-2 bg-black text-white rounded hover:bg-zinc-800 transition">
        Login
      </a></button>
      <div className="mx-2 h-6 border-l border-gray-400" />
      <button><a href="/register" className="px-4 py-2 border border-black rounded hover:bg-zinc-100 transition">
        Get Started
      </a></button>
      <ProfileDropdown />
    </div>
  );
}