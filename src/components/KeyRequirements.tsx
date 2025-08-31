import { siteData } from "@/data/data";

// components/KeyRequirements.tsx
export default function KeyRequirements() {

  return (
    <section
      id="key-requirements"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Key Requirements for Accepted Participants</h2>


      {/* Requirements Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          {siteData.keyRequirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}