"use client";
import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../Context/AuthProvider";

export default function Testimonials() {
  const [reviews, setReviews] = useState([]);
      const { loading } = useContext(AuthContext);
      useEffect(() => {
        fetch("https://nextshop-ruby.vercel.app/reviews") 
          .then((res) => res.json())
          .then((data) => {
            setReviews(data);
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

        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-xl transition border border-gray-100"
            >

              {/* Star Rating */}
              <div className="flex justify-center mb-3">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-xl" />
                ))}
              </div>

              <p className="text-gray-600 mb-4 italic">“{r.text}”</p>
              <h3 className="font-semibold text-lg">{r.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
