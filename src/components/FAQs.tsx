// components/FAQs.tsx
"use client";

import { ChevronDown } from "lucide-react";

export default function FAQs() {
  return (
    <section id="faqs" className="max-w-[1200px] mx-auto px-4 py-8 mb-12">
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>


      <div className="max-w-2xl mx-auto space-y-4">
        {/* FAQ 1 */}
        <details className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500 group">
          <summary className="text-xl font-semibold text-gray-700 cursor-pointer flex justify-between items-center">
            <span>What are the dates for the conference?</span>
            <span className="transition-transform group-open:rotate-180">
              <ChevronDown />
            </span>
          </summary>
          <p className="text-gray-600 mt-2">
            The International Conference on Frontiers of Sustainability will take
            place from <b>January 22nd to 24th, 2026</b>.
          </p>
        </details>

        {/* FAQ 2 */}
        <details className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500 group">
          <summary className="text-xl font-semibold text-gray-700 cursor-pointer flex justify-between items-center">
            <span>Is the registration fee refundable?</span>
            <span className="transition-transform group-open:rotate-180">
              <ChevronDown />
            </span>
          </summary>
          <p className="text-gray-600 mt-2">
            Registration fees are <b>non-refundable</b>. Please ensure all
            details are correct before completing your payment.
          </p>
        </details>

        {/* FAQ 3 */}
        <details className="bg-white rounded-lg shadow-md p-6 border-l-4 border-cyan-500 group">
          <summary className="text-xl font-semibold text-gray-700 cursor-pointer flex justify-between items-center">
            <span>Who is eligible to participate?</span>
            <span className="transition-transform group-open:rotate-180">
              <ChevronDown />
            </span>
          </summary>
          <p className="text-gray-600 mt-2">
            The conference is open to{" "}
            <b>
              Master&apos;s Degree, Ph.D. Research Scholars, Postdoctoral
              Researchers, and Early-Career &amp; Senior Faculty Members
            </b>{" "}
            across a wide range of disciplines.
          </p>
        </details>
      </div>
    </section>
  );
}
