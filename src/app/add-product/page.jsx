"use client";

import { useState, useContext, useEffect } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../../Context/AuthProvider";


export default function AddProductPage() {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
    category: "",
    img: "",
  });

  const [toast, setToast] = useState({ type: "", message: "" });

  // Redirect non-logged in users
  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [loading, user, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setToast({ type: "", message: "" });

    try {
      const res = await fetch("http://localhost:5000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok) {
        setToast({
          type: "success",
          message: data.message || "Product added successfully!",
        });
        setFormData({
          title: "",
          description: "",
          price: "",
          category: "",
          img: "",
        });
      } else {
        setToast({
          type: "error",
          message: data.message || "Something went wrong.",
        });
      }
    } catch (err) {
      setToast({ type: "error", message: err.message });
    }
  };

  if (loading) {
    return <div className="py-16 text-center">Loading...</div>;
  }

  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 max-w-lg bg-white p-8 rounded-xl shadow">
        <h1 className="text-3xl font-bold mb-6 text-center">Add Product</h1>

        {/* Toast Notification */}
        {toast.message && (
          <div
            className={`mb-4 p-3 rounded ${
              toast.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {toast.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />
          
          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            rows={4}
            required
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />
          
          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
          />
          <input
            type="text"
            name="img"
            placeholder="Image URL"
            value={formData.img}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
          />

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
