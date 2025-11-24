"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function ItemDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/items/${id}`) 
      .then(res => res.json())
      .then(data => setItem(data))
      .catch(err => console.log(err));
  }, [id]);
  console.log(item);
  
  if (!item)
    return (
      <div className="py-16 text-center">
        <div className="text-xl font-semibold">Loading...</div>
      </div>
    );

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <button
          onClick={() => router.back()}
          className="mb-6 px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
        >
          &larr; Back
        </button>

        {/* Product Banner */}
        <div className="flex flex-col md:flex-row gap-8 bg-white rounded-xl shadow p-6">
          <div className="flex-1 flex justify-center items-center">
            <img
              src={item.img}
              alt={item.title}
              className="rounded-lg w-full max-w-md object-cover"
            />
          </div>

          <div className="flex-1 flex flex-col">
            {/* Title */}
            <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

            {/* Full Description */}
            <p className="text-gray-700 mb-6">{item.description}</p>

            {/* Meta Info */}
            <div className="mb-6">
              <p className="text-lg font-semibold">Price: {item.price}</p>
              {item.date && <p className="text-gray-500">Date: {item.date}</p>}
              {item.priority && <p className="text-gray-500">Priority: {item.priority}</p>}
            </div>

            {/* Call to Action */}
            <button className="px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600 transition w-full md:w-auto">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
