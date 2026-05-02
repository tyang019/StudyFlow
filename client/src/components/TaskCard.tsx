export default function TaskCard({ task }: any) {
  return (
    <div className="group bg-white border border-zinc-200 rounded-xl p-4 transition hover:shadow-sm hover:border-zinc-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="font-medium text-sm group-hover:text-black">
            {task.title}
          </p>
          <p className="text-xs text-zinc-500 mt-1">{task.type}</p>
        </div>

        <span
          className={`text-xs px-2 py-1 rounded-full border ${
            task.completed
              ? "bg-emerald-50 text-emerald-600 border-emerald-200"
              : "bg-amber-50 text-amber-600 border-amber-200"
          }`}
        >
          {task.completed ? "Done" : "In progress"}
        </span>
      </div>
    </div>
  );
}