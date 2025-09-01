"use client";

import { siteData } from "@/data/data";

export default function Venue() {
  return (
    <section id="venue" className="max-w-[1200px] mx-auto px-4 pt-8">
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Venue</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {
          siteData.venueDetails.map((venueDetailsItem, venueDetailsIndex) => {
            return (<div key={`venue_details_item_${venueDetailsIndex}`} className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600">
              <h3 className="text-2xl font-bold text-gray-700 mb-4">
                {venueDetailsItem.title}
              </h3>
              <p className="text-gray-600 text-justify">{venueDetailsItem.description}</p>
            </div>)
          })
        }

      </div>
    </section>
  );
}
