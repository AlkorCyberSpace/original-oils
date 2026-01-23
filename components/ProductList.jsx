"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { products, categories } from "@/data/products";
import { motion } from "framer-motion";

export default function ProductsPage() {
    const [activeCategory, setActiveCategory] = useState("All Products");

    const filteredProducts = activeCategory === "All Products"
        ? products
        : products.filter(p => p.category.includes(activeCategory));

    return (
        <main className="min-h-screen bg-white text-foreground px-8 pb-18  lg:px-10 ">

            <motion.div
                className="flex flex-col lg:flex-row justify-between items-start relative"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >


                <div className="relative z-10 w-full">
                    <div className="flex flex-col gap-1 items-start">
                        <div className="flex text-[#333333] text-md tracking-widest gap-1">
                            ★★★★★
                        </div>
                        <p className="text-[#666666] text-sm sm:ext-sm md:text-md font-kumbh tracking-wider">Pure Oils for Home Use</p>
                    </div>

                    <div className="mt-3">
                        <h1 className="text-xl sm:text-xl  lg:text-4xl font-playfair text-[#333333] font-semibold tracking-wide ">
                            Wellness <br /> Starts Here
                        </h1>
                    </div>
                </div>

                <div className=" absolute right-0 bottom-0 text-right max-w-125">
                    <p className="text-[#666666] text-xs sm:text-xs md:text-md lg:text-lg text-right tracking-wider font-medium">
                        Products Our Customers <br /> Choose Again and Again </p>
                </div>
            </motion.div>

            <div className="text-center  mb-6 ">
                <h2 className="text-xl sm:text-xl lg:text-4xl mt-4 tracking-wide font-playfair text-[#333333]">Shop Our Bestsellers</h2>
                <p className="text-[#666666] text-sm sm:text-sm lg:text-md mt-2 tracking-wider">Welcome to Originals edathadan</p>

                <motion.div
                    className="flex flex-row justify-center gap-3 pt-3 flex-wrap"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.08 },
                        },
                    }}
                >
                    {categories.map((cat) => (
                        <motion.button
                            key={cat}
                            variants={{
                                hidden: { opacity: 0, y: 10 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-2 lg:px-6 py-1 lg:py-2 rounded-full font-kumbh tracking-wider border text-sm transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[#333333] text-white border-[#333333]"
                                    : "bg-white text-gray-500 border-gray-300 hover:border-gray-500"
                                }`}
                        >
                            {cat}
                        </motion.button>
                    ))}
                </motion.div>

            </div>

            {/* PRODUCT GRID */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-10 sm:gap-x-5 md:gap-x-12">
                {filteredProducts.map((product) => (
                    <Link
                        href={`/products/${product.id}`}
                        key={product.id}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="relative w-full aspect-4/3 rounded-3xl bg-[#F3F4F6] overflow-hidden mb-4">
                            <Image
                                src={product.image}
                                alt={product.title}
                                fill
                                priority
                                className="object-contain w-full h-full transition-all duration-500 group-hover:scale-105 group-hover:blur-[2px]"

                            />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    →
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            <h3 className="text-sm sm:text-sm md:text-xl font-playfair font-semibold text-[#666666] ">
                                {product.title}
                            </h3>
                            <p className="text-sm sm:text-sm md:text-md font-kumbh text-[#666666] tracking-wide line-clamp-2 sm:line-clamp-5">
                                {product.desc}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>

        </main>
    );
}
