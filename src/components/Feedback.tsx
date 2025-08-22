// components/Feedback.tsx
"use client";

import { useState } from "react";

export default function Feedback() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // TODO: Hook this to backend API / service (e.g., Nodemailer, Supabase, etc.)
    console.log("Feedback Submitted:", formData);

    setSubmitted(true);
    setFormData({ name: "", email: "", comments: "" });
  };

  return (
    <section id="feedback" className="max-w-[1200px] mx-auto px-4 py-8 mb-12">
      {/* Section Title */}
      <h2 className="relative pb-2 text-3xl md:text-5xl font-bold text-green-600 text-center mb-10">
        Feedback
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[100px] h-1.5 rounded-sm bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 animate-gradient-x"></span>
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500">
        {!submitted ? (
          <form
            id="feedback-form"
            className="space-y-4"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-1"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-1"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none"
                required
              />
            </div>

            {/* Comments */}
            <div>
              <label
                htmlFor="comments"
                className="block text-gray-700 font-bold mb-1"
              >
                Comments
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                value={formData.comments}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-cyan-500 focus:border-cyan-500 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 shadow-lg"
              >
                Submit Feedback
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            ✅ Thank you for your feedback!
          </div>
        )}
      </div>
    </section>
  );
}
