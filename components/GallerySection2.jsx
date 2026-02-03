"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const media = [
  {
    type: "image",
    src: "/products/coconutOil3.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "video",
    src: "/gallery/g-video1.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "image",
    src: "/products/chia-seed4.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/kesakala4.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/badaam4 (1).webp",
    className: "md:col-span-1 md:row-span-1",
  },


  {
    type: "video",
    src: "/gallery/g-video3.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "image",
    src: "/products/badhaam2.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/dhandhapala2.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/flax-seed4.png",
    className: "md:col-span-1 md:row-span-1",
  },

  {
    type: "image",
    src: "/products/rosemary-o.webp",
    className: "md:col-span-1 md:row-span-1",
  },



  {
    type: "image",
    src: "/products/flax-seed3.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/products/eucalyptus3.webp",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "video",
    src: "/video2.mp4",
    className: "md:col-span-2 md:row-span-1",
  },



  {
    type: "image",
    src: "/gallery/5.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/image.jpeg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/8.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/gallery/6.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/black-seed.jpg",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "video",
    src: "/gallery/g-video4.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "image",
    src: "/gallery/6.png",
    className: "md:col-span-1 md:row-span-1",
  },
  {
    type: "image",
    src: "/black-seed.jpg",
    className: "md:col-span-1 md:row-span-1",
  },

  {
    type: "video",
    src: "/gallery/mill.mp4",
    className: "md:col-span-1 md:row-span-1",
  },

  {
    type: "video",
    src: "/gallery/g-video2.mp4",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    type: "image",
    src: "/gallery/6.png",
    className: "md:col-span-2 md:row-span-2",
  },

];

const VideoItem = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <div className="relative w-full h-full">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted={isMuted}
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Sound Toggle Button */}
      <button
        onClick={toggleMute}
        className="absolute bottom-3 right-3 z-30 p-2 bg-black/30 backdrop-blur-sm rounded-full text-white hover:bg-black/50 transition-colors"
      >
        {isMuted ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
          </svg>
        )}
      </button>

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
