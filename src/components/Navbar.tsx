import { Button } from "@/components/Button";

const navItems = [
  { href: "#features", label: "Features" },
  { href: "#vision", label: "Vision" },
  { href: "#roadmap", label: "Roadmap" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-background/85 backdrop-blur-xl dark:border-zinc-800/80">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#" className="flex items-center gap-3" aria-label="LifeOS home">
          <span className="flex size-9 items-center justify-center rounded-xl bg-zinc-950 text-sm font-bold text-white dark:bg-white dark:text-zinc-950">
            L
          </span>
          <span className="text-base font-semibold tracking-tight text-zinc-950 dark:text-white">
            LifeOS
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              className="text-sm font-medium text-zinc-600 transition hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>

        <Button className="hidden md:inline-flex" href="#roadmap" variant="secondary">
          Build Your System
        </Button>
      </nav>
    </header>
  );
}
