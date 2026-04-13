import { Bell } from "lucide-react";

import LogoutButton from "@/components/layout/logout-button";
import MobileSidebar from "@/components/layout/mobile-sidebar";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-3">
        <MobileSidebar />
        <div>
          <h1 className="text-lg font-semibold">Dashboard</h1>
          <p className="text-sm text-muted-foreground">Welcome back, Majid</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>

        <Avatar>
          <AvatarFallback>MZ</AvatarFallback>
        </Avatar>

        <LogoutButton />
      </div>
    </header>
  );
}
