import { siteData } from "@/data/data";

// components/SubmissionProcedure.tsx
export default function SubmissionProcedure() {

  return (
    <section
      id="submission-procedure"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10"> Submission Procedure</h2>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead>
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Submission Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Research Idea Pitch (Abstract Format)
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Full Paper Submission
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {siteData.submissionProcedure.map((row, idx) => (
              <tr key={idx}>
                <td className="px-6 py-4 whitespace-nowrap font-bold text-gray-900">
                  {row.label}
                </td>
                <td className="px-6 py-4 text-gray-600">{row.abstract}</td>
                <td className="px-6 py-4 text-gray-600">{row.full}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
