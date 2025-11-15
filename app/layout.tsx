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
  title: "Cervical Cancer Guide - Comprehensive Educational Resource",
  description: "Complete guide to cervical cancer: prevention, early detection, screening, treatment options, and support resources. Learn about HPV vaccination, risk factors, symptoms, and survival rates.",
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
