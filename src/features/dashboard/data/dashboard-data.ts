import type { DailyFocusData } from "@/features/dashboard/types/dashboard.types";

export const dailyFocus: DailyFocusData = {
  intention: "Ship foundation. Build momentum.",
  context:
    "Focus on architecture decisions that compound. Every clean abstraction today saves an hour of untangling tomorrow.",
  date: new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  }),
};