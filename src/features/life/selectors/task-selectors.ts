import type { Task, TaskPriority } from "@/types";


export type TaskSummary = {
  total: number;
  todo: number;
  inProgress: number;
  done: number;
  cancelled: number;
};

const priorityWeight: Record<TaskPriority, number> = {
  critical: 3,
  high: 2,
  medium: 1,
  low: 0,
};

export function getActiveTasks(tasks: Task[]): Task[] {
  return tasks.filter(
    (task) => task.status === "todo" || task.status === "in_progress",
  );
}

export function getHighestPriorityTasks(tasks: Task[], limit: number): Task[] {
  return getActiveTasks(tasks)
    .slice()
    .sort((a, b) => priorityWeight[b.priority] - priorityWeight[a.priority])
    .slice(0, limit);
}

export function getTasksByGoal(tasks: Task[], goalId: string): Task[] {
  return tasks.filter((task) => task.goalId === goalId);
}

export function getTaskSummary(tasks: Task[]): TaskSummary {
  return {
    total: tasks.length,
    todo: tasks.filter((task) => task.status === "todo").length,
    inProgress: tasks.filter((task) => task.status === "in_progress").length,
    done: tasks.filter((task) => task.status === "done").length,
    cancelled: tasks.filter((task) => task.status === "cancelled").length,
  };
}