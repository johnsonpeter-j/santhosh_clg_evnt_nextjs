// components/PublicationAvenues.tsx
export default function PublicationAvenues() {
  const confirmedList = [
    "International Journal of Global Business and Competitiveness (ABDC C; Springer)",
    "The International Journal of Logistics Management (ABDC A; Emerald)",
    "Corporate Social Responsibility and Environmental Management (ABDC C; Wiley)",
    "Environment, Development and Sustainability (SCOPUS, SCIE, Springer)",
  ];

  const underProgress = [
    "Journal of Entrepreneurship",
    "Journal of Intellectual Capital",
    "The International Journal of Management Education",
    "Journal of Business and Society Review",
    "Technology in Society",
    "TRE Journal",
    "International Journal of Emerging Trends",
    "Conference Proceedings in Springer",
  ];

  return (
    <section
      id="publication-avenues"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="relative pb-2 text-4xl md:text-5xl font-bold text-green-600 text-center mb-10">
        Publication Avenues
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-1.5 rounded-sm bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 animate-gradient-x"></span>
      </h2>

      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500">
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
          {confirmedList.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Under Progress */}
        <h4 className="text-2xl font-bold text-gray-700 mb-4">Under Progress</h4>
        <ul className="list-disc list-inside text-gray-600 space-y-1">
          {underProgress.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
