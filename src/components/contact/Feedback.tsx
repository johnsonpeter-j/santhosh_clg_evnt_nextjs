"use client";

import { useState } from "react";

type FeedbackForm = {
  name: string;
  email: string;
  comments: string;
};

export default function Feedback() {
  const [formData, setFormData] = useState<FeedbackForm>({
    name: "",
    email: "",
    comments: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // const res = await fetch("/api/feedback", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      // if (!res.ok) throw new Error("Failed to submit feedback");

      setSubmitted(true);
      setFormData({ name: "", email: "", comments: "" });
    } catch (err) {
      console.error(err);
      alert("❌ Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact-form" className="max-w-[1200px] mx-auto px-4 py-12 mb-12">
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">
        Contact Us
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
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
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-600 focus:border-green-600 focus:outline-none"
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
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-600 focus:border-green-600 focus:outline-none"
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
                className="w-full border border-gray-300 rounded-md p-2 focus:ring-green-600 focus:border-green-600 focus:outline-none"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="bg-green-600 text-white font-bold py-2 px-6 rounded-full hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 shadow-lg disabled:opacity-60"
              >
                {loading ? "Submitting..." : "Submit Feedback"}
              </button>
            </div>
          </form>
        ) : (
          <div className="text-center text-green-600 font-semibold space-y-4">
            ✅ Thank you for your feedback!
            <button
              onClick={() => setSubmitted(false)}
              className="block mx-auto bg-cyan-600 text-white px-4 py-2 rounded-md hover:bg-cyan-700"
            >
              Submit Another
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
