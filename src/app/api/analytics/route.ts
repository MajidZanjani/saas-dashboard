import { NextResponse } from "next/server";
import { mockAnalyticsData } from "@/lib/mock-analytics-data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 700));

  return NextResponse.json(mockAnalyticsData);
}
