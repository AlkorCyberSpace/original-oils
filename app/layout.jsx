"use client";

import "./globals.css";
import {
  Playfair_Display,
  Inter,
  UnifrakturCook,
  Kumbh_Sans,
} from "next/font/google";
import { useEffect, useState } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConnectSection from "@/components/ConnectSection";
import IntroLoader from "@/components/IntroLoader";

export const kumbh = Kumbh_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-kumbh",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-playfair",
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
});

export const unifraktur = UnifrakturCook({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-gothic",
});

//  metadata REMOVED (cannot exist in client component)

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body
        className={`
          ${kumbh.variable}
          ${playfair.variable}
          ${inter.variable}
          ${unifraktur.variable}
          bg-white
          overflow-x-hidden
          font-kumbh
        `}
      >
        {loading && <IntroLoader />}

        {!loading && (
          <>
            <Navbar />
            {children}
            <ConnectSection />
          </>
        )}
      </body>
    </html>
  );
}
