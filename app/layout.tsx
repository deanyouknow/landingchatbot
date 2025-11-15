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
  title: "Panduan Kanker Serviks - Sumber Edukasi Komprehensif",
  description: "Panduan lengkap kanker serviks: pencegahan, deteksi dini, skrining, pilihan pengobatan, dan sumber dukungan. Pelajari tentang vaksinasi HPV, faktor risiko, gejala, dan tingkat kelangsungan hidup.",
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
