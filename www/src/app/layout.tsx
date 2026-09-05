import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Dashboard } from "@/dashboard/Dashboard";
import { TerminalChrome } from "@/components/terminal-chrome";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Logan Choi — Software Engineer",
  description:
    "Logan Choi is a Computer Science and Data Science senior at SMU graduating May 2027, building autonomous agents, decentralized backends, and embedded systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${plexMono.variable} antialiased`}>
        <div className="mx-3 my-4 max-w-4xl rounded-xl border border-border bg-background shadow-2xl shadow-black/30 sm:mx-6 sm:my-10 lg:mx-auto">
          <TerminalChrome />
          {children}
        </div>
        <Dashboard />
      </body>
    </html>
  );
}
