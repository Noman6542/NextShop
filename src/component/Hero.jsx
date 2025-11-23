"use client";
import Link from "next/link";
import Image from "next/image";
import hero from "../../public/hero-storefront.jpg.webp";

export default function Hero() {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-white py-24">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text / CTA */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-5xl font-extrabold text-gray-900">
            Discover & Shop Awesome Products
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            NextShop makes it simple to browse, manage, and buy products online. Fast, secure, and reliable.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <Link
              href="/products"
              className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow hover:bg-blue-700 transition"
            >
              Shop Now
            </Link>
            <Link
              href="/add-product"
              className="px-6 py-3 bg-gray-100 text-gray-800 font-medium rounded-lg shadow hover:bg-gray-200 transition"
            >
              Sell Product
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1">
          <div className="w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-lg bg-gray-200 flex items-center justify-center relative">
             <Image 
              src={hero} 
              alt="Hero Banner" 
              fill={true}
              className="w-full h-full object-cover" 
              
            />
          </div>
        </div>

      </div>
    </section>
  );
}
