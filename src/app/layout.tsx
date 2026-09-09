import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const display = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "State of Dominion | A State of Your Own",
  description:
    "State of Dominion — denim built with intention. Heavy fabric, real structure, longer lengths and considered fits. Est. 2025. Be among the first.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${display.variable} h-full`}>
      <body id="top" className="min-h-full antialiased">
        {children}
      </body>
    </html>
  );
}
