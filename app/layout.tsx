import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Helivan Research",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-alexandria">{children}</body>
    </html>
  );
}
