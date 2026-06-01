type FeatureCardProps = {
  description: string;
  eyebrow?: string;
  title: string;
};

export function FeatureCard({ description, eyebrow, title }: FeatureCardProps) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white/75 p-6 shadow-sm shadow-zinc-950/5 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/60 dark:shadow-black/20">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500 dark:text-zinc-400">
          {eyebrow}
        </p>
      ) : null}
      <h3 className="mt-4 text-lg font-semibold text-zinc-950 dark:text-white">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
        {description}
      </p>
    </article>
  );
}
