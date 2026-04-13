import type { AnalyticsData } from "@/types/dashboard";

export const mockAnalyticsData: AnalyticsData = {
  stats: [
    {
      title: "Monthly Visitors",
      value: "48,240",
      change: "+14.2% from last month",
    },
    {
      title: "Bounce Rate",
      value: "31.8%",
      change: "-2.1% from last month",
    },
    {
      title: "Avg. Session Duration",
      value: "4m 12s",
      change: "+18s from last month",
    },
    {
      title: "New Signups",
      value: "1,124",
      change: "+9.4% from last month",
    },
  ],
  trafficSources: [
    { source: "Organic Search", visitors: 18200 },
    { source: "Direct", visitors: 12500 },
    { source: "Referral", visitors: 7600 },
    { source: "Social Media", visitors: 5900 },
    { source: "Email", visitors: 4040 },
  ],
  deviceUsage: [
    { device: "Desktop", users: 21800 },
    { device: "Mobile", users: 19100 },
    { device: "Tablet", users: 7340 },
  ],
  revenueTrend: [
    { month: "Jan", revenue: 4200 },
    { month: "Feb", revenue: 5100 },
    { month: "Mar", revenue: 4900 },
    { month: "Apr", revenue: 5600 },
    { month: "May", revenue: 6200 },
    { month: "Jun", revenue: 6800 },
    { month: "Jul", revenue: 7200 },
  ],
};
