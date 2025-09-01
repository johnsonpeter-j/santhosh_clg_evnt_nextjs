// components/FAQs.tsx
"use client";

import { siteData } from "@/data/data";
import { sanitizeHtml } from "@/lib/sanitizeHtml";
import { ChevronDown } from "lucide-react";

export default function FAQs() {
  return (
    <section id="faq" className="max-w-[1200px] mx-auto px-4 py-8 mb-12">
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Frequently Asked Questions</h2>

      <div className="mx-auto space-y-4">
        {
          siteData.FaqsData.map((faqDataItem, FaqDataIndex) => {
            return (<details key={`faq_data_item_${FaqDataIndex}`} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 group">
              <summary className="text-xl font-semibold text-gray-700 cursor-pointer flex justify-between items-center">
                <span>{faqDataItem.question}</span>
                <span className="transition-transform group-open:rotate-180">
                  <ChevronDown />
                </span>
              </summary>
              <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: sanitizeHtml(faqDataItem.answer) }}>

              </p>
            </details>)
          })
        }
      </div>
    </section>
  );
}
