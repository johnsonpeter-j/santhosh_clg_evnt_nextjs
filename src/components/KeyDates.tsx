// components/KeyDates.tsx
export default function KeyDates() {
  const dates = [
    {
      label: "Submission Deadline",
      value: "21st November 2025",
    },
    {
      label: "Author Notification",
      value: "12th December 2025",
    },
    {
      label: "Camera Ready Deadline",
      value: "19th December 2025",
    },
    {
      label: "Final Registration Deadline",
      value: "12th January 2026",
    },
    {
      label: "International Conference FOS 2026-IRGJ",
      value: "22nd – 24th January 2026",
    },
  ];

  return (
    <section
      id="key-dates"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="relative pb-2 text-4xl md:text-5xl font-bold text-green-600 text-center mb-10">
        Key Dates
        <span className="absolute left-1/2 -translate-x-1/2 bottom-0 w-[60px] h-1.5 rounded-sm bg-gradient-to-r from-green-500 via-cyan-400 to-green-500 animate-gradient-x"></span>
      </h2>

      {/* Dates Card */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500 max-w-2xl mx-auto">
        <ul className="list-disc list-inside text-gray-600 space-y-3">
          {dates.map((item, idx) => (
            <li key={idx}>
              <span className="font-bold">{item.label}:</span> {item.value}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
