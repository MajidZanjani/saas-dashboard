import type { AnalyticsData } from "@/types/dashboard";

export async function getAnalyticsData(): Promise<AnalyticsData> {
  const response = await fetch("/api/analytics");

  if (!response.ok) {
    throw new Error("Failed to fetch analytics data");
  }

  return response.json();
}
