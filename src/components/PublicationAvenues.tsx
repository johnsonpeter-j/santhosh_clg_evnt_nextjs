import { siteData } from "@/data/data";

// components/PublicationAvenues.tsx
export default function PublicationAvenues() {

  return (
    <section
      id="publication-avenues"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10"> Publication Avenues</h2>

      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
        {/* Confirmed List */}
        <h4 className="text-2xl font-bold text-gray-700 mb-4">Confirmed List</h4>
        <p className="text-gray-600 mb-4">
          The submitted works will undergo a rigorous peer review process, and
          the selected Ideas and Abstracts will be invited for publication in
          the <span className="font-semibold">Book of Abstracts</span> with an{" "}
          <span className="font-semibold">ISSN</span> and Extended Abstracts
          will be published in the{" "}
          <span className="font-semibold">
            Springer proceedings (Scopus Indexed)
          </span>
          . Selected full papers will be invited to submit to one of the
          following journals with mentoring support.
        </p>
        <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
          {siteData.publicationAvenuesData.confirmedList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Under Progress */}
        <h4 className="text-2xl font-bold text-gray-700 mb-4">Under Progress</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {siteData.publicationAvenuesData.underProgress.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
