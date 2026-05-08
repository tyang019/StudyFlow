import { useState } from "react";

export default function ProfileDropdown() {
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <div className="relative ">
      <button
        onClick={() => setOpen(!open)}
        className="text-sm bg-zinc-100 px-3 py-1 rounded hover:cursor-pointer"
      >
        Profile
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-sm text-sm">
          <button className="block w-full text-left px-3 py-2 hover:bg-zinc-100 hover:cursor-pointer">
            Account
          </button>

          <button
            onClick={logout}
            className="block w-full text-left px-3 py-2 hover:bg-zinc-100 text-red-500 hover:cursor-pointer"
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
}