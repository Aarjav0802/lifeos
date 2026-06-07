import { DailyFocus } from "@/features/dashboard/components/DailyFocus";
import { PriorityList } from "@/features/dashboard/components/PriorityList";
import { SystemOverview } from "@/features/dashboard/components/SystemOverview";
import { dashboardData } from "@/features/dashboard/data/dashboard-data";

export default function DashboardPage() {
  const { focus, priorities, systems } = dashboardData;

  return (
    <div className="flex flex-col gap-5">
      <DailyFocus focus={focus} />

      <div className="grid gap-5 lg:grid-cols-[1fr_0.75fr]">
        <PriorityList priorities={priorities} />
        <SystemOverview systems={systems} />
      </div>
    </div>
  );
}