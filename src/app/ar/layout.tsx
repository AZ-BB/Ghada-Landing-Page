import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "الدكتورة غادة مرسي",
  description: "طب التجميل",
};

export default function ArabicLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className="dark">
      <body className="antialiased bg-background text-foreground selection:bg-gold/20 selection:text-foreground">
        {children}
      </body>
    </html>
  );
}


