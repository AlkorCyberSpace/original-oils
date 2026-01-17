"use client";

import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="bg-white px-4 sm:px-6 md:px-16 flex flex-col pt-6">
      {/* TOP CONTENT */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-start">
        
        {/* LEFT SIDE */}
        <div>
          {/* Stars */}
          <div className="flex items-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4 text-[#666666]"
              >
                <path
                  fillRule="evenodd"
                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                  clipRule="evenodd"
                />
              </svg>
            ))}
          </div>

          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">
            About Us
          </p>

          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl leading-tight text-gray-900">
            More Than Oils,
            <br />A Way of Living
          </h1>
        </div>

        {/* RIGHT SIDE */}
       <div className="md:flex md:justify-end -mt-8 sm:-mt-2 md:mt-0">
  <p className="text-gray-600 max-w-sm leading-relaxed text-sm sm:text-base">
    We’re here to offer purity,
    <br />
    balance, and care in everyday living.
  </p>
</div>

      </div>

      {/* IMAGE CARD */}
      <div className="max-w-7xl mx-auto w-full flex-1 mt-5 md:mt-16 pb-12 md:pb-16">
        <div className="relative h-full min-h-[420px] md:min-h-[520px] rounded-3xl overflow-hidden">
          
          {/* BACKGROUND IMAGE */}
          <Image
            src="/aboutus-bg.jpg"
            alt="Quality Assurance"
            fill
            priority
            className="object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/50" />

          {/* TEXT CONTENT */}
          <div className="absolute inset-0 flex items-center">
            <div className="px-5 sm:px-8 md:px-20 max-w-3xl text-white">
              
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-4 md:mb-6 tracking-wide">
                QUALITY ASSURANCE
              </h2>

              <p className="text-xs sm:text-sm md:text-base leading-relaxed opacity-90">
                Quality is our top priority. It has always been the foundation
                of our business. Every product we make meets international
                quality standards. We carefully check our raw materials and work
                closely with trusted vendors to ensure consistent quality.
                <br />
                <br />
                We follow a strong quality-check system at every stage — from
                raw materials to the final product. Our experienced team
                carefully inspects and tests each batch.
              </p>

              <button className="mt-6 md:mt-8 border border-white px-5 md:px-6 py-2 rounded-full text-xs md:text-sm tracking-wide hover:bg-white hover:text-black transition">
                Explore Products
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
