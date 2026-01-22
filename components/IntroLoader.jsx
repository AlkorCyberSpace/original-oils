"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function IntroLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#ffffff]">
      <motion.div
        animate={{ y: [-0, -24, 0], scale: [1, 1.12, 1] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/logo.png"
          alt="Loading"
          width={180}
          height={180}
          priority
        />
      </motion.div>
    </div>
  );
}
