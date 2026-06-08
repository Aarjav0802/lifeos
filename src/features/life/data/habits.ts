import type { Habit } from "@/types";


export const habits: Habit[] = [
  {
    id: "habit-1",
    createdAt: "2025-05-01T08:00:00.000Z",
    updatedAt: "2025-05-01T08:00:00.000Z",
    title: "Morning planning",
    description:
      "10 minutes at the start of each day to review priorities and set a clear intention.",
    frequency: "daily",
    goalId: "goal-1",
  },
  {
    id: "habit-2",
    createdAt: "2025-05-01T08:00:00.000Z",
    updatedAt: "2025-05-01T08:00:00.000Z",
    title: "Workout",
    description:
      "Structured exercise session — strength, cardio, or mobility.",
    frequency: "weekdays",
    goalId: "goal-2",
  },
  {
    id: "habit-3",
    createdAt: "2025-05-01T08:00:00.000Z",
    updatedAt: "2025-05-01T08:00:00.000Z",
    title: "Read for 30 minutes",
    description:
      "Deliberate reading — not articles or feeds. Books only.",
    frequency: "daily",
    goalId: "goal-4",
  },
  {
    id: "habit-4",
    createdAt: "2025-05-01T08:00:00.000Z",
    updatedAt: "2025-06-01T08:00:00.000Z",
    title: "Evening screen cutoff",
    description:
      "No screens after 10 pm. Foundational sleep hygiene — not tied to a specific goal.",
    frequency: "daily",
  },
  {
    id: "habit-5",
    createdAt: "2025-04-01T08:00:00.000Z",
    updatedAt: "2025-05-01T08:00:00.000Z",
    title: "Cold exposure",
    description:
      "Cold shower or ice bath. Discontinued after four weeks — benefit did not justify cost.",
    frequency: "daily",
    archivedAt: "2025-05-01T08:00:00.000Z",
  },
];