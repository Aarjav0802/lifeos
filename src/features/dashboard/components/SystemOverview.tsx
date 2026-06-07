import { SystemCard } from "@/features/dashboard/components/SystemCard";
import type { SystemMetric } from "@/features/dashboard/data/dashboard-data";

type SystemOverviewProps = {
  systems: SystemMetric[];
};

export function SystemOverview({ systems }: SystemOverviewProps) {
  return (
    <section aria-labelledby="systems-heading">
      <div className="mb-5">
        <h2
          id="systems-heading"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500"
        >
          Systems
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {systems.map((system) => (
          <SystemCard key={system.id} system={system} />
        ))}
      </div>
    </section>
  );
}
