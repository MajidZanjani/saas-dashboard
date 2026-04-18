import { NextResponse } from "next/server";
import OpenAI from "openai";

import { fallbackAIInsights } from "@/lib/fallback-ai-insights";
import { mockDashboardData } from "@/lib/mock-dashboard-data";
import type { AIInsight } from "@/types/dashboard";

type OpenAIInsightResponse = {
  insights: AIInsight[];
};

function buildPrompt() {
  const { stats, revenue, users, recentActivity } = mockDashboardData;

  const usersByStatus = users.reduce(
    (acc, user) => {
      acc[user.status] = (acc[user.status] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  const usersByPlan = users.reduce(
    (acc, user) => {
      acc[user.plan] = (acc[user.plan] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return `
You are a senior SaaS product analyst.

Analyze the dashboard data below and generate exactly 3 concise, professional business insights.

Requirements:
- Return valid JSON only
- Format:
{
  "insights": [
    {
      "id": 1,
      "title": "short title",
      "summary": "1-2 sentence business insight",
      "severity": "low" | "medium" | "high"
    }
  ]
}
- Focus on trends, risks, opportunities, and recommended priorities
- Keep titles short and executive-friendly
- Keep summaries practical and professional
- Do not include markdown
- Do not include extra text outside JSON

Dashboard data:
Stats: ${JSON.stringify(stats)}
Revenue Trend: ${JSON.stringify(revenue)}
Users by Status: ${JSON.stringify(usersByStatus)}
Users by Plan: ${JSON.stringify(usersByPlan)}
Recent Activity: ${JSON.stringify(recentActivity)}
`;
}

export async function POST() {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({
      insights: fallbackAIInsights,
      source: "fallback",
    });
  }

  try {
    const client = new OpenAI({ apiKey });

    const completion = await client.chat.completions.create({
      model: "gpt-4.1-mini",
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content:
            "You are an expert SaaS analyst who produces concise executive insights in strict JSON.",
        },
        {
          role: "user",
          content: buildPrompt(),
        },
      ],
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      return NextResponse.json({
        insights: fallbackAIInsights,
        source: "fallback",
      });
    }

    const parsed = JSON.parse(content) as OpenAIInsightResponse;

    if (!parsed.insights || !Array.isArray(parsed.insights)) {
      return NextResponse.json({
        insights: fallbackAIInsights,
        source: "fallback",
      });
    }

    return NextResponse.json({
      insights: parsed.insights,
      source: "openai",
    });
  } catch (error) {
    console.error("AI insights generation failed:", error);

    return NextResponse.json({
      insights: fallbackAIInsights,
      source: "fallback",
    });
  }
}
