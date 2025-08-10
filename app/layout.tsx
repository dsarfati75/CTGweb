import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header"; // ← components is at repo root

export const metadata: Metadata = {
  title: "CinemaTech",
  description: "RMM, EDR, and IT services for cinemas.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
