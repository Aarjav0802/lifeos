import type { SystemMetric } from "@/features/dashboard/types/dashboard.types";

type SystemCardProps = {
  system: SystemMetric;
};

export function SystemCard({ system }: SystemCardProps) {
  return (
    <article className="rounded-xl border border-zinc-100 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
        {system.name}
      </p>
      <p className="mt-2 text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
        {system.metric}
      </p>
      <p className="mt-2 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
        {system.description}
      </p>
    </article>
  );
}