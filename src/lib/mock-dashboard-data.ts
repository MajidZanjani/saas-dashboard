import type { DashboardData } from "@/types/dashboard";

export const mockDashboardData: DashboardData = {
  stats: [
    {
      title: "Total Revenue",
      value: "$24,580",
      change: "+12.4% from last month",
    },
    {
      title: "Active Users",
      value: "1,284",
      change: "+8.1% from last month",
    },
    {
      title: "New Orders",
      value: "356",
      change: "+5.7% from last month",
    },
    {
      title: "Conversion Rate",
      value: "3.24%",
      change: "+0.6% from last month",
    },
  ],
  revenue: [
    { month: "Jan", revenue: 3200 },
    { month: "Feb", revenue: 4100 },
    { month: "Mar", revenue: 3800 },
    { month: "Apr", revenue: 5200 },
    { month: "May", revenue: 6100 },
    { month: "Jun", revenue: 5700 },
    { month: "Jul", revenue: 6800 },
  ],
  users: [
    {
      id: 1,
      name: "Emma Johnson",
      email: "emma.johnson@example.com",
      plan: "Pro",
      status: "Active",
    },
    {
      id: 2,
      name: "Liam Carter",
      email: "liam.carter@example.com",
      plan: "Free",
      status: "Pending",
    },
    {
      id: 3,
      name: "Sophia Brown",
      email: "sophia.brown@example.com",
      plan: "Enterprise",
      status: "Active",
    },
    {
      id: 4,
      name: "Noah Wilson",
      email: "noah.wilson@example.com",
      plan: "Pro",
      status: "Inactive",
    },
    {
      id: 5,
      name: "Olivia Davis",
      email: "olivia.davis@example.com",
      plan: "Pro",
      status: "Active",
    },
    {
      id: 6,
      name: "James Miller",
      email: "james.miller@example.com",
      plan: "Free",
      status: "Active",
    },
    {
      id: 7,
      name: "Ava Moore",
      email: "ava.moore@example.com",
      plan: "Enterprise",
      status: "Pending",
    },
    {
      id: 8,
      name: "William Taylor",
      email: "william.taylor@example.com",
      plan: "Pro",
      status: "Active",
    },
    {
      id: 9,
      name: "Isabella Anderson",
      email: "isabella.anderson@example.com",
      plan: "Free",
      status: "Inactive",
    },
    {
      id: 10,
      name: "Benjamin Thomas",
      email: "benjamin.thomas@example.com",
      plan: "Pro",
      status: "Active",
    },
    {
      id: 11,
      name: "Mia Jackson",
      email: "mia.jackson@example.com",
      plan: "Enterprise",
      status: "Active",
    },
    {
      id: 12,
      name: "Lucas White",
      email: "lucas.white@example.com",
      plan: "Free",
      status: "Pending",
    },
  ],
  recentActivity: [
    "New user registered",
    "Invoice paid successfully",
    "Admin updated billing settings",
    "Subscription upgraded to Pro",
  ],
  aiInsights: [
    {
      id: 1,
      title: "Revenue growth detected",
      summary:
        "Revenue increased steadily over the last 3 months, showing a positive upward trend in customer spending.",
      severity: "low",
    },
    {
      id: 2,
      title: "User conversion opportunity",
      summary:
        "A large portion of users remain on the Free plan. Promoting Pro features could improve upgrade conversions.",
      severity: "medium",
    },
    {
      id: 3,
      title: "Inactive users increasing",
      summary:
        "Inactive accounts have grown compared to previous periods. Consider a re-engagement email campaign.",
      severity: "high",
    },
  ],
};
