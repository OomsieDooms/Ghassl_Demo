import type { Metadata } from "next";
import { Noto_Sans_Arabic, Outfit } from "next/font/google";
import { LanguageProvider } from "@/context/LanguageContext";
import Navbar from "@/components/Navbar";
import "./globals.css";

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Ghassel - Mobile Car Wash",
  description: "Premium mobile car wash service at your doorstep.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={`${notoSansArabic.variable} ${outfit.variable}`} suppressHydrationWarning>
      <body className="antialiased min-h-screen bg-gray-50 text-gray-900 font-arabic dark:bg-gray-900 dark:text-gray-100" suppressHydrationWarning>
        <LanguageProvider>
          <Navbar />
          <main>
            {children}
          </main>
        </LanguageProvider>
      </body>
    </html>
  );
}
