import type { HabitEntry } from "@/types";


export const habitEntries: HabitEntry[] = [
  // habit-1: Morning planning — consistent, one gap on 26th
  { id: "he-001", habitId: "habit-1", date: "2025-05-26" },
  { id: "he-002", habitId: "habit-1", date: "2025-05-27" },
  { id: "he-003", habitId: "habit-1", date: "2025-05-28" },
  { id: "he-004", habitId: "habit-1", date: "2025-05-29" },
  // gap: 2025-05-30
  { id: "he-005", habitId: "habit-1", date: "2025-05-31" },
  { id: "he-006", habitId: "habit-1", date: "2025-06-01" },
  { id: "he-007", habitId: "habit-1", date: "2025-06-02" },
  { id: "he-008", habitId: "habit-1", date: "2025-06-03" },
  { id: "he-009", habitId: "habit-1", date: "2025-06-04" },
  { id: "he-010", habitId: "habit-1", date: "2025-06-05" },
  { id: "he-011", habitId: "habit-1", date: "2025-06-06" },
  { id: "he-012", habitId: "habit-1", date: "2025-06-07" },

  // habit-2: Workout — weekdays only, realistic
  { id: "he-013", habitId: "habit-2", date: "2025-05-26" },
  { id: "he-014", habitId: "habit-2", date: "2025-05-27" },
  { id: "he-015", habitId: "habit-2", date: "2025-05-28" },
  { id: "he-016", habitId: "habit-2", date: "2025-05-29" },
  // weekend: 31st, 1st skipped (correct for weekdays frequency)
  { id: "he-017", habitId: "habit-2", date: "2025-06-02" },
  { id: "he-018", habitId: "habit-2", date: "2025-06-03" },
  // gap: 2025-06-04 (missed)
  { id: "he-019", habitId: "habit-2", date: "2025-06-05" },
  { id: "he-020", habitId: "habit-2", date: "2025-06-06" },
  { id: "he-021", habitId: "habit-2", date: "2025-06-07", note: "Personal best on squat." },

  // habit-3: Reading — daily, two gaps
  { id: "he-022", habitId: "habit-3", date: "2025-05-26" },
  { id: "he-023", habitId: "habit-3", date: "2025-05-27" },
  // gap: 2025-05-28
  { id: "he-024", habitId: "habit-3", date: "2025-05-29" },
  { id: "he-025", habitId: "habit-3", date: "2025-05-30" },
  { id: "he-026", habitId: "habit-3", date: "2025-05-31" },
  { id: "he-027", habitId: "habit-3", date: "2025-06-01" },
  { id: "he-028", habitId: "habit-3", date: "2025-06-02" },
  // gap: 2025-06-03
  { id: "he-029", habitId: "habit-3", date: "2025-06-04" },
  { id: "he-030", habitId: "habit-3", date: "2025-06-05" },
  { id: "he-031", habitId: "habit-3", date: "2025-06-06" },
  { id: "he-032", habitId: "habit-3", date: "2025-06-07", note: "Finished chapter 3." },

  // habit-4: Evening screen cutoff — daily, more gaps (harder habit)
  { id: "he-033", habitId: "habit-4", date: "2025-05-27" },
  { id: "he-034", habitId: "habit-4", date: "2025-05-28" },
  // gap: 29th, 30th
  { id: "he-035", habitId: "habit-4", date: "2025-05-31" },
  { id: "he-036", habitId: "habit-4", date: "2025-06-01" },
  // gap: 2nd, 3rd, 4th
  { id: "he-037", habitId: "habit-4", date: "2025-06-05" },
  { id: "he-038", habitId: "habit-4", date: "2025-06-06" },
  { id: "he-039", habitId: "habit-4", date: "2025-06-07" },
];