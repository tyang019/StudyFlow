import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  return (
    <div className="h-14 border-b bg-white/70 backdrop-blur-md flex items-center justify-between px-6">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-black rounded-md" />
        <span className="text-sm font-medium">StudyFlow</span>
      </div>
      <button>Home</button>
      <button>About Us</button>
      <input placeholder="Search..." className="bg-gray-100 border-none rounded-md p-1 focus:outline-none" />
      <ProfileDropdown />
    </div>
  );
}