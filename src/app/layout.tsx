import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header"
import {hkgrotesk, hkgroteskWide} from "@/utils";
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Car Detailing",
  description: "Designed and coded by Dawid Bryja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-main ${hkgrotesk.variable} ${hkgroteskWide.variable} bg-black w-screen overflow-x-hidden text-beige`}>
        <Header/>
        {children}
      <SpeedInsights />
      </body>
    </html>
  );
}
