"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Products from "./Products";

export default function Features() {
  const [products, setProducts] = useState([]);
  const { loading } = useContext(AuthContext);
  useEffect(() => {
    fetch("https://nextshop-ruby.vercel.app/features") // Express API URL
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => console.log(err));
  }, []);
  if (loading) {
    return (
      <div className="py-16 text-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );
  }
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose NextShop?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((item, i) => (
            <div
              key={i}
              className="p-6 bg-white rounded-xl shadow hover:shadow-xl transition"
            >
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
