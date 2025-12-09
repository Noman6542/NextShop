"use client";

import Features from "../Section/Features";
import Hero from "../Section/Hero";
import Products from "../Section/Products";
import Promobanner from "../Section/Promobanner";
import Testimonials from "../Section/Testimonials";



export default function Homes() {
  return (
    <div className="max-w-6xl mx-auto">
      <Hero />
      <Features />
      <Products />
      <Testimonials />
      <Promobanner />
    </div>
  );
}
