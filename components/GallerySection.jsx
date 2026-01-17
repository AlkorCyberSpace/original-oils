import Image from "next/image";

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


      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6">
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

      <div className="flex justify-end mt-8">
        <button className="px-6 py-2 rounded-full border border-black bg-white text-sm text-black transition-all duration-500 hover:bg-black hover:text-white">
          View All Photos
        </button>

      </div>
    </section>
  );
}
