"use client";
export default function Testimonials() {
  const reviews = [
    { name: "Sarah", text: "Amazing products and fast shipping!" },
    { name: "John", text: "Quality items, loved the experience." },
    { name: "Emma", text: "Customer support was super helpful." },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">

        <h2 className="text-3xl font-bold mb-10">What Our Customers Say</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-lg transition">
              <p className="text-gray-700 mb-4 italic">“{r.text}”</p>
              <h3 className="font-semibold text-lg">{r.name}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
