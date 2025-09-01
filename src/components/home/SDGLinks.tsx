"use client";

import { siteData } from "@/data/data";
import { sanitizeHtml } from "@/lib/sanitizeHtml";

export default function SDGLinks() {

  return (
    <section
      id="sustainability"
      className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-green-600 mt-4 mx-4"
    >
      <h3 className="text-2xl font-bold text-gray-700 mb-4">SDG Links</h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {siteData.conferenceTracks.map((conferenceTracksItem, conferenceTracksIndex) => (
          <div key={conferenceTracksIndex} className="flex flex-col items-center bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
            <h4 className="text-lg font-bold text-gray-800">Track {conferenceTracksIndex+1}</h4>

            <p className="text-gray-600 text-sm text-justify" dangerouslySetInnerHTML={{ __html: sanitizeHtml(conferenceTracksItem.sdg_link) }}>

              </p>
          </div>
        ))}
      </div>

    </section>
  );
}
