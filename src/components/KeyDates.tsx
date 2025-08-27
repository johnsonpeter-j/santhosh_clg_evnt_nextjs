import { siteData } from "@/data/data";

// components/KeyDates.tsx
export default function KeyDates() {

  return (
    <section
      id="key-dates"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Key Dates</h2>


      {/* Dates Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500 max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          {siteData.keyDates.map((item, idx) => (
            <li key={idx}>
              <span className="font-bold">{item.label}:</span> {item.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
