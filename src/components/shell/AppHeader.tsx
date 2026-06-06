type AppHeaderProps = {
  title: string;
};


export function AppHeader({ title }: AppHeaderProps) {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between border-b border-zinc-200 bg-white px-6 dark:border-zinc-800 dark:bg-zinc-950">
      <h1 className="text-sm font-semibold text-zinc-950 dark:text-white">
        {title}
      </h1>

      {/* Reserved: user actions (avatar, notifications) */}
     <div className="size-8" />
    </header>
  );
}
