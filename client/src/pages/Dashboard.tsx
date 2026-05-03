import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import { getResources, createResource } from "../services/api";


export default function Dashboard() {
  const [tasks, setTasks] = useState<any[]>([]);
  const [title, setTitle] = useState("");
  const total = tasks.length;
  const completed = tasks.filter(t => t.completed).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  const load = async () => {
    const data = await getResources();
    setTasks(data);
  };

  const add = async () => {
    if (!title) return;

    const newTask = await createResource({
      title,
      type: "course",
      completed: false,
    });

    setTasks([newTask, ...tasks]);
    setTitle("");
  };

  useEffect(() => {
    load();
  }, []);

  return (
  <div className="min-h-screen bg-zinc-50 flex">
    
    {/* SIDEBAR */}
    <Sidebar />

    {/* MAIN CONTENT */}
    <div className="flex-1">

      {/* NAVBAR */}
      <Navbar />

      {/* PAGE CONTAINER */}
      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* PAGE TITLE */}
        <h1 className="text-2xl font-semibold mb-6">
          Dashboard
        </h1>

        {/* STATS CARDS */}
        <div className="grid grid-cols-3 gap-4 mb-8">

          <div className="bg-white border border-zinc-200 rounded-xl p-4">
            <p className="text-xs text-zinc-500">Total</p>
            <p className="text-2xl font-semibold mt-1">{total}</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-4">
            <p className="text-xs text-zinc-500">Completed</p>
            <p className="text-2xl font-semibold mt-1">{completed}</p>
          </div>

          <div className="bg-white border border-zinc-200 rounded-xl p-4">
            <p className="text-xs text-zinc-500">Progress</p>
            <p className="text-2xl font-semibold mt-1">
              {progress}%
            </p>
          </div>

        </div>

        {/* TASK INPUT */}
        <div className="flex gap-2 mb-6">

          <input
            className="flex-1 border border-zinc-200 rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-zinc-200"
            placeholder="Write a new task..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <button
            className="bg-black text-white text-sm px-4 rounded-xl hover:bg-zinc-800 transition"
          >
            Add
          </button>

        </div>

        {/* TASK LIST */}
        <div className="space-y-3">
          {tasks.map((t) => (
            <TaskCard key={t.id} task={t} />
          ))}
        </div>

      </div>
    </div>
  </div>
);
}