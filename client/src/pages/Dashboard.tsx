import { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import TaskCard from "../components/TaskCard";
import {
  getResources,
  createResource,
  updateResource,
  deleteResource,
  type Resource,
  type ResourceFilters,
} from "../services/api";

type StatusFilter = "all" | "completed" | "active";
type SortFilter = "title_asc" | "title_desc";

export default function Dashboard() {
  const [tasks, setTasks] = useState<Resource[]>([]);
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [taskType, setTaskType] = useState("all");
  const [sort, setSort] = useState<SortFilter>("title_asc");

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  const filters = useMemo<ResourceFilters>(() => ({
    ...(query.trim() ? { q: query.trim() } : {}),
    ...(status === "completed" ? { completed: "true" } : {}),
    ...(status === "active" ? { completed: "false" } : {}),
    ...(taskType !== "all" ? { type: taskType } : {}),
    sort,
  }), [query, sort, status, taskType]);

  const load = useCallback(async () => {
    const data = await getResources(filters);
    setTasks(data);
  }, [filters]);

  const add = async () => {
    const cleanTitle = title.trim();
    if (!cleanTitle) return;

    await createResource({
      title: cleanTitle,
      type: "course",
      completed: false,
    });

    setTitle("");
    await load();
  };

 const updateTask = async (task: Resource) => {
    await updateResource(task.id, {
      title: task.title,
      type: task.type,
      completed: task.completed,
    });

    await load();
  };

   const removeTask = async (id: number) => {
    await deleteResource(id);
    await load();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      void load();
    }, 0);
    return () => clearTimeout(timer);
  }, [load]);

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
          
           <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-4">
            <input
              className="border border-zinc-200 rounded-xl px-3 py-2 text-sm bg-white"
              placeholder="Search title..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <select
              className="border border-zinc-200 rounded-xl px-3 py-2 text-sm bg-white"
              value={status}
              onChange={(e) => setStatus(e.target.value as StatusFilter)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>

            <select
              className="border border-zinc-200 rounded-xl px-3 py-2 text-sm bg-white"
              value={taskType}
              onChange={(e) => setTaskType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="course">Course</option>
              <option value="article">Article</option>
              <option value="project">Project</option>
            </select>

            <select
              className="border border-zinc-200 rounded-xl px-3 py-2 text-sm bg-white"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortFilter)}
            >
              <option value="title_asc">Title A → Z</option>
              <option value="title_desc">Title Z → A</option>
            </select>
          </div>

            <div className="flex gap-2 mb-6">
            <input
              className="flex-1 border border-zinc-200 rounded-xl px-4 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-zinc-200"
              placeholder="Write a new task..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  void add();
                }
              }}
            />

            <button
              onClick={() => void add()}
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