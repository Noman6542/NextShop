"use client";

import Link from "next/link";

export default function Promobanner() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-4xl font-bold mb-4">Special Offer!</h2>
        <p className="text-lg mb-6">
          Get up to <span className="font-bold">50% off</span> on selected items.
        </p>

        <Link href='/item-list' className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition text-center cursor-pointer">
          Shop Now
        </Link>

      </div>
    </section>
  );
}
