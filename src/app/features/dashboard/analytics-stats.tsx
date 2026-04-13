import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { AnalyticsStat } from "@/types/dashboard";

type AnalyticsStatsProps = {
  stats: AnalyticsStat[];
};

export default function AnalyticsStats({ stats }: AnalyticsStatsProps) {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="pb-2">
            <CardDescription>{stat.title}</CardDescription>
            <CardTitle>{stat.value}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </section>
  );
}
