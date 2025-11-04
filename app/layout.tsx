import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ChatbotIcon from "../components/ChatbotIcon";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VaccineGuard - Smart Vaccination Management",
  description: "Advanced vaccine tracking and management system designed to keep you and your loved ones safe. Monitor vaccination schedules, receive reminders, and access comprehensive health records.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <div className="fixed z-[99] right-0 bottom-10 w-full bg-amber-400">
          <ChatbotIcon />
        </div>
      </body>
    </html>
  );
}
