"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "/gallery/1.png",
  "/gallery/1.png",
  "/gallery/3.png",
  "/gallery/4.png",

];

export default function GallerySection() {
  return (
    <section className="bg-white px-4 md:px-7 ">
      <div className="max-w-7xl mx-auto mb-10  grid grid-cols-1  md:grid-cols-3 gap-1 md:gap-8 ">
        <div className="md:col-span-2">
          <p className="text-md tracking-widest text-gray-500 mb-3">Gallery</p>
          <h2 className="font-playfair text-xl md:text-4xl font-semibold text-[#333333] tracking-wider leading-tight">
            Our Signature Oils, <br />
            Crafted with Tradition
          </h2>
        </div>

        <div className="flex flex-col justify-end items-end text-gray-600 text-xs sm:text-xs md:text-lg text-right leading-relaxed font-medium">
          <p className="">
            Bring purity and tradition into
          </p>
          <p>your daily rituals with our finest oils.</p>
        </div>
      </div>


      <div className="flex gap-6 overflow-x-auto scrollbar-hide ">
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-65 md:min-w-85 h-55 md:h-65 relative rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt="Gallery Image"
              fill
              className="object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-end ">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.12, delay: 1 }}
          className="flex justify-center mt-12"
        >
          <button className="group relative px-10 py-3.5 overflow-hidden rounded-full border border-[#1a1a1a] text-sm font-bold uppercase tracking-widest text-[#1a1a1a] transition-all hover:text-white">
            <span className="absolute inset-0 w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full" />
            <span className="relative">View Collection</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
}
