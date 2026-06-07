export type TaskStatus =
  | "todo"
  | "in_progress"
  | "done"
  | "cancelled";


export type TaskPriority =
  | "low"
  | "medium"
  | "high"
  | "critical";

export type Task = {
  id: string;
  createdAt: string;    
  updatedAt: string;    

  title: string;
  description?: string;

  status: TaskStatus;
  priority: TaskPriority;

  
  goalId?: string;

  
  dueDate?: string;

 
  completedAt?: string;
};