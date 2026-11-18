import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Personal portfolio built with Next.js and DevOps tools"
};

export default function RootLayout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
