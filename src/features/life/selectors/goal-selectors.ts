import type { Goal } from "@/types";


export type GoalSummary = {
  total: number;
  active: number;
  completed: number;
  paused: number;
  abandoned: number;
};

export function getActiveGoals(goals: Goal[]): Goal[] {
  return goals.filter((goal) => goal.status === "active");
}

export function getGoalSummary(goals: Goal[]): GoalSummary {
  return {
    total: goals.length,
    active: goals.filter((goal) => goal.status === "active").length,
    completed: goals.filter((goal) => goal.status === "completed").length,
    paused: goals.filter((goal) => goal.status === "paused").length,
    abandoned: goals.filter((goal) => goal.status === "abandoned").length,
  };
}