// components/KeyRequirements.tsx
export default function KeyRequirements() {
  const requirements = [
    "3-Minute Research Presentation for research pitch and 15 minutes for full paper Presentation.",
    "Strictly time-bound.",
    "Research Pitch – maximum 3 slides or poster.",
    "Full Paper – 10 minutes Presentation and 5 minutes for feedback and discussion with the panel.",
  ];

  return (
    <section
      id="key-requirements"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="relative pb-2 text-3xl md:text-5xl font-bold text-green-600 text-center mb-10">
        Key Requirements for Accepted Participants
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[80px] h-1.5 rounded-sm bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 animate-gradient-x"></span>
      </h2>

      {/* Requirements Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500 max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          {requirements.map((req, idx) => (
            <li key={idx}>{req}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}