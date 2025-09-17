import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist, Cookie } from "next/font/google";

export const metadata: Metadata = {
  title: "الدكتورة غادة مرسي",
  description: "طب التجميل",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const cookie = Cookie({
  variable: "--font-cookie",
  weight: "400",
  subsets: ["latin"],
});

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${cookie.variable} antialiased bg-background text-foreground selection:bg-gold/20 selection:text-foreground`}>
        {children}
      </body>
    </html>
  );
}


