export type DailyFocusData = {
 
  intention: string;
  
  context: string;
  
  date: string;
};

export type Priority = {
  id: string;
  
  rank: 1 | 2 | 3;
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

export type DashboardData = {
  focus: DailyFocusData;
  priorities: Priority[];
  systems: SystemMetric[];
};


export const dashboardData: DashboardData = {
  focus: {
    intention: "Ship foundation. Build momentum.",
    context:
      "Focus on architecture decisions that compound. Every clean abstraction today saves an hour of untangling tomorrow.",
    date: "Today",
  },

  priorities: [
    {
      id: "p1",
      rank: 1,
      title: "Complete the dashboard feature shell",
      category: "Build",
      description:
        "Ship a static but real Daily Command Center. Prove the feature folder pattern works end-to-end.",
    },
    {
      id: "p2",
      rank: 2,
      title: "Define the Goal data model",
      category: "Architecture",
      description:
        "Sketch the Goal type before writing a single database schema. Types first, tables second.",
    },
    {
      id: "p3",
      rank: 3,
      title: "30-minute deep work block — no interruptions",
      category: "Execution",
      description:
        "Protect one unbroken block. A single focused hour outperforms three fragmented ones.",
    },
  ],

  systems: [
    {
      id: "s1",
      name: "Goals",
      metric: "3 active goals",
      description: "Long-horizon outcomes driving every priority below them.",
    },
    {
      id: "s2",
      name: "Habits",
      metric: "5-day streak",
      description: "Daily anchors that build the conditions for execution.",
    },
    {
      id: "s3",
      name: "Projects",
      metric: "2 in progress",
      description: "Bounded work with a clear definition of done.",
    },
    {
      id: "s4",
      name: "Reviews",
      metric: "Last: 3 days ago",
      description: "Weekly reflection that keeps the system honest.",
    },
  ],
};