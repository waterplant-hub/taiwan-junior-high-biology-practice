import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "生物考古題",
  description: "國中教育會考與基測生物歷屆試題練習。",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant-TW">
      <body>{children}</body>
    </html>
  );
}
