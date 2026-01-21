"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const media = [
  {
    type: "video",
    src: "/Dhanthapala-1.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "image",
    src: "/gallery2.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/aboutus-bg.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/oil-bottless.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/6.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "video",
    src: "/Dhanthapala-1.mp4",

    className: "md:col-span-2 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/8.png",
    className: "md:col-span-1 md:row-span-2",
  },
  {
    type: "image",
    src: "/gallery/5.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/4.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/3.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/4.png",
    className: "md:col-span-1 md:row-span-1",
  },
];

export default function GallerySection2() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="gallery" className="bg-white px-4 md:px-10">
      <div className="max-w-7xl mx-auto mb-5 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
           <p className="text-sm tracking-widest text-gray-500 uppercase">
            Gallery
          </p>
          <h2 className="font-playfair text-[2rem] font-semibold md:text-[2rem] lg:[2.6rem] text-[#333333] md:whitespace-nowrap">
            Our Signature Oils, 
            <br/>
            Crafted with Tradition
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md md:text-right"
        >
          <p className="text-gray-500 text-lg font-light leading-relaxed">
            Experience the harmony of nature and tradition through our visual chronicles.
          </p>
        </motion.div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-2 auto-rows-[150px] md:auto-rows-[220px]"
      >
        {media.map((item, i) => (

          <motion.div
            key={i}
            variants={itemVariants}
            className={`relative rounded-2xl md:rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 ${item.className}`}
            onClick={(e) => {
              const video = e.currentTarget.querySelector("video");
              if (video) {
                if (video.paused) video.play();
                else video.pause();
              }
            }}
          >
            {item.type === "image" ? (
              <Image
                src={item.src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
              />
            ) : (
              <div className="relative w-full h-full">
                <video
                  src={item.src}
                  poster={item.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Play Icon Overlay - Hidden when playing or on hover */}
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none opacity-100 group-hover:opacity-0 transition-opacity duration-300">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-lg">
                    <svg
                      className="w-6 h-6 text-white fill-current"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            )}

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none" />
          </motion.div>

        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex justify-center mt-12"
      >
        <button className="group relative px-10 py-3.5 overflow-hidden rounded-full border border-[#1a1a1a] text-sm font-bold uppercase tracking-widest text-[#1a1a1a] transition-all hover:text-white">
          <span className="absolute inset-0 w-0 bg-[#1a1a1a] transition-all duration-300 ease-out group-hover:w-full" />
          <span className="relative">View Collection</span>
        </button>
      </motion.div>
    </section>
  );
}
