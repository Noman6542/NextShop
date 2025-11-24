"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ItemListPage() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/items")
      .then(res => res.json())
      .then(data => setItems(data))
      .catch(err => console.log(err));
  }, []);

  // Filtered items
  const filteredItems = items.filter(item => {
    return (
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (category ? item.category === category : true)
    );
  });

  // Unique categories
  const categories = [...new Set(items.map(item => item.category))];

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        {/* Page title */}
        <h1 className="text-4xl font-bold mb-2 text-center">Item List</h1>
        <p className="text-center text-gray-600 mb-8">
          Browse our collection of premium products.
        </p>

        {/* Search + category filter */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Search items..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full sm:w-64"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-4 py-2 border rounded-lg w-full sm:w-64"
          >
            <option value="">All Categories</option>
            {categories.map((cat, i) => (
              <option key={i} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Grid of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredItems.map((item,index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-4 hover:shadow-xl transition flex flex-col"
            >
              <div className="flex justify-center mb-4">
                <img src={item.img} alt={item.title} className="rounded-lg" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-2">{item.description}</p>
              <p className="font-semibold mb-4">{item.price}</p>
              <Link href={`/item-list/${item.id}`} className="mt-auto px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition cursor-pointer text-center">
                
                Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
