import { DailyFocus } from "@/features/dashboard/components/DailyFocus";
import { PriorityList } from "@/features/dashboard/components/PriorityList";
import { SystemOverview } from "@/features/dashboard/components/SystemOverview";
import { dailyFocus } from "@/features/dashboard/data/dashboard-data";
import type {
  DashboardPriority,
  SystemMetric,
} from "@/features/dashboard/types/dashboard.types";

import { goals, habitEntries, tasks } from "@/features/life/data";
import {
  getGoalSummary,
  getHighestPriorityTasks,
  getRecentEntryCount,
  getTaskSummary,
} from "@/features/life/selectors";

export default function DashboardPage() {
  // Top 3 active tasks by priority, mapped to dashboard presentation shape.
  const priorities: DashboardPriority[] = getHighestPriorityTasks(tasks, 3).map(
    (task, index) => ({
      id: task.id,
      rank: index + 1,
      title: task.title,
      category: task.priority.charAt(0).toUpperCase() + task.priority.slice(1),
      description: task.description ?? "",
    }),
  );

  const goalSummary = getGoalSummary(goals);
  const taskSummary = getTaskSummary(tasks);
  const recentHabitActivity = getRecentEntryCount(habitEntries, 7);

  const systems: SystemMetric[] = [
    {
      id: "goals",
      name: "Goals",
      metric: `${goalSummary.active} active goals`,
      description: "Long-horizon outcomes driving every priority below them.",
    },
    {
      id: "habits",
      name: "Habits",
      metric: `${recentHabitActivity} entries this week`,
      description: "Daily anchors that build the conditions for execution.",
    },
    {
      id: "tasks",
      name: "Tasks",
      metric: `${taskSummary.todo + taskSummary.inProgress} active tasks`,
      description: "Discrete work in motion across every active goal.",
    },
    {
      id: "reviews",
      name: "Reviews",
      metric: "Last: 3 days ago",
      description: "Weekly reflection that keeps the system honest.",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      {/* Orientation — full width */}
      <DailyFocus focus={dailyFocus} />

      {/* Priorities (left, wider) + Systems (right) */}
      <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <PriorityList priorities={priorities} />
        <SystemOverview systems={systems} />
      </div>
    </div>
  );
}