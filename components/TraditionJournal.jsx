"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const articles = [
  {
    image: "/blogs/journal1.png",
    title: "On the way back from Munnar.",
    slug: "on-the-way-back-from-munnar",
  },
  {
    image: "/blogs/journal2.png",
    title: "My Journey with Hair Fall After Delivery",
    slug: "my-journey-with-hair-fall-after-delivery",
  },
  {
    image: "/blogs/journal3.png",
    title: "From My Grandmother to My Daughter",
    slug: "from-my-grandmother-to-my-daughter",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  },
};

export default function TraditionJournal() {
  return (
    <section className="bg-white px-6 md:px-8 py-7 overflow-hidden">
      <motion.div
        className="grid md:grid-cols-2 gap-2 mb-10 items-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <p className="text-md tracking-wide text-gray-500 ">
            The Tradition Journal
          </p>

          <h2 className="font-playfair text-[2rem] font-semibold md:text-[2rem] lg:[2.6rem] leading-tight text-[#333333] md:whitespace-nowrap">
            Stories Rooted in Tradition
          </h2>
        </div>

        <div className="flex flex-col justify-end items-end text-gray-600 text-xs sm:text-xs md:text-md lg:text-md text-right leading-relaxed font-medium">
          <p>
            Where tradition, balance, 
          </p>
          <p>and everyday wellness come together.</p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {articles.map((item, index) => (
          <Link
            key={index}
            href={`/blog/${item.slug}`}
            className="block group"
          >
            <motion.div
              variants={cardVariants}
              className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(0,0,0,0.08)] overflow-hidden cursor-pointer h-full flex flex-col"
              whileHover={{
                y: -10,
                boxShadow: "0 20px 30px rgba(0,0,0,0.12)",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <div className="relative h-56 w-full overflow-hidden">
                <motion.div
                  className="w-full h-full"
                  initial={{ grayscale: "100%", brightness: 0.9 }}
                  whileHover={{
                    scale: 1.1,
                    grayscale: "0%",
                    brightness: 1.1,
                    transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] }
                  }}
                  animate={{ grayscale: "100%", brightness: 0.9 }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>

              <div className="p-5 flex flex-col justify-between flex-grow">
                <p className="text-gray-900 text-[1.05rem] leading-snug font-medium mb-4">
                  {item.title}
                </p>

                <div className="mt-auto text-sm text-gray-600 flex items-center gap-2 font-semibold">
                  <span>Read More</span>
                  <motion.span
                    className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center text-xs transition-colors group-hover:bg-gray-900 group-hover:text-white group-hover:border-gray-900"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    →
                  </motion.span>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
}
