"use client";

import { useMemo, useState } from "react";

import UserDetailsCard from "@/app/features/dashboard/user-details-card";
import UsersManagementTable from "@/app/features/dashboard/users-management-table";
import { useDashboardData } from "@/app/features/dashboard/use-dashboard-data";
import { Card, CardContent } from "@/components/ui/card";
import type { User } from "@/types/dashboard";

export default function UsersPage() {
  const { data, isLoading, isError, error } = useDashboardData();
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);

  const selectedUser: User | null = useMemo(() => {
    if (!data || selectedUserId === null) {
      return null;
    }

    return data.users.find((user) => user.id === selectedUserId) ?? null;
  }, [data, selectedUserId]);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">Users</h2>
          <p className="text-sm text-muted-foreground">
            Review customer accounts and subscription details
          </p>
        </div>

        <Card>
          <CardContent className="p-6 text-sm text-muted-foreground">
            Loading users...
          </CardContent>
        </Card>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="rounded-lg border border-destructive/20 bg-destructive/10 p-4 text-sm">
        <p className="font-medium">Something went wrong</p>
        <p className="text-muted-foreground">
          {error instanceof Error ? error.message : "Failed to load users"}
        </p>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Users</h2>
        <p className="text-sm text-muted-foreground">
          Review customer accounts and subscription details
        </p>
      </div>

      <div className="grid gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <UsersManagementTable
            users={data.users}
            selectedUserId={selectedUserId}
            onSelectUser={(user) => setSelectedUserId(user.id)}
          />
        </div>

        <div>
          <UserDetailsCard user={selectedUser} />
        </div>
      </div>
    </div>
  );
}
