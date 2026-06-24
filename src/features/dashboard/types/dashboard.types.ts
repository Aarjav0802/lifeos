export type DashboardPriority = {
  id: string;
  rank: number;
  title: string;
  category: string;
  description: string;
};
 
export type SystemMetric = {
  id: string;
  name: string;
  metric: string;
  description: string;
};
 
export type DailyFocusData = {
  intention: string;
  context: string;
  date: string;
};
 