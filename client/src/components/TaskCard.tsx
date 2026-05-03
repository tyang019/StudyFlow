type Task = {
  id: number;
  title: string;
  type: string;
  completed: boolean;
};
type Props = {
  task: Task;
  onUpdate: (task: Task) => void;
  onDelete: (id: number) => void;
};

export default function TaskCard({ task, onUpdate, onDelete }: Props) {
  return (
     <div className="bg-white border border-zinc-200 rounded-xl p-4 hover:shadow-sm transition flex items-center justify-between gap-3">
      <div className="flex items-center gap-3 min-w-0">
         <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => onUpdate({ ...task, completed: e.target.checked })}
            className="h-4 w-4"
        />
        
        <div className="min-w-0">
          <p className={`text-sm font-medium truncate ${task.completed ? 'line-through text-zinc-400' : ''}`}>
            {task.title}
          </p>
          <p className="text-xs text-zinc-500 uppercase">{task.type}</p>
        </div>
      </div>

      <button
        onClick={() => onDelete(task.id)}
        className="text-xs text-red-600 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
}