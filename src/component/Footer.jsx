"use client";

import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10 py-10 max-w-6xl mx-auto">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">NextShop</h2>
          <p className="text-sm">
            Your trusted online store for premium products.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li><Link href="/" className="hover:text-white">Home</Link></li>
            <li><Link href="/products" className="hover:text-white">Products</Link></li>
            <li><Link href="/about" className="hover:text-white">About Us</Link></li>
            <li><Link href="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex items-center space-x-4">
            <Link href="#" className="hover:text-white text-xl">
              <FaFacebook />
            </Link>
            <Link href="#" className="hover:text-white text-xl">
              <FaInstagram />
            </Link>
            <Link href="#" className="hover:text-white text-xl">
              <FaTwitter />
            </Link>
          </div>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="text-center mt-8 border-t border-gray-700 pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} NextShop. All rights reserved.
      </div>
    </footer>
  );
}
