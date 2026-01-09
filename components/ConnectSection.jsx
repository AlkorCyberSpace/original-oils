import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

export default function ConnectSection() {
  return (
    <section className="relative text-white overflow-hidden bg-black">
      {/* ================= TOP IMAGE SECTION ================= */}
      <div className="relative w-full aspect-1920/900 flex items-center justify-center overflow-hidden">
        {/* Background Image — moved UP slightly */}
        <Image
          src="/footer-bg.png"
          alt="Footer Illustration"
          fill
          priority
          className="object-contain object-center scale-[1.05] -translate-y-[15%]"
        />

        {/* Soft overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Bottom fade with golden gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[45%] bg-linear-to-t from-black via-primary/80 to-primary/40" />

        {/* TOP TAGLINE */}
        <div className="absolute top-12 w-full text-center z-10">
          <p className="text-xs uppercase tracking-[0.35em] text-white/90">
            Wellness in Every Drop
          </p>
        </div>

        {/* CENTER CONTENT */}
        <div className="relative z-10 text-center px-6 -translate-y-10">
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mb-5">
            Connect & <br /> Stay Inspired
          </h2>

          <p className="text-sm md:text-base opacity-90 mb-10 leading-relaxed">
            Fresh updates, daily rituals & wellness inspiration <br />
            straight to WhatsApp
          </p>

          <button className="bg-[#2b1a0f] text-white px-7 py-3 rounded-full text-xs tracking-widest font-semibold hover:bg-[#86702ddb] transition -translate-y-4">
            CONNECT US ➚
          </button>
        </div>
      </div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="bg-black px-6 -mt-24">
        <div className="max-w-7xl mx-auto py-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-sm opacity-90">
            {/* Quick Links */}
            <div>
              <h4 className="mb-4 font-medium">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="hover:text-primary transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-primary transition-colors">
                    Our Product
                  </Link>
                </li>
                <li>
                  <Link href="/gallery/images" className="hover:text-primary transition-colors">
                    Image Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/gallery/videos" className="hover:text-primary transition-colors">
                    Video Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/reviews" className="hover:text-primary transition-colors">
                    Customer Review
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="mb-4 font-medium">Contact Info</h4>
              <p className="mb-4">
                Visit our office or connect with us via Phone and Email
              </p>

              <div className="space-y-3">
                <p className="flex gap-2 items-start">
                  <MapPin size={28} />
                  Original Oils Edathadan Building, Aloor Chalakudy – Irinjalakuda Road, Thrissur, Kerala.
                </p>

                <p className="flex gap-2 items-center">
                  <Phone size={16} /> +91 8078112788
                </p>

                <p className="flex gap-2 items-center">
                  <Mail size={16} /> info@originaloils.org
                </p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="h-56 rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps?q=Edathadan%20Artisans%20Originals&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          {/* Footer Bottom Text */}
          <div className="mt-16 flex flex-col md:flex-row justify-between text-xs opacity-70">
            <p>Original Oils | Developed by Alkor Cyber Space</p>
            <p>© Original Oils 2026 | All Rights Reserved</p>
          </div>
        </div>
      </div>
    </section>
  );
}
 