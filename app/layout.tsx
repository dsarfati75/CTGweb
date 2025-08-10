import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CinemaTech — RMM & EDR for Cinemas",
  description: "Uptime, security, and peace of mind for cinema operators.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-neutral-50 text-neutral-900">{children}</body>
    </html>
  );
}
