import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "thesis",
  description: "a geometric perspective on multi-agent systems.",
};

export default function ThesisLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
