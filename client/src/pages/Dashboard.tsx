import { useCallback, useEffect, useMemo, useState } from "react";
import type { AxiosError } from "axios";
import Sidebar from "../components/Sidebar";
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

const PAGE_SIZE = 8;

const getErrorMessage = (error: unknown, fallback: string) => {
  const axiosError = error as AxiosError<{ error?: string; message?: string }>;
  const serverMessage = axiosError.response?.data?.error || axiosError.response?.data?.message;

  if (axiosError.response?.status === 401) {
    return "Your session expired. Please sign in again.";
  }

  return serverMessage || fallback;
};

export default function Dashboard() {
  const [tasks, setTasks] = useState<Resource[]>([]);
  const [title, setTitle] = useState("");
  const [query, setQuery] = useState("");
  const [queryInput, setQueryInput] = useState("");
  const [status, setStatus] = useState<StatusFilter>(() =>
    (localStorage.getItem("statusFilter") as StatusFilter) || "all"
  );
  const [taskType, setTaskType] = useState(() => localStorage.getItem("typeFilter") || "all");
  const [sort, setSort] = useState<SortFilter>(() =>
    (localStorage.getItem("sortFilter") as SortFilter) || "title_asc"
  );
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [busyTaskId, setBusyTaskId] = useState<number | null>(null);

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const progress = total ? Math.round((completed / total) * 100) : 0;


   useEffect(() => {
    const timeout = setTimeout(() => {
      setQuery(queryInput);
      setPage(1);
    }, 300);

    return () => clearTimeout(timeout);
  }, [queryInput]);

  useEffect(() => {
    localStorage.setItem("statusFilter", status);
    localStorage.setItem("typeFilter", taskType);
    localStorage.setItem("sortFilter", sort);
  }, [status, taskType, sort]);

  const filters = useMemo<ResourceFilters>(
    () => ({
      ...(query.trim() ? { q: query.trim() } : {}),
      ...(status === "completed" ? { completed: "true" } : {}),
      ...(status === "active" ? { completed: "false" } : {}),
      ...(taskType !== "all" ? { type: taskType } : {}),
      sort,
    }),
    [query, sort, status, taskType]
  );

  const load = useCallback(async () => {
  setIsLoading(true);
  setError(null);
  try {
    const data = await getResources(filters);
    setTasks(data);
  } catch (error) {
    setError(getErrorMessage(error, "Failed to load tasks. Please refresh and try again."));
  } finally {
    setIsLoading(false);
  }
}, [filters]);

  const add = async () => {
  const cleanTitle = title.trim();
  if (!cleanTitle) return;

  setError(null);
  try {
    await createResource({
      title: cleanTitle,
      type: "course",
      completed: false,
    });

    setTitle("");
    setPage(1);
    await load();
  } catch (error) {
    setError(getErrorMessage(error, "Could not add task."));
  }
};

  const updateTask = async (task: Resource) => {
    setBusyTaskId(task.id);
    setError(null);
    try {
      await updateResource(task.id, {
        title: task.title,
        type: task.type,
        completed: task.completed,
      });
       await load();
      } catch (error) {
        setError(getErrorMessage(error, "Could not update task."));
      } finally {
        setBusyTaskId(null);
      }
    };

  const removeTask = async (id: number) => {
    setBusyTaskId(id);
    setError(null);
    try {
      await deleteResource(id);
      await load();
    } catch (error) {
      setError(getErrorMessage(error, "Could not delete task."));
    } finally {
      setBusyTaskId(null);
    }
  };

  useEffect(() => {
     const timer = setTimeout(() => {
      void load();
    }, 0);

    return () => clearTimeout(timer);
  }, [load]);

  const totalPages = Math.max(1, Math.ceil(tasks.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const pagedTasks = tasks.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="min-h-screen bg-zinc-50 flex">
      <Sidebar />

      <div className="flex-1">

        <div className="max-w-5xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-semibold mb-6">Dashboard</h1>
          {error && (
            <div className="mb-4 rounded-xl border border-red-200 bg-red-50 text-red-700 px-4 py-3 text-sm">
              {error}
            </div>
          )}

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
              value={queryInput}
              onChange={(e) => setQueryInput(e.target.value)}
            />

              <select
              className="border border-zinc-200 rounded-xl px-3 py-2 text-sm bg-white"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value as StatusFilter);
                setPage(1);
              }}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="completed">Completed</option>
            </select>

             <select
              className="border border-zinc-200 rounded-xl px-3 py-2 text-sm bg-white"
              value={taskType}
              onChange={(e) => {
                setTaskType(e.target.value);
                setPage(1);
              }}
            >
              <option value="all">All Types</option>
              <option value="course">Course</option>
              <option value="article">Article</option>
              <option value="project">Project</option>
            </select>

              <select
              className="border border-zinc-200 rounded-xl px-3 py-2 text-sm bg-white"
              value={sort}
              onChange={(e) => {
                setSort(e.target.value as SortFilter);
                setPage(1);
              }}
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
               {isLoading ? (
            <p className="text-sm text-zinc-500">Loading tasks…</p>
          ) : pagedTasks.length === 0 ? (
            <p className="text-sm text-zinc-500">No tasks match your current filters.</p>
          ) : (
            <div className="space-y-3">
              {pagedTasks.map((t) => (
                <TaskCard
                  key={t.id}
                  task={t}
                  isBusy={busyTaskId === t.id}
                  onUpdate={updateTask}
                  onDelete={removeTask}
                />
              ))}
            </div>
          )}
           <div className="mt-6 flex items-center justify-between text-sm">
            <p className="text-zinc-500">Page {currentPage} of {totalPages}</p>
            <div className="flex gap-2">
              <button
                className="border border-zinc-300 px-3 py-1 rounded-lg disabled:opacity-40"
                disabled={currentPage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Prev
              </button>
              <button
                className="border border-zinc-300 px-3 py-1 rounded-lg disabled:opacity-40"
                disabled={currentPage >= totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }