import { PriorityItem } from "@/features/dashboard/components/PriorityItem";
import type { DashboardPriority } from "@/features/dashboard/types/dashboard.types";

type PriorityListProps = {
  priorities: DashboardPriority[];
};

export function PriorityList({ priorities }: PriorityListProps) {
  return (
    <section aria-labelledby="priorities-heading">
      <div className="mb-5 flex items-baseline justify-between">
        <h2
          id="priorities-heading"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500"
        >
          Priorities
        </h2>
        <span className="text-xs text-zinc-400 dark:text-zinc-500">
          {priorities.length} of 3
        </span>
      </div>

      <ol className="flex flex-col gap-3">
        {priorities.map((priority) => (
          <PriorityItem key={priority.id} priority={priority} />
        ))}
      </ol>
    </section>
  );
}