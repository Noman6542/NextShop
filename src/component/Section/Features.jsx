"use client";
export default function Features() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-10">Why Choose NextShop?</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Fast Delivery", desc: "Get your products delivered in 24 hours." },
            { title: "Secure Payment", desc: "100% secure online transaction." },
            { title: "Premium Products", desc: "We offer only verified quality items." },
          ].map((item, i) => (
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
