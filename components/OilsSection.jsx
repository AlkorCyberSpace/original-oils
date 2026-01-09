"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

export default function OilsSection() {
  const imagesRef = useRef([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    imagesRef.current.forEach((img) => {
      if (!img) return;

      gsap.fromTo(
        img,
        { y: 40 },
        {
          y: -40,
          scrollTrigger: {
            trigger: img,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  const products = [
    {
      title: "Coconut Oil",
      desc: "Coconut oil has many nutrients that can contribute to your health and a good diet.",
      img: "/coconut.jpg",
    },
    {
      title: "Black cumin seed oil",
      desc: "Black seed oil is high in antioxidants and may have several benefits for health.",
      img: "/black-seed.jpg",
    },
    {
      title: "Badam oil",
      desc: "Badam Oil is a heart-healthy oil rich in vitamin E and anti-inflammatory properties.",
      img: "/badam.jpg",
    },
    {
      title: "Danthapala",
      desc: "Danthapala oil is made from shwetha kutaja leaves and coconut oil has high therapeutic benefits.",
      img: "/Danthapala.jpg",
    },
    {
      title: "Chandra Mukhi Oil",
      desc: "Chandramukhi Oil, a radiant blend of elegance and wellness, combines a host of natural ingredients.",
      img: "/Chandra Mukhi.jpg",
    },
    {
      title: "Kesakala Hair Oil",
      desc: "Kesakala Hair Oil, a radiant blend of elegance and wellness, combines a host of natural ingredients",
      img: "/Kesakala.jpg",
    },
  ];

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl min-h-[160vh] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT – STICKY */}
          <div className="lg:sticky lg:top-24 h-fit">
            <p className="text-sm uppercase tracking-wide text-gray-500">
              Traditionally Crafted Oils
            </p>

            <h1 className="mt-4 text-4xl md:text-5xl font-serif text-gray-900 leading-tight">
              Pure Oils,<br />Timeless Benefits
            </h1>

            <p className="mt-6 text-gray-600 max-w-md">
              Pure, cold-pressed oils made with heritage methods to nourish your
              lifestyle from the inside out.
            </p>

            {/* ROUND TAGS */}
            <div className="mt-8 flex flex-wrap gap-3 max-w-lg">
              {[
                "Coconut Oil",
                "Black Seed Oil",
                "Badam Oil",
                "Coco Rosemary",
                "Gingelly Oil",
                "Dhandha pala Oil",
                "Chandramukhi Body oil",
                "Keshakala Oil",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-gray-300 px-4 py-1.5 text-sm text-gray-600 hover:bg-gray-100 transition cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* FULL PRODUCT LIST */}
            <Link
              href="/products"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-gray-800 group"
            >
              Full Product List
              <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* RIGHT – COMPACT SCROLL */}
          <div className="space-y-12">
            {products.map((product, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) imagesRef.current[index] = el;
                }}
                className="flex gap-5 items-start"
              >
                <div className="rounded-xl w-48 shrink-0">
                  <Image
                    src={product.img}
                    alt={product.title}
                    width={400}
                    height={600}
                    className="object-contain w-full h-auto"
                  />
                </div>

                <div>
                  <h3 className="text-lg font-serif text-gray-900">
                    {product.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600 max-w-xs">
                    {product.desc}
                  </p>

                  <button className="mt-2 text-sm text-gray-700 hover:text-black flex items-center gap-1">
                    View details <span>→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
