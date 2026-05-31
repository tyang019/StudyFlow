import Navbar from "../../components/Navbar";

export default function mainPage() {
  return (
    <div className="h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold">Welcome to StudyFlow</h1>
          <p className="text-lg text-gray-600">Your personal learning progress tracker</p>
          <div className="space-x-4">
            <a
              href="/login"
              className="px-4 py-2 bg-black text-white rounded hover:bg-zinc-800 transition"
            >
              Login
            </a>
            <a            href="/register"  
              className="px-4 py-2 border border-black rounded hover:bg-zinc-100 transition"
            >
              Register
            </a>
          </div>
        </div>  
      </div>
    </div>
  );
}