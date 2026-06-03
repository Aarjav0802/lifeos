import { Button } from "@/components/Button";
import { Container } from "@/components/Container";
import { FeatureCard } from "@/components/FeatureCard";
import { Navbar } from "@/components/Navbar";
import { Section } from "@/components/Section";

import {
  features,
  workflowSteps,
} from "@/features/landing/content";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <Navbar />

      <section className="relative px-6 py-20 sm:py-24 lg:px-8 lg:py-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top,#dbeafe,transparent_58%)] dark:bg-[radial-gradient(circle_at_top,#1e3a8a,transparent_54%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              AI-powered personal operating system
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-6xl lg:text-7xl">
              Your Life. Organized by Intelligence.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              LifeOS transforms goals, habits, and tasks into adaptive systems
              that help you execute and improve every day.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href="#roadmap">Build Your System</Button>
              <Button href="#features" variant="secondary">
                Explore Features
              </Button>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white/80 p-4 shadow-2xl shadow-zinc-950/10 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/70 dark:shadow-black/30">
            <div className="rounded-[1.5rem] border border-zinc-200 bg-zinc-50 p-5 dark:border-zinc-800 dark:bg-zinc-900/80">
              <div className="flex items-center justify-between border-b border-zinc-200 pb-4 dark:border-zinc-800">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                    Today&apos;s system
                  </p>
                  <h2 className="mt-2 text-xl font-semibold text-zinc-950 dark:text-white">
                    Build health rhythm
                  </h2>
                </div>
                <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  Adaptive
                </span>
              </div>

              <div className="mt-5 space-y-3">
                {["Morning planning", "Workout block", "Review progress"].map(
                  (item, index) => (
                    <div
                      className="flex items-center justify-between rounded-2xl border border-zinc-200 bg-white p-4 dark:border-zinc-800 dark:bg-zinc-950"
                      key={item}
                    >
                      <div>
                        <p className="text-sm font-medium text-zinc-950 dark:text-white">
                          {item}
                        </p>
                        <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                          Step {index + 1} of execution loop
                        </p>
                      </div>
                      <div className="size-3 rounded-full bg-zinc-950 dark:bg-white" />
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

     <Section variant="muted">
     <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              The problem
            </p>  
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              Productivity apps store tasks. They rarely create systems.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard
              description="Lists collect work, but they leave prioritization, follow-through, and recovery entirely on you."
              eyebrow="What breaks"
              title="They store tasks"
            />
            <FeatureCard
              description="Real progress needs a living structure that connects actions to goals and adapts when life changes."
              eyebrow="What is missing"
              title="They do not create systems"
            />
          </div>
      </Container>
      </Section>

     <Section id="vision">
       <Container>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              How LifeOS works
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
              A continuous loop for execution and improvement.
            </h2>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <div
                className="rounded-2xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950"
                key={step.title}
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-zinc-950 text-sm font-semibold text-white dark:bg-white dark:text-zinc-950">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-lg font-semibold text-zinc-950 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
              </Container>
      </Section>

      <Section variant="muted" id="features">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                Feature preview
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
                Designed for goals, habits, projects, and daily execution.
              </h2>
            </div>
            <Button href="#roadmap" variant="secondary">
              View Roadmap
            </Button>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <FeatureCard
                description={feature.description}
                key={feature.title}
                title={feature.title}
              />
            ))}
          </div>
     </Container>
</Section>

     <Section id="roadmap">
       <Container className="max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
            Roadmap
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-white sm:text-4xl">
            Phase 1 starts with a focused public experience.
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-600 dark:text-zinc-400">
            This page introduces the LifeOS vision before authentication,
            dashboards, data, and AI workflows are added in later phases.
          </p>
          <div className="mt-8">
            <Button href="#">Build Your System</Button>
                  </div>
        </Container>
      </Section>
    </main>
  );
}
