// components/SubmissionProcedure.tsx
export default function SubmissionProcedure() {
  const rows = [
    {
      label: "Purpose",
      abstract:
        "For participation in the 3-minute pitch session during the Conference",
      full: "For consideration in the edited volume (Springer Book Chapter or equivalent)",
    },
    {
      label: "Word Limit",
      abstract: "Extended Abstract 1500 Words",
      full: "5,000 to 6,000 Words",
    },
    {
      label: "Format",
      abstract:
        "Purpose – Design / Methodology / Approach – Findings – Originality – Research Limitations / Implications / Practical / Societal Implications",
      full: "Introduction & Problem Statement - Literature Review - Methodology - Findings - Discussion & Implications",
    },
    {
      label: "File Type",
      abstract: "Word Document (.doc/.docx)",
      full: "Word Document (.doc/.docx) – as per Springer formatting guidelines",
    },
    {
      label: "Review Process",
      abstract: "Reviewed for pitch quality, originality, and impact",
      full: "Peer-reviewed for academic quality and publication readiness",
    },
    {
      label: "Portal Link",
      abstract: "Portal Link <To be Updated Shortly>",
      full: "Portal Link <To be Updated Shortly>",
    },
    {
      label: "Deadline",
      abstract: "Deadline <To be Updated Shortly>",
      full: "Deadline <To be Updated Shortly>",
    },
    {
      label: "Eligibility",
      abstract:
        "Eligible for Best Research Idea, Best Pitch, and Societal Impact Awards",
      full: "Eligible for Best Paper with Societal Impact & Publication Opportunity",
    },
    {
      label: "Support",
      abstract: "3-month editorial and research mentoring",
      full: "Editorial guidance and publication processing support",
    },
  ];

  return (
    <section
      id="submission-procedure"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="relative pb-2 text-4xl md:text-5xl font-bold text-green-600 text-center mb-10">
        Submission Procedure
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-1.5 rounded-sm bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 animate-gradient-x"></span>
      </h2>

      {/* Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500 overflow-x-auto">
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
            {rows.map((row, idx) => (
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
