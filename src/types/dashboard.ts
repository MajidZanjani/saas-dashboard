export type Stat = {
  title: string;
  value: string;
  change: string;
};

export type RevenuePoint = {
  month: string;
  revenue: number;
};

export type User = {
  id: number;
  name: string;
  email: string;
  plan: "Free" | "Pro" | "Enterprise";
  status: "Active" | "Pending" | "Inactive";
};

export type AnalyticsStat = {
  title: string;
  value: string;
  change: string;
};

export type TrafficSource = {
  source: string;
  visitors: number;
};

export type DeviceUsage = {
  device: string;
  users: number;
};

export type AnalyticsData = {
  stats: AnalyticsStat[];
  trafficSources: TrafficSource[];
  deviceUsage: DeviceUsage[];
  revenueTrend: RevenuePoint[];
};

export type AIInsight = {
  id: number;
  title: string;
  summary: string;
  severity: "high" | "medium" | "low";
};

export type DashboardData = {
  stats: Stat[];
  revenue: RevenuePoint[];
  users: User[];
  recentActivity: string[];
  aiInsights: AIInsight[];
};
