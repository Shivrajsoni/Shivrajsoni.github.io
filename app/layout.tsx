import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ViewTransitions } from 'next-view-transitions';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shivraj Soni | Portfolio | web Developer | web3 Engineer",
  description: "Shivraj Soni Portfolio showcasing real-world projects, coding skills, and a blog on web dev and blockchain. Let’s build the future together.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <main className="bg-white dark:border-zinc-800 border-zinc-200 border-2 dark:bg-zinc-900 min-h-screen max-w-2xl mx-auto my-1 px-4 py-4">
            {children}
          </main>
        </body>
      </html>

    </ViewTransitions>
  );
}
