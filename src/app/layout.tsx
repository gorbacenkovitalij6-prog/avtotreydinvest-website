import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Автотрейдинвест - Пригон автомобилей из Европы | Смоленск",
  description: "Торговля легковыми и грузовыми автомобилями. Пригон из Европы под ключ. ООО Автотрейдинвест, г. Смоленск. Полное сопровождение сделки.",
  icons: {
    icon: [
      { url: "/icon?v=3", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-icon?v=3", sizes: "180x180", type: "image/png" },
    ],
  },
  other: {
    'yandex-verification': '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <Script
          crossOrigin="anonymous"
          src="//unpkg.com/same-runtime/dist/index.global.js"
        />
      </head>
      <body suppressHydrationWarning className="antialiased">
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
