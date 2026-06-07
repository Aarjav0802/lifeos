import type { Priority } from "@/features/dashboard/data/dashboard-data";

type PriorityItemProps = {
  priority: Priority;
};


export function PriorityItem({ priority }: PriorityItemProps) {
  return (
    <li className="flex gap-5 rounded-xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
      {/* Rank */}
      <span
        aria-label={`Priority ${priority.rank}`}
        className="mt-0.5 shrink-0 text-3xl font-bold leading-none tracking-tighter text-zinc-200 dark:text-zinc-700"
      >
        {priority.rank}
      </span>

      {/* Content */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-sm font-semibold text-zinc-950 dark:text-white">
            {priority.title}
          </h3>
          <span className="rounded-full border border-zinc-200 px-2 py-0.5 text-xs font-medium text-zinc-500 dark:border-zinc-700 dark:text-zinc-400">
            {priority.category}
          </span>
        </div>
        <p className="mt-1.5 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
          {priority.description}
        </p>
      </div>
    </li>
  );
}
