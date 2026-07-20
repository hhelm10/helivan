import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "thesis",
  description:
    "the world is filling with ai agents. someone has to understand them. helivan builds the instruments: statistical tools for evaluating and monitoring populations of generative agents.",
};

export default function ThesisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
