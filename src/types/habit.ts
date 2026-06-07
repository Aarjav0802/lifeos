export type HabitFrequency =
  | "daily"
  | "weekdays"
  | "weekly"
  | "custom";

export type Habit = {
  id: string;
  createdAt: string;   
  updatedAt: string;   

  title: string;
  description?: string;

  frequency: HabitFrequency;


  goalId?: string;


  archivedAt?: string;
};

export type HabitEntry = {
  id: string;


  habitId: string;


  date: string;


  note?: string;
};