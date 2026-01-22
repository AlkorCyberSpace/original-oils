import Image from "next/image";

const avatars = [
  "/avatar1.jpg",
  "/avatar2.jpeg",
  "/avatar3.jpeg",
  "/avatar4.jpg",
  "/avatar5.jpg",
];

export default function CraftSection() {
  return (
    <section className="bg-background py-24 px-6">
      {/* Heading */}
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-serif text-4xl md:text-5xl leading-tight text-gray-900">
          Quality comes from <br /> skill, not shortcuts
        </h2>
        <p className="mt-6 text-gray-500 text-base">
          We combine time-honored methods and skilled craftsmanship to ensure
          consistent purity.
        </p>
      </div>

      {/* Content */}
      <div className="mt-24 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-14 items-start">
        {/* LEFT COLUMN */}
        <div>
          {/* Glass Card */}
          <div className="relative h-[260px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/plant image.png"
              alt="Process"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-black/15" />

            <div className="absolute inset-4 rounded-2xl bg-white/30 backdrop-blur-lg border border-white/40 p-6 text-white flex flex-col justify-center">
              <p className="text-xs tracking-widest opacity-80 text-center">
                Our process is honest
              </p>

              <h3 className="mt-3 font-serif text-xl text-center">
                Calm in every drop
              </h3>

              <p className="mt-4 text-sm leading-relaxed opacity-90 text-center font-serif">
                We create more than oils
                <br />
                We create moments of
                <br />
                balance and care.
              </p>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-10">
            <p className="text-sm tracking-widest text-gray-700">★★★★★</p>

            <h4 className="mt-2 font-medium text-gray-900">
              Community Love
            </h4>

            <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-md">
              Original Oils is more than a product — it’s part of everyday home
              rituals. From first-time customers to loyal families, people
              return for the purity, the trust, and the care in every bottle.
            </p>

            {/* Avatars */}
            <div className="mt-6 flex items-center">
              {avatars.map((src, index) => (
                <div
                  key={index}
                  className={`relative w-14 h-14 rounded-full bg-white ${
                    index !== 0 ? "-ml-4" : ""
                  }`}
                >
                  <div className="absolute inset-[3px] rounded-full overflow-hidden">
                    <Image src={src} alt="user" fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8 flex items-center gap-4 text-gray-700 cursor-pointer group">
              <span className="text-sm font-medium">
                Read Testimonials
              </span>

              <span className="w-11 h-11 rounded-full border border-gray-400 flex items-center justify-center transition group-hover:bg-gray-900 group-hover:text-white">
                →
              </span>
            </div>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="relative h-[520px] rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/craft-man.jpg"
            alt="Craft"
            fill
            className="object-cover "
          />

          <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-black/40 backdrop-blur-lg p-6 text-white">
            <h3 className="font-serif text-lg">
              Experience You Can Trust
            </h3>

            <p className="mt-3 text-sm leading-relaxed opacity-90">
              At Original Oils, every bottle reflects the hands and experience
              behind it. Our oils are crafted by skilled professionals who value
              traditional methods, purity, and genuine care — a quality you can
              feel and trust in every drop.
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col items-center gap-1">
          <Image
            src="/image.png"
            alt="Originals quote"
            width={420}
            height={700}
            className="object-contain"
            priority
          />

          <Image
            src="/original-oils-logo.png"
            alt="Original Oils"
            width={420}
            height={200}
            className="object-contain "
          />
        </div>
      </div>
    </section>
  );
}
