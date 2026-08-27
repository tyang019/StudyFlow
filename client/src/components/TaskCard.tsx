import { useState } from "react";

type Task = {
  id: number;
  title: string;
  type: string;
  completed: boolean;
};

type TaskProps = {
  task: Task;
  isBusy?: boolean;
  onUpdate: (task: Task) => void;
  onDelete: (id: number) => void;
};

export default function TaskCard({ task, isBusy = false, onUpdate, onDelete }: TaskProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);

  const cancelEditing = () => {
    setDraftTitle(task.title);
    setIsEditing(false);
  };

  const saveTitle = async () => {
    const nextTitle = draftTitle.trim();

    if (!nextTitle || nextTitle === task.title) {
      cancelEditing();
      return;
    }

    await onUpdate({ ...task, title: nextTitle });
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200 bg-white p-4 transition hover:shadow-sm">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <input
          type="checkbox"
          checked={task.completed}
          disabled={isBusy}
          onChange={(e) => void onUpdate({ ...task, completed: e.target.checked })}
          className="h-4 w-4"
        />

        <div className="min-w-0 flex-1">
          {isEditing ? (
            <div className="flex items-center gap-2">
              <input
                className="w-full rounded-lg border border-zinc-200 px-2 py-1 text-sm"
                value={draftTitle}
                onChange={(e) => setDraftTitle(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    void saveTitle();
                  }
                  if (e.key === "Escape") {
                    cancelEditing();
                  }
                }}
                autoFocus
              />
              <button className="text-xs text-zinc-600" onClick={() => void saveTitle()}>
                Save
              </button>
            </div>
          ) : (
            <p
              className={`cursor-text truncate text-sm font-medium ${
                task.completed ? "text-zinc-400 line-through" : ""
              }`}
              onDoubleClick={() => setIsEditing(true)}
              title="Double-click to edit"
            >
              {task.title}
            </p>
          )}
          <p className="text-xs text-zinc-500 uppercase">{task.type}</p>
        </div>
      </div>

      <button
        onClick={() => void onDelete(task.id)}
        disabled={isBusy}
        className="text-xs text-red-600 hover:text-red-700 disabled:opacity-50"
      >
        Delete
      </button>
    </div>
  );
}