"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const media = [
  // --- Block 1: Feature Videos (Top) ---
  {
    type: "video",
    src: "/gallery/COCONUT.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "video",
    src: "/gallery/Badam-hindi.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "video",
    src: "/gallery/g-video4.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "video",
    src: "/gallery/g-video2.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "video",
    src: "/video2.mp4",
    className: "md:col-span-2 md:row-span-1",
  },
  {
    type: "video",
    src: "/gallery/mill.mp4",
    className: "md:col-span-2 md:row-span-1",
  },

  // --- Block 2: Product & Gallery Images (Bottom) ---
  {
    type: "image",
    src: "/products/coconutOil3.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/badhaam2.png",
    className: "md:col-span-1 md:row-span-1",
  },
    {
    type: "image",
    src: "/products/chandramukhi3.webp",
    className: "md:col-span-1 md:row-span-1",
  },
    {
    type: "image",
    src: "/products/dandhapala3.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/gingelly2.webp",
    className: "md:col-span-1 md:row-span-1",
  },
    {
    type: "image",
    src: "/products/rosemary3.png",
    className: "md:col-span-1 md:row-span-1",
  },
 
  {
    type: "image",
    src: "/products/flax-seed3.png",
    className: "md:col-span-1 md:row-span-1",
  },
    {
    type: "image",
    src: "/products/kesakala4.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/eucalyptus3.webp",
    className: "md:col-span-1 md:row-span-1",
  },

  {
    type: "image",
    src: "/products/rosemary-o.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/chia-seed4.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/lemon-grass3.webp",
    className: "md:col-span-1 md:row-span-1",
  },



];

const VideoItem = ({ src, poster }) => {
  return (
    <div className="relative w-full h-full">
      <video
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Play Icon Overlay */}
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
  );
};

export default function GallerySection2() {
  const [selectedMedia, setSelectedMedia] = useState(null);
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
    <>
      <section id="gallery" className="bg-white px-4 md:px-10 py-16">
        <div className=" mx-auto mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm tracking-widest text-gray-500 uppercase">
              Gallery
            </p>
            <h2 className="font-playfair text-[2rem] font-semibold md:text-[2rem] lg:text-[2.6rem] text-[#333333] md:whitespace-nowrap">
              Our Signature Oils,
              <br />
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
              Bring purity and tradition into <br />
              your daily rituals with our finest oils.
            </p>
          </motion.div>
        </div>

        {/* Hero Video Section */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className=" mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[150px] md:auto-rows-[250px] grid-flow-dense"
        >
          {media.map((item, i) => (

            <motion.div
              key={i}
              variants={itemVariants}
              className={`relative rounded-2xl md:rounded-xl overflow-hidden group shadow-sm hover:shadow-xl transition-shadow duration-500 ${item.type === 'video' ? 'cursor-pointer' : ''} ${item.className}`}
              onClick={() => {
                if (item.type === "video") setSelectedMedia(item);
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
                <VideoItem src={item.src} poster={item.poster} />
              )}

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/5 group-hover:bg-black/20 transition-colors duration-500 z-10 pointer-events-none" />
            </motion.div>

          ))}
        </motion.div>

        {/* <motion.div
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
      </motion.div> */}
      </section>

      {/* Modal / Lightbox */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8 backdrop-blur-sm"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative w-full max-w-5xl max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-white/20 text-white rounded-full transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {selectedMedia.type === "video" ? (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-full max-h-[85vh] object-contain"
                />
              ) : (
                <div className="relative w-full h-[80vh]">
                  <Image
                    src={selectedMedia.src}
                    alt="Gallery Fullscreen"
                    fill
                    className="object-contain"
                  />
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
