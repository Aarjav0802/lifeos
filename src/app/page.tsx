export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background px-6 py-16 text-foreground">
      <section className="w-full max-w-3xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          LifeOS
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          Production foundation initialized.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 dark:text-zinc-400">
          The application shell is ready for architecture, product planning,
          and future AI SaaS features.
        </p>
      </section>
    </main>
  );
}
