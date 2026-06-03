import { cn } from "@/lib/utils";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "muted";
};

export function Section({
  children,
  className,
  id,
  variant = "default",
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20",
        variant === "muted" &&
          "border-y border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950/60",
        className,
      )}
    >
      {children}
    </section>
  );
}