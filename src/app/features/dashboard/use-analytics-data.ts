"use client";

import { useQuery } from "@tanstack/react-query";
import { getAnalyticsData } from "@/services/analytics";

export function useAnalyticsData() {
  return useQuery({
    queryKey: ["analytics-data"],
    queryFn: getAnalyticsData,
  });
}
