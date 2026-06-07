export type GoalStatus =
  | "active"
  | "completed"
  | "paused"
  | "abandoned";


export type GoalTimeframe =
  | "weekly"
  | "monthly"
  | "quarterly"
  | "annual"
  | "open";

export type Goal = {
  id: string;
  createdAt: string;   
  updatedAt: string;   

  title: string;
  description?: string;

  status: GoalStatus;
  timeframe: GoalTimeframe;

  
  targetDate?: string;
};