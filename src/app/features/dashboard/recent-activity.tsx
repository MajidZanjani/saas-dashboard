import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type RecentActivityProps = {
  items: string[];
};

export default function RecentActivity({ items }: RecentActivityProps) {
  return (
    <Card className="lg:col-span-3">
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
        <CardDescription>Latest team and customer events</CardDescription>
      </CardHeader>

      <CardContent>
        <div className="space-y-4 text-sm text-muted-foreground">
          {items.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
