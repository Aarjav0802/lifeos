import type { DailyFocusData } from "@/features/dashboard/data/dashboard-data";

type DailyFocusProps = {
  focus: DailyFocusData;
};


export function DailyFocus({ focus }: DailyFocusProps) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white px-8 py-7 dark:border-zinc-800 dark:bg-zinc-900">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500">
            Today&rsquo;s focus
          </p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-3xl">
            {focus.intention}
          </h2>
          <p className="mt-3 text-sm leading-6 text-zinc-500 dark:text-zinc-400">
            {focus.context}
          </p>
        </div>

        <div className="shrink-0 sm:text-right">
          <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
            {focus.date}
          </p>
        </div>
      </div>
    </div>
  );
}
