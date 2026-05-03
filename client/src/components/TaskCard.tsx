import { useState } from "react";

export default function TaskCard({ task, onUpdate }: any) {
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [command, setCommand] = useState("");

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-4 hover:shadow-sm transition">
      {editing ? (
        <input
          className="w-full text-sm border rounded px-2 py-1"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onBlur={() => {
            setEditing(false);
            onUpdate({ ...task, title });
          }}
          autoFocus
        />
      ) : (
        <p
          className="text-sm font-medium cursor-text"
          onClick={() => setEditing(true)}
        >
          {task.title}
        </p>
      )}
    </div>
  );
}