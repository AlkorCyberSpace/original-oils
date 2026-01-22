"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const AboutUs = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="bg-white flex flex-col max-w-8xl mx-auto px-4 md:px-8">
      <div className=" w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-end">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex text-[#333333] text-sm sm:text-sm lg:text-md tracking-widest gap-1">
            ★★★★★
          </div>

          <p className="text-xs sm:text-xs lg:text-md uppercase tracking-widest text-gray-500 ">
            About Us
          </p>

          <h2 className="text-3xl lg:text-4xl font-semibold font-playfair text-[#333333] tracking-wider  mt-3" >
            More Than Oils, <br />
            A Way of Living
          </h2>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className=" md:text-right "
        >
          <p className="text-gray-600 text-xs sm:text-xs md:text-md lg:text-lg text-right leading-relaxed  tracking-wider">
            We’re here to offer purity, <br />
            balance, and care in everyday living. </p>
        </motion.div>
      </div>

      {/* IMAGE CARD */}
      <div className="max-w-8xl mx-auto w-full flex-1 mt-6 md:mt-8 pb-5 md:pb-8">
        <div className="relative h-full min-h-[420px] md:min-h-[450px] lg:min-h-[550px] rounded-3xl overflow-hidden">

          {/* BACKGROUND IMAGE */}
          <Image
            src="/aboutus-bg.jpg"
            alt="Quality Assurance"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="px-5 sm:px-8 md:px-10 lg:px-14 text-white flex flex-col items-center text-center ">

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-6 tracking-wide">
                QUALITY ASSURANCE
              </h2>

              <p className="text-xs sm:text-sm md:text-lg lg:text-xl tracking-wide leading-relaxed opacity-90 mb-10">
                Quality is our top priority. It has always been the foundation of our business. Every product we make meets international quality standards. We carefully check our raw materials and work closely with trusted vendors to ensure consistent quality. Each product goes through strict checks during and after production to make sure it is pure, safe, and reliable. <br />
                We follow a strong quality-check system at every stage — from raw materials to the final product. Our experienced team carefully inspects and tests each batch to ensure the same quality in every product.
              </p>

              <Link href="/products">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <motion.button
                    onMouseMove={handleMouseMove}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="group relative px-6 py-2 overflow-hidden rounded-full border border-white text-md tracking-widest text-white"
                  >
                    {/* Ripple */}
                    <motion.span
                      className="absolute pointer-events-none rounded-full bg-white"
                      style={{
                        width: 500,
                        height: 500,
                        left: mousePos.x,
                        top: mousePos.y,
                        translateX: "-50%",
                        translateY: "-50%",
                        filter: "blur(6px)",
                      }}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{
                        scale: isHovered ? 1 : 0,
                        opacity: isHovered ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    />

                    <span
                      className={`relative z-10 transition-colors duration-500 ${isHovered ? "text-black" : "text-white"
                        }`}
                    >
                      Explore Products
                    </span>
                  </motion.button>
                </motion.div>
              </Link>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
