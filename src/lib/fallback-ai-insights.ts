import type { AIInsight } from "@/types/dashboard";

export const fallbackAIInsights: AIInsight[] = [
  {
    id: 1,
    title: "Revenue growth detected",
    summary:
      "Revenue shows a stable upward trend over recent months, suggesting healthy customer activity and stronger retention.",
    severity: "low",
  },
  {
    id: 2,
    title: "Upgrade opportunity",
    summary:
      "A significant share of users remain on lower-tier plans. Highlighting Pro features could improve conversion.",
    severity: "medium",
  },
  {
    id: 3,
    title: "Inactive users need attention",
    summary:
      "Inactive accounts are present in the user base. A re-engagement campaign may help recover usage.",
    severity: "high",
  },
];
