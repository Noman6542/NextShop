"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

        {/* Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Upgrade Your Shopping Experience
          </h1>
          <p className="text-gray-600 mb-6">
            Discover premium products at unbeatable prices.
          </p>

          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="/hero-storefront.jpg.webp"
            width={500}
            height={400}
            alt="Hero Banner"
            className="rounded-xl shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}
