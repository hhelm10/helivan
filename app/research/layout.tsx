import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "research",
  description:
    "technical reports and published papers on monitoring and evaluating models, agents, and multi-agent systems — ICML, ACL, EMNLP.",
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
