// "use client";

// import Link from "next/link";
// import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

// const Footer = () => {
//     return (
//         <footer className="bg-[#1a1a1a] text-white pt-20 pb-10 px-6 md:px-12 lg:px-20 font-inter">
//             <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
//                 {/* Brand Section */}
//                 <div className="space-y-6">
//                     <h2 className="font-playfair text-3xl font-bold text-primary">
//                         Original Oils
//                     </h2>
//                     <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
//                         Bringing 60 years of tradition and purity from the heart of Kerala to your home. Our oils are crafted with care and commitment to quality.
//                     </p>
//                     <div className="flex gap-4">
//                         <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
//                             <FaFacebookF size={16} />
//                         </a>
//                         <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
//                             <FaInstagram size={16} />
//                         </a>
//                         <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
//                             <FaTwitter size={16} />
//                         </a>
//                         <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300">
//                             <FaWhatsapp size={16} />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Quick Links */}
//                 <div className="space-y-6">
//                     <h3 className="text-lg font-semibold border-b border-white/10 pb-2 inline-block">
//                         Quick Links
//                     </h3>
//                     <ul className="space-y-3">
//                         <li>
//                             <Link href="/" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">Home</Link>
//                         </li>
//                         <li>
//                             <Link href="/products" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">Products</Link>
//                         </li>
//                         <li>
//                             <Link href="/about" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">About Us</Link>
//                         </li>
//                         <li>
//                             <Link href="/blog" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">Blog</Link>
//                         </li>
//                         <li>
//                             <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm">Contact</Link>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Contact Info */}
//                 <div className="space-y-6">
//                     <h3 className="text-lg font-semibold border-b border-white/10 pb-2 inline-block">
//                         Contact Us
//                     </h3>
//                     <ul className="space-y-4">
//                         <li className="flex gap-3">
//                             <span className="text-primary text-sm font-bold uppercase tracking-widest pt-1">Add:</span>
//                             <p className="text-gray-400 text-sm leading-relaxed">
//                                 123 Coconut Grove, <br />
//                                 Alleppey, Kerala - 688001
//                             </p>
//                         </li>
//                         <li className="flex gap-3 text-sm">
//                             <span className="text-primary font-bold uppercase tracking-widest">Tel:</span>
//                             <p className="text-gray-400">+91 98765 43210</p>
//                         </li>
//                         <li className="flex gap-3 text-sm">
//                             <span className="text-primary font-bold uppercase tracking-widest">Mail:</span>
//                             <p className="text-gray-400">hello@originaloils.com</p>
//                         </li>
//                     </ul>
//                 </div>

//                 {/* Newsletter / CTA */}
//                 <div className="space-y-6">
//                     <h3 className="text-lg font-semibold border-b border-white/10 pb-2 inline-block">
//                         Newsletter
//                     </h3>
//                     <p className="text-gray-400 text-sm">Subscribe to get updates on wellness tips and new product launches.</p>
//                     <div className="relative">
//                         <input
//                             type="email"
//                             placeholder="Your email"
//                             className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-sm focus:outline-none focus:border-primary transition-colors"
//                         />
//                         <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-primary text-white p-2 rounded-full hover:bg-opacity-90 transition-all">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
//                                 <path d="M15.854.146a.5.5 0 0 1 .11.54l-5.819 14.547a.75.75 0 0 1-1.329.124l-3.178-4.995L.643 7.184a.75.75 0 0 1 .124-1.33L15.314.037a.5.5 0 0 1 .54.11ZM6.636 10.07l2.761 4.338L14.13 2.576 6.636 10.07Zm6.787-8.201L1.591 6.602l4.339 2.76 7.494-7.493Z" />
//                             </svg>
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Bottom Bar */}
//             <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
//                 <p className="text-gray-500 text-xs">
//                     © {new Date().getFullYear()} Original Oils. All rights reserved.
//                 </p>
//                 <div className="flex gap-6 text-xs text-gray-500">
//                     <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
//                     <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
//                     <a href="#" className="hover:text-primary transition-colors">Shipping Info</a>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
