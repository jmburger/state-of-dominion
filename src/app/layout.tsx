import type { Metadata, Viewport } from "next";
import { Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "State of Dominion | The First Collection",
  description:
    "State of Dominion — denim built with intention. Heavy fabric, real structure, longer lengths and considered fits. Est. 2025. Be among the first.",
};

export const viewport: Viewport = {
  themeColor: "#080808",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} h-full`}>
      <body id="top" className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
