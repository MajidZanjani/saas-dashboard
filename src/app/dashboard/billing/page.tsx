"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Basic features for personal use",
    features: ["Dashboard Access", "Basic Analytics", "Email Support"],
    current: false,
  },
  {
    name: "Pro",
    price: "$29/month",
    description: "Advanced features for professionals",
    features: [
      "Advanced Analytics",
      "Priority Support",
      "Team Collaboration",
      "Unlimited Projects",
    ],
    current: true,
  },
  {
    name: "Enterprise",
    price: "$99/month",
    description: "Full-featured solution for businesses",
    features: [
      "All Pro Features",
      "Dedicated Support",
      "Custom Integrations",
      "Advanced Security",
    ],
    current: false,
  },
];

const invoices = [
  {
    id: "INV-001",
    date: "2024-01-15",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "2024-02-15",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-003",
    date: "2024-03-15",
    amount: "$29.00",
    status: "Paid",
  },
  {
    id: "INV-004",
    date: "2024-04-15",
    amount: "$29.00",
    status: "Pending",
  },
];

export default function BillingPage() {
  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Billing</h2>
        <p className="text-sm text-muted-foreground">
          Manage your subscription and billing details
        </p>
      </div>

      {/* Current Plan */}
      <Card>
        <CardHeader>
          <CardTitle>Current Plan</CardTitle>
          <CardDescription>
            You are currently subscribed to the Pro plan.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Pro Plan</p>
            <p className="text-sm text-muted-foreground">$29 per month</p>
          </div>
          <Button variant="outline">Manage Subscription</Button>
        </CardContent>
      </Card>

      {/* Pricing Plans */}
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{plan.name}</CardTitle>
                {plan.current && <Badge>Current</Badge>}
              </div>
              <CardDescription>{plan.description}</CardDescription>
            </CardHeader>

            <CardContent className="flex flex-1 flex-col justify-between space-y-4">
              <div>
                <p className="text-3xl font-bold">{plan.price}</p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  {plan.features.map((feature) => (
                    <li key={feature}>• {feature}</li>
                  ))}
                </ul>
              </div>

              <Button
                variant={plan.current ? "secondary" : "default"}
                disabled={plan.current}
              >
                {plan.current ? "Current Plan" : "Upgrade"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Billing History */}
      <Card>
        <CardHeader>
          <CardTitle>Billing History</CardTitle>
          <CardDescription>
            View and download your past invoices
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {invoices.map((invoice) => (
                <TableRow key={invoice.id}>
                  <TableCell className="font-medium">{invoice.id}</TableCell>
                  <TableCell>{invoice.date}</TableCell>
                  <TableCell>{invoice.amount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        invoice.status === "Paid" ? "default" : "secondary"
                      }
                    >
                      {invoice.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="outline" size="sm">
                      Download
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
