"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { RevenuePoint } from "@/types/dashboard";

type AnalyticsRevenueChartProps = {
  data: RevenuePoint[];
};

export default function AnalyticsRevenueChart({
  data,
}: AnalyticsRevenueChartProps) {
  return (
    <Card className="lg:col-span-4">
      <CardHeader>
        <CardTitle>Revenue Trend</CardTitle>
        <CardDescription>Monthly revenue performance</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="h-75 min-w-0 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  color: "var(--card-foreground)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="var(--chart-1)"
                strokeWidth={2}
                dot={{ fill: "var(--chart-1)" }}
                activeDot={{ r: 6 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
