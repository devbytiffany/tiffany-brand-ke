import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

// Display face: used only for headlines, kept restrained.
const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600"],
});

// Body face: everyday reading text.
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "700"],
});

// Utility face: stats, labels, stack tags, dates.
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tiffany | Web, Mobile & Custom Software — Nairobi, Kenya",
  description:
    "Full-stack web and mobile apps, e-commerce with M-Pesa payments, and custom software built for Kenyan businesses.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${manrope.variable} ${jbmono.variable}`}>
      <body className="font-body bg-ink text-text antialiased">{children}</body>
    </html>
  );
}
