import { siteData } from "@/data/data";

// components/ConferenceTracks.tsx
export default function ConferenceTracks() {
  
  return (
    <section
      id="tracks"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Conference Tracks</h2>

      {/* Tracks Grid */}
      <div id="track-details" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {siteData.conferenceTracks.map((track, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {track.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{track.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
