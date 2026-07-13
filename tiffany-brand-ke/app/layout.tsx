import type { Metadata } from "next";
import { Fraunces, Manrope, JetBrains_Mono} from "next/font/google";
import "./globals.css";

//Display face: headlines only
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["500", "600"],
});

//Body face 
const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ['400', '500', '700'],
});

//Utility face: stats, labels, stack tags, dates.
const jbmono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata ={
  title: "TyffDevs | Web, Mobile & Custom Software -Nairobi, Kenya",
  description: "Full-stack web and mobile apps, e-commerce with M-pesa payments, and custom software built for Kenyan business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children : React.ReactNode;
}>){
  return(
    <html
    lang="en"
    className={`${fraunces.variable} ${manrope.variable} ${jbmono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flec-col font-body">{children}</body>
    </html>
  );
}