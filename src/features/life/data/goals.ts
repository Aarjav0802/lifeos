import type { Goal } from "@/types";


export const goals: Goal[] = [
  {
    id: "goal-1",
    createdAt: "2025-05-01T08:00:00.000Z",
    updatedAt: "2025-06-01T08:00:00.000Z",
    title: "Build and ship LifeOS v1",
    description:
      "Design, develop, and launch the first public version of LifeOS — a personal operating system that turns goals into daily execution.",
    status: "active",
    timeframe: "quarterly",
    targetDate: "2025-08-31",
  },
  {
    id: "goal-2",
    createdAt: "2025-05-01T08:00:00.000Z",
    updatedAt: "2025-06-01T08:00:00.000Z",
    title: "Establish a consistent health rhythm",
    description:
      "Build sustainable exercise and recovery habits that persist without relying on motivation.",
    status: "active",
    timeframe: "monthly",
    targetDate: "2025-06-30",
  },
  {
    id: "goal-3",
    createdAt: "2025-04-01T08:00:00.000Z",
    updatedAt: "2025-05-15T08:00:00.000Z",
    title: "Complete system design course",
    description:
      "Finish the distributed systems design curriculum to strengthen backend architecture decisions.",
    status: "paused",
    timeframe: "quarterly",
    targetDate: "2025-09-30",
  },
  {
    id: "goal-4",
    createdAt: "2025-01-01T08:00:00.000Z",
    updatedAt: "2025-03-31T08:00:00.000Z",
    title: "Read 12 books this year",
    description:
      "One book per month across technical, biographical, and philosophical categories.",
    status: "active",
    timeframe: "annual",
  },
];