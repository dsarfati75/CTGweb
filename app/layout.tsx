import "./globals.css";
import type { Metadata } from "next";
import Header from "../components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cinematechgroup.com"),
  title: {
    default: "CinemaTech Group — RMM & EDR for Independent Cinemas",
    template: "%s | CinemaTech Group",
  },
  description:
    "CinemaTech provides affordable Remote Monitoring & Management (RMM) and Endpoint Detection & Response (EDR) services tailored for independent cinema operators. Protect systems, reduce downtime, and cut IT costs.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "https://www.cinematechgroup.com/",
    siteName: "CinemaTech Group",
    title: "CinemaTech Group — RMM & EDR for Independent Cinemas",
    description:
      "RMM and EDR solutions purpose-built for independent cinema operators. Improve uptime, reduce risk, and control IT spend.",
  },
  twitter: {
    card: "summary",
    title: "CinemaTech Group — RMM & EDR for Independent Cinemas",
    description:
      "Affordable RMM and EDR services for independent cinema operators.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
