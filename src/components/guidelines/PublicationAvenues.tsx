// components/PublicationAvenues.tsx
export default function PublicationAvenues() {

  return (
    <section
      id="publication-avenue"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center">
          Publication Avenues for Selected Research Work
        </h1>

        {/* Intro */}
        <section className="bg-white p-6 rounded-2xl shadow">
          <p className="mb-4">
            Authors will receive{" "}
            <span className="font-semibold text-blue-600">15 Days of mentoring</span>{" "}
            from the conference review team for upgrading the manuscript,
            enabling them to submit for publication in the following Journals /
            Conference Proceedings / Edited Book Series based on the scope of the
            manuscript.
          </p>
          <p>
            Selected full papers will be invited to submit to one of the following,
            depending on the scope of the work.
          </p>
        </section>

        {/* Partnering Journals */}
        <section className="mt-2">
          <h2 className="text-2xl font-semibold mb-4">Partnering Journals</h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-medium">
                The International Journal of Logistics Management
              </p>
              <p className="text-sm text-gray-600">
                Emerald, ABDC- A, Q1, IF 6.4
              </p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-medium">
                Corporate Social Responsibility and Environmental Management
              </p>
              <p className="text-sm text-gray-600">
                Wiley, ABDC - C, Q1, IF 9.1
              </p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-medium">
                Environment, Development and Sustainability
              </p>
              <p className="text-sm text-gray-600">
                SCOPUS, SCIE, Springer, Q1, IF 4.2
              </p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-medium">
                International Journal of Global Business and Competitiveness
              </p>
              <p className="text-sm text-gray-600">
                Springer, ABDC-C, IF 2.3
              </p>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-3 italic">
            * Authors of selected high-quality contributions may be invited to
            extend their work into full-length papers for potential submission.
            All recommended submissions must follow the journal’s review policy.
          </p>
        </section>

        {/* Conference Proceedings */}
        <section  className="mt-2">
          <h2 className="text-2xl font-semibold mb-4">
            Conference Proceedings and Book Series
          </h2>
          <ul className="space-y-4">
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-medium">Springer Proceedings - Scopus Indexed</p>
              <p className="text-sm text-gray-600 italic">for full length papers</p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-medium">
                Book Chapters in Edited Book Series in Wiley and Elsevier
              </p>
              <p className="text-sm text-gray-600 italic">for full length papers</p>
            </li>
            <li className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
              <p className="font-medium">Book of Abstracts with an ISBN</p>
              <p className="text-sm text-gray-600 italic">for Research Pitch</p>
            </li>
          </ul>
        </section>
      </div>
    </section>
  );
}
