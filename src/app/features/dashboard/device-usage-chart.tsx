"use client";

import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { DeviceUsage } from "@/types/dashboard";

type DeviceUsageChartProps = {
  data: DeviceUsage[];
};

const COLORS = ["var(--chart-1)", "var(--chart-2)", "var(--chart-3)"];

export default function DeviceUsageChart({ data }: DeviceUsageChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Usage</CardTitle>
        <CardDescription>Users by device type</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="h-75 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="users"
                nameKey="device"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={{ fill: "var(--foreground)", fontSize: 12 }}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={entry.device}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: "var(--card)",
                  color: "var(--card-foreground)",
                  border: "1px solid var(--border)",
                  borderRadius: "12px",
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
