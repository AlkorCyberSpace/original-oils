import Image from "next/image";

const images = [
  "/gallery1.png",
  "/gallery2.png",
  "/gallery3.png",
  "/gallery4.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-white px-6 md:px-20 py-10">
      {/* Header */}
      <div className="grid md:grid-cols-2 gap-10 mb-14 items-start">
        <div>
          <p className="text-sm text-gray-500 mb-3">Gallery</p>
          <h2 className="font-serif text-[2rem] md:text-[2.6rem] leading-tight text-gray-900">
            Our Signature Oils,
            <br />
            Crafted with Tradition
          </h2>
        </div>

        <p className="text-gray-600 max-w-md md:justify-self-end text-lg leading-relaxed">
          Bring purity and tradition into <br /> your daily rituals with our
          finest oils.
        </p>
      </div>

      {/* Images */}
      <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="min-w-65 md:min-w-75 h-55 md:h-65 relative rounded-2xl overflow-hidden"
          >
            <Image
              src={src}
              alt="Gallery Image"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-end mt-8">
       <button className="px-6 py-2 rounded-full border border-black bg-white text-sm text-black transition-all duration-500 hover:bg-black hover:text-white">
  View All Photos
</button>

      </div>
    </section>
  );
}
