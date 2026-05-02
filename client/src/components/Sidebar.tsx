export default function Sidebar() {
  return (
    <div className="w-64 border-r bg-white h-screen p-4">
      <div className="text-xs uppercase text-zinc-400 mb-4 px-2">
        Workspace
      </div>

      <div className="space-y-1 text-sm">
        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-100 cursor-pointer">
          📊 Dashboard
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-100 cursor-pointer">
          📚 Resources
        </div>

        <div className="flex items-center gap-2 p-2 rounded-md hover:bg-zinc-100 cursor-pointer">
          ⚙️ Settings
        </div>
      </div>
    </div>
  );
}