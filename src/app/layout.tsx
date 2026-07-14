/** @format */

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/CommonComponents/NavBar";
import Footer from "@/components/CommonComponents/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Famora | AI Family Assistant on WhatsApp",
    template: "%s | Famora",
  },
  description:
    "Famora helps families manage reminders, plans, and coordination through a WhatsApp-first AI assistant.",
  applicationName: "Famora",
  keywords: [
    "Famora",
    "family assistant",
    "AI assistant",
    "WhatsApp assistant",
    "family planning",
    "reminders",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased `}
    >
      <body
        suppressHydrationWarning={true}
        className="min-h-full flex flex-col bg-background w-full mx-auto"
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
