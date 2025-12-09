"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ ...formData,name:"", email: "", message: "" });
  };

  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center py-16 max-w-6xl mx-auto">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow text-center">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <p className="text-gray-600 mb-6">
          Have a question or want to get in touch? Fill out the form below!
        </p>

        {submitted && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">
            Thank you! Your message has been sent.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="border px-4 py-2 rounded bg-gray-100"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="border px-4 py-2 rounded"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="border px-4 py-2 rounded"
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
