import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import {
  getResources,
  createResource,
  updateResource,
  deleteResource,
} from "../services/api";

type Task = {
  id: number;
  title: string;
  type: string;
  completed: boolean;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [title, setTitle] = useState("");
  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  const load = async () => {
    const data = await getResources();
    setTasks(data);
  };

  const add = async () => {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    const newTask = await createResource({
      title: cleanTitle,
      type: "course",
      completed: false,
    });

    setTasks([newTask, ...tasks]);
    setTitle("");
  };
  const updateTask = async (task: Task) => {
    await updateResource(task.id, {
      title: task.title,
      type: task.type,
      completed: task.completed,
    });

    setTasks((prev) => prev.map((t) => (t.id === task.id ? task : t)));
  };

  const removeTask = async (id: number) => {
    await deleteResource(id);
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    load();
  }, []);

  return (
     <div className="min-h-screen bg-zinc-50 flex">
      <Sidebar />

      <div className="flex-1">
        <Navbar />

        <div className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>

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
              <p className="text-2xl font-semibold mt-1">{progress}%</p>
            </div>
          </div>
            <div className="flex gap-2 mb-6">
              <input
                className="flex-1 border border-zinc-200 rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-zinc-200"
                placeholder="Write a new task..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") add();
                }}
                />

                <button
                  onClick={add}
                  className="bg-black text-white text-sm px-4 rounded-xl hover:bg-zinc-800 transition"
                >
                  Add
                </button>
              </div>
              <div className="space-y-3">
              {tasks.map((t) => (
                <TaskCard
                  key={t.id}
                  task={t}
                  onUpdate={updateTask}
                  onDelete={removeTask}
                />
              ))}
              </div>
            </div>
          </div>
        </div>
    );
    }