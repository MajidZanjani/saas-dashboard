"use client";

import { useState } from "react";

import AnalyticsRevenueChart from "@/app/features/dashboard/analytics-revenue-chart";
import AnalyticsSkeleton from "@/app/features/dashboard/analytics-skeleton";
import AnalyticsStats from "@/app/features/dashboard/analytics-stats";
import DeviceUsageChart from "@/app/features/dashboard/device-usage-chart";
import TrafficSourcesChart from "@/app/features/dashboard/traffic-sources-chart";
import { Button } from "@/components/ui/button";
import { useAnalyticsData } from "@/app/features/dashboard/use-analytics-data";

const ranges = ["7 days", "30 days", "90 days"];

export default function AnalyticsPage() {
  const [selectedRange, setSelectedRange] = useState("30 days");
  const { data, isLoading, isError, error } = useAnalyticsData();

  if (isLoading) {
    return <AnalyticsSkeleton />;
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm">
        <p className="font-medium">Something went wrong</p>
        <p className="text-muted-foreground">
          {error instanceof Error
            ? error.message
            : "Failed to load analytics data"}
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Analytics</h2>
          <p className="text-sm text-muted-foreground">
            Monitor traffic, revenue, and user engagement
          </p>
        </div>

        <div className="flex gap-2">
          {ranges.map((range) => (
            <Button
              key={range}
              variant={selectedRange === range ? "default" : "outline"}
              onClick={() => setSelectedRange(range)}
            >
              {range}
            </Button>
          ))}
        </div>
      </div>

      <AnalyticsStats stats={data.stats} />

      <section className="grid min-w-0 gap-4 lg:grid-cols-7">
        <AnalyticsRevenueChart data={data.revenueTrend} />
      </section>

      <section className="grid min-w-0 gap-4 lg:grid-cols-2">
        <TrafficSourcesChart data={data.trafficSources} />
        <DeviceUsageChart data={data.deviceUsage} />
      </section>
    </div>
  );
}
