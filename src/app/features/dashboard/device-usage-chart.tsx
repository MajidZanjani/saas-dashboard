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

const COLORS = ["#111111", "#555555", "#999999"];

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
                label
              >
                {data.map((entry) => (
                  <Cell key={entry.device} fill={COLORS[data.indexOf(entry)]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
