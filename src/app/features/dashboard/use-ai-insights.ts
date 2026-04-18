"use client";

import { useMutation } from "@tanstack/react-query";
import type { AIInsight } from "@/types/dashboard";

type AIInsightsResponse = {
  insights: AIInsight[];
  source: "openai" | "fallback";
};

async function generateAIInsights(): Promise<AIInsightsResponse> {
  const response = await fetch("/api/ai-insights", {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to generate AI insights");
  }

  return response.json();
}

export function useAIInsights() {
  return useMutation({
    mutationFn: generateAIInsights,
  });
}
