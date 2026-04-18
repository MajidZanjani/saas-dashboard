"use client";

import { Sparkles } from "lucide-react";
import { useState } from "react";

import { useAIInsights } from "./use-ai-insights";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AIInsight } from "@/types/dashboard";

export default function AIInsightsPanel() {
  const [generatedInsights, setGeneratedInsights] = useState<
    AIInsight[] | null
  >(null);

  const { mutate, isPending, data } = useAIInsights();

  function getBadgeVariant(severity: AIInsight["severity"]) {
    if (severity === "high") return "destructive";
    if (severity === "medium") return "secondary";
    return "outline";
  }

  function handleGenerate() {
    mutate(undefined, {
      onSuccess: (response) => {
        setGeneratedInsights(response.insights);
      },
    });
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5" />
            <CardTitle>AI Insights</CardTitle>
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={handleGenerate}
            disabled={isPending}
          >
            {isPending ? "Generating..." : "Generate AI Insights"}
          </Button>
        </div>

        <CardDescription>
          Generate automated highlights and recommendations based on dashboard
          activity
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {!generatedInsights && !isPending ? (
          <div className="rounded-lg border border-dashed p-6 text-center">
            <p className="font-medium">No insights generated yet</p>
            <p className="text-sm text-muted-foreground">
              Click the button above to generate AI-powered dashboard insights.
            </p>
          </div>
        ) : null}

        {isPending ? (
          <div className="rounded-lg border border-dashed p-6 text-center">
            <p className="font-medium">Generating insights...</p>
            <p className="text-sm text-muted-foreground">
              Analyzing dashboard activity and preparing recommendations.
            </p>
          </div>
        ) : null}

        {data?.source && generatedInsights ? (
          <div className="text-xs text-muted-foreground">
            Source: {data.source === "openai" ? "OpenAI" : "Fallback"}
          </div>
        ) : null}

        {generatedInsights?.map((insight) => (
          <div key={insight.id} className="space-y-2 rounded-lg border p-4">
            <div className="flex items-center justify-between gap-3">
              <p className="font-medium">{insight.title}</p>
              <Badge variant={getBadgeVariant(insight.severity)}>
                {insight.severity}
              </Badge>
            </div>

            <p className="text-sm text-muted-foreground">{insight.summary}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
