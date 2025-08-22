// components/ReviewProcess.tsx
export default function ReviewProcess() {
  const points = [
    {
      title: "Double-Blind Peer Review",
      desc: "All submissions will undergo a strict double-blind review process to ensure fairness, objectivity, and academic integrity.",
    },
    {
      title: "Expert Evaluation Panel",
      desc: "Reviews will be conducted by a panel of experienced national and international academicians, subject matter experts, and journal reviewers.",
    },
    {
      title: "Plagiarism Check",
      desc: "Every paper will be screened through advanced plagiarism detection tools (e.g., Turnitin/iThenticate) to maintain ethical publication practices.",
    },
    {
      title: "High Acceptance Standards",
      desc: "Only papers that demonstrate academic rigor and innovation will be forwarded to the desk level of the journal or journal recommendation.",
    },
  ];

  return (
    <section
      id="review-process"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="relative pb-2 text-4xl md:text-5xl font-bold text-green-600 text-center mb-10">
        Review Process
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-1.5 rounded-sm bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 animate-gradient-x"></span>
      </h2>

      {/* Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500 max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          {points.map((item, idx) => (
            <li key={idx}>
              <span className="font-bold">{item.title}:</span> {item.desc}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
