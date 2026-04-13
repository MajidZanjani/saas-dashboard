import { NextResponse } from "next/server";
import { mockDashboardData } from "@/lib/mock-dashboard-data";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 800));

  return NextResponse.json(mockDashboardData);
}
