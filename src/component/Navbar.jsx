"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/">
          <span className="font-bold text-lg">NextShop</span>
        </Link>

        {/* Links */}
        <div className="hidden md:flex items-center gap-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/features">Features</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Auth Buttons / Profile (You will add later) */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="btn">Login</Link>
          <Link href="/Register" className="btn-outline">Register</Link>
        </div>

      </div>
    </nav>
  );
}
