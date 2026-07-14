import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Tiffany | Web, Mobile & Custom Software — Nairobi, Kenya",
  description:
    "Full-stack web and mobile apps, e-commerce with M-Pesa payments, and custom software built for Kenyan businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${manrope.variable} ${jbmono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}