import { siteConfig } from "@/config/site";
import Link from "next/link";


const appNavItems = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/goals", label: "Goals" },
  { href: "/tasks", label: "Tasks" },
  { href: "/habits", label: "Habits" },
] as const;

export function AppSidebar() {
  return (
    <aside className="flex h-full w-60 shrink-0 flex-col border-r border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      {/* Brand */}
      <div className="flex h-14 items-center gap-3 border-b border-zinc-200 px-5 dark:border-zinc-800">
        <span className="flex size-7 items-center justify-center rounded-lg bg-zinc-950 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">
          {siteConfig.name[0]}
        </span>
        <span className="text-sm font-semibold tracking-tight text-zinc-950 dark:text-white">
          {siteConfig.name}
        </span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-0.5 p-3" aria-label="Main navigation">
        {appNavItems.map((item) => (
          <Link
            className="rounded-lg px-3 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950 dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
