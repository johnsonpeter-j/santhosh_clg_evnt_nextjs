import React from "react";
interface Journal {
  title: string;
  publisher: string;
  index: string;
}

interface Proceeding {
  title: string;
  details: string;
}
const PublicationAvenue2 = () => {
  const journals: Journal[] = [
    {
      title: "The International Journal of Logistics Management",
      publisher: "Emerald",
      index: "ABDC - A, Q1, IF 6.4",
    },
    {
      title: "Corporate Social Responsibility and Environmental Management",
      publisher: "Wiley",
      index: "ABDC - C, Q1, IF 9.1",
    },
    {
      title: "Environment, Development and Sustainability",
      publisher: "Springer",
      index: "SCOPUS, SCIE, Q1, IF 4.2",
    },
    {
      title: "International Journal of Global Business and Competitiveness",
      publisher: "Springer",
      index: "ABDC - C, IF 2.3",
    },
    {
      title: "The Journal of Entrepreneurship",
      publisher: "Sage",
      index: "ABDC - C, IF 1.9",
    },
  ];
  const proceedings: Proceeding[] = [
    {
      title: "",
      details:
        "All the accepted full length papers in the conference will be published in Scopus Indexed Proceedings / Edited Book series in Wiley and Elsevier.",
    },
    // {
    //   title: "Book chapters in Edited Book Series",
    //   details: "in Wiley and Elsevier (for full-length papers).",
    // },
    {
      title: "Book of Abstracts Publication",
      details:
        "with ISBN (for research pitch). / Research Pitch / Doctoral Colloquium.",
    },
  ];

  return (
    <section
      id="publication-avenue"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 mt-10 mb-4"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-left mb-6">
          Publication Avenues for Selected Research Work
        </h2>

        {/* Intro in blue */}
        {/* <p className="text-blue-800 mb-3">
          Authors whose full papers are recommended for journal submission will
          receive up to <span className="font-semibold">15 days</span> of
          mentoring support from the conference review team. This mentoring is
          aimed at upgrading the manuscript to meet the standards required for
          peer-reviewed journals.
        </p> */}
        {/* <p className="text-blue-800 mb-6">
          Selected full papers based on the internal review committee recommendation, will be invited for submission
          to one of the partnering journals, depending on the scope and quality of the work.
        </p> */}

        {/* Partnering Journals */}
        <h3 className="text-xl font-semibold mb-3">Partnering Journals:</h3>
        <ul className="list-disc list-inside space-y-2 mb-2">
          {journals.map((journal, index) => (
            <li key={index} className="text-gray-800 text-lg">
              {journal.title} ({journal.publisher}, {journal.index})
            </li>
          ))}
        </ul>
        <p className="italic text-base text-gray-600 mb-6">
          *A few more journals are yet to be confirmed.
        </p>

        {/* Note */}
        <p className="text-lg font-semibold text-gray-700 italic mb-8">
          <span className="font-semibold">Note:</span> Authors of selected
          high-quality contributions will be invited to extend their work into
          full-length papers for potential submission to the journal. However,
          all recommended submissions must adhere to the journal&apos;s regular
          review policy.
        </p>

        {/* Conference Proceedings */}
        <h3 className="text-xl font-semibold mb-3">
          Conference Proceedings and Book Series:
        </h3>
        <ul className="list-disc list-inside space-y-2 mb-8">
          {proceedings.map((item, index) => (
            <li key={index} className="text-gray-800 text-lg">
              <span className="font-semibold">{item.title}</span> {item.details}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default PublicationAvenue2;
