import { siteData } from "@/data/data";

// components/ReviewProcess.tsx
export default function ReviewProcess() {

  return (
    <section
      id="review-process"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Review Process</h2>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          {siteData.reviewProcess.map((item, idx) => (
            <li key={idx}>
              <span className="font-bold">{item.title}:</span> {item.desc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
