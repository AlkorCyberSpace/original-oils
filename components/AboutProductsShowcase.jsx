"use client";

import { useState } from "react";
import Image from "next/image";

const items = [
  {
    title: "From Kerala’s First Mills to You",
    description:
      "Care guides every step we take. Every bottle is carefully crafted using time-honored methods and delivered to your home with purity, intention, and trust.",
    image: "/about/about.png",
  },
  {
    title: "Rooted in Tradition. Crafted with Care.",
    description:
      "Inspired by heritage and guided by intention, every bottle is carefully made using traditional practices to bring you pure, honest oils you can trust.",
    image: "/about/about2.png",
  },
  {
    title: "Oils That Tell a Story",
    description:
      "Each bottle carries the essence of tradition, crafted with care using age-old methods to preserve purity, purpose, and nature’s true goodness.",
    image: "/about/about3.png",
  },
  {
    title: "Original Oils. Original Care",
    description:
      "Guided by tradition and crafted with heart, every bottle reflects our commitment to honest ingredients and mindful care.",
    image: "/about/about4.png",
  },
];

export default function AboutProductShowcase() {
  // oil-7 active by default
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-10 md:py-10 px-6 ">
      <div className="max-w-full md:max-w-300 mx-auto">

        {/* TOP TEXT */}
        <div className="text-center max-w-full md:max-w-130 mx-auto">
          <p className="text-[13px] tracking-[0.28em] uppercase text-gray-400 font-inter">
            About Us
          </p>

          <h2 className="mt-6 text-3xl md:text-[46px] leading-[1.12] font-playfair text-[#2b2b2b]">
            Pure Oils,<br /> Honest Origins
          </h2>

          <p className="mt-6 text-sm md:text-[15px] text-gray-500 font-inter">
            At Original Oils, care begins long before the first drop
          </p>
        </div>

        {/* IMAGE + DESCRIPTION ROW */}
        <div className="relative mt-16 md:mt-10 flex flex-col md:flex-row gap-2 items-center md:items-start justify-center overflow-visible ">

          {items.map((item, index) => (
            <div
              key={index}
              onMouseEnter={() => setActive(index)}
              className="relative flex flex-row sm:flex-row md:flex-row items-center md:items-start"
            >
              {/* IMAGE FRAME */}
              <div
                className={`
                  w-65 h-72 md:w-41.5 md:h-65 lg:w-70 lg:h-80
                  flex items-center justify-center
                  transition-opacity duration-300
                  ${active === index ? "opacity-100" : "opacity-85"}
                `}
              >
                {/* CLIP AREA */}
                <div className="relative w-full h-full overflow-hidden flex items-center justify-center">

                  {/* SLIM → FULL (ACTIVE ONLY) */}
                  <div
                    className={`
                      h-full transition-all duration-700 ease-out
                      ${active === index ? "w-full" : "w-[30%]"}
                    `}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 300px"
                        className="object-cover"
                      />
                    </div>
                  </div>

                </div>
              </div>

              {/* DESCRIPTION CARD */}
              {active === index && (
                <div
                  className="
                    mt-6 ml-2 md:mt-0
                    md:ml-6 lg:ml-1

                    w-full max-w-md md:w-70
                    bg-white
                    rounded-[22px]
                    px-8 py-9
                    shadow-[0_18px_45px_rgba(0,0,0,0.08)]
                    transition-all duration-500 ease-out
                    animate-[fadeUp_0.5s_ease-out]
                  "
                >
                  <h3 className="text-[21px] leading-[1.35] font-playfair text-[#2b2b2b] mb-3">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14.5px] leading-[1.8] text-[#6f6f6f] font-inter">
                    {item.description}
                  </p>
                </div>
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
