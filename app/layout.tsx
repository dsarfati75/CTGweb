import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

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
    <html lang="en" className="scroll-smooth">
      <body>
        <Header />
        {/* pad content so it starts below the fixed 64px header */}
        <div className="pt-16">{children}</div>
      </body>
    </html>
  );
}
