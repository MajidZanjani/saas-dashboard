import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { User } from "@/types/dashboard";

type UserDetailsCardProps = {
  user: User | null;
};

export default function UserDetailsCard({ user }: UserDetailsCardProps) {
  if (!user) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
          <CardDescription>
            Select a user to view more information
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border border-dashed p-8 text-center text-sm text-muted-foreground">
            No user selected
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>User Details</CardTitle>
        <CardDescription>Account summary for the selected user</CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        <div>
          <p className="text-sm text-muted-foreground">Name</p>
          <p className="font-medium">{user.name}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Email</p>
          <p className="font-medium">{user.email}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Plan</p>
          <p className="font-medium">{user.plan}</p>
        </div>

        <div>
          <p className="text-sm text-muted-foreground">Status</p>
          <Badge
            variant={
              user.status === "Active"
                ? "default"
                : user.status === "Pending"
                  ? "secondary"
                  : "outline"
            }
          >
            {user.status}
          </Badge>
        </div>
      </CardContent>
    </Card>
  );
}
