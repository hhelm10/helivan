import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "apps",
  description:
    "AgentWatch: daily behavioral scans for agent fleets. Quench: full eval signal at a fraction of the queries and cost.",
};

export default function AppsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
