"use client";

import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Context/AuthProvider";

export default function Products() {
  const [products, setProducts] = useState([]);
    const { loading } = useContext(AuthContext);
    useEffect(() => {
      fetch("http://localhost:5000/products") 
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        
        <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow p-4 hover:scale-105 transition cursor-pointer"
            >
              <img src={p.img} className="rounded-lg mb-4 mx-auto" />
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <p className="text-gray-500">{p.price}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
