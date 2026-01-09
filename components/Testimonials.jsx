import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="bg-background px-8 md:px-20 py-16">
      {/* Top Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
        {/* Left Heading */}
        <div>
          <div className="flex items-center gap-1 text-base text-gray-800 mb-4">
            ★ ★ ★ ★ ★
          </div>

          <h3 className="text-lg font-medium text-gray-800 leading-snug">
            Beautiful words <br /> from happy clients
          </h3>
        </div>

        {/* Center Image */}
        <div className="flex justify-center">
          <div className="rounded-4xl overflow-hidden shadow-lg">
            <Image
              src="/testimonial-main.png"
              alt="Customer"
              width={180}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Quote */}
        <div>
          <p className="text-[2.2rem] leading-[1.15] font-serif text-gray-900">
            “ I am a big fan of their hair oils, made from edible-quality oils —
            and that makes the difference. ”
          </p>

          <div className="mt-6">
            <p className="font-semibold text-gray-900">Divya</p>
            <p className="text-sm text-gray-600">Customer</p>
          </div>
        </div>
      </div>
      {/* Bottom Testimonials */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-14">
        {/* Bottom Left */}
        <div className="flex gap-6 items-start">
          {/* Image + Quote */}
          <div className="relative w-24 h-24 shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/testimonial1.jpg"
                alt="Ajay"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Quote mark */}
            <span className="absolute -top-4 right-2 text-5xl font-serif text-gray-400 leading-none">
              “
            </span>
          </div>

          {/* Text */}
          <div>
            <p className="font-serif text-lg leading-snug text-gray-900">
              My grandma never entertained junk food nor cosmetics yet she
              strongly believed in hair oil, made by a coconut oil mill in our
              village.
            </p>

            <p className="mt-4 font-semibold text-gray-900 text-lg">Ajay</p>
            <p className="text-sm text-gray-500">Customer</p>
          </div>
        </div>

        {/* Bottom Right */}
        <div className="flex gap-6 items-start">
          {/* Image + Quote */}
          <div className="relative w-24 h-24 shrink-0">
            <div className="w-full h-full rounded-full overflow-hidden">
              <Image
                src="/testimonial2.jpg"
                alt="Lakshmi"
                width={96}
                height={96}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Quote mark */}
            <span className="absolute -top-4 right-2 text-5xl font-serif text-gray-400 leading-none">
              “
            </span>
          </div>

          {/* Text */}
          <div>
            <p className="font-serif text-lg leading-snug text-gray-900">
              A big fan of their hair oils. It’s made with edible quality oils
              and that makes a difference.
            </p>

            <p className="mt-4 font-semibold text-gray-900 text-lg">Lakshmi</p>
            <p className="text-sm text-gray-500">Customer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
