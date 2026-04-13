"use client";

import RecentActivity from "../features/dashboard/recent-activity";
import DashboardSkeleton from "../features/dashboard/dashboard-skeleton";
import RevenueChart from "../features/dashboard/revenue-chart";
import StatsCards from "../features/dashboard/stats-cards";
import UsersTable from "../features/dashboard/users-table";
import { useDashboardData } from "../features/dashboard/use-dashboard-data";

export default function DashboardPage() {
  const { data, isLoading, isError, error } = useDashboardData();

  if (isLoading) {
    return <DashboardSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm">
        <p className="font-medium">Something went wrong</p>
        <p className="text-muted-foreground">
          {error instanceof Error
            ? error.message
            : "Failed to load dashboard data"}
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-6">
      <StatsCards stats={data.stats} />

      <section className="grid gap-4 lg:grid-cols-7">
        <RevenueChart data={data.revenue} />
        <RecentActivity items={data.recentActivity} />
      </section>

      <UsersTable users={data.users} />
    </div>
  );
}
