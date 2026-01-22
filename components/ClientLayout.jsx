"use client";

import { useEffect, useState } from "react";
import IntroLoader from "@/components/IntroLoader";
import Navbar from "@/components/Navbar";
import ConnectSection from "@/components/ConnectSection";

export default function ClientLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <IntroLoader />;

  return (
    <>
      <Navbar />
      {children}
      <ConnectSection />
    </>
  );
}
