import type { Habit, HabitEntry } from "@/types";

export type HabitSummary = {
  total: number;
  active: number;
  archived: number;
};

export function getActiveHabits(habits: Habit[]): Habit[] {
  return habits.filter((habit) => habit.archivedAt == null);
}

export function getHabitSummary(habits: Habit[]): HabitSummary {
  const active = getActiveHabits(habits).length;

  return {
    total: habits.length,
    active,
    archived: habits.length - active,
  };
}

export function getRecentEntryCount(entries: HabitEntry[], days: number): number {
  const today = new Date();
  const cutoff = new Date(today);
  cutoff.setDate(cutoff.getDate() - (days - 1));

  const cutoffDateString = cutoff.toISOString().slice(0, 10);
  const todayDateString = today.toISOString().slice(0, 10);

  return entries.filter(
    (entry) => entry.date >= cutoffDateString && entry.date <= todayDateString,
  ).length;
}