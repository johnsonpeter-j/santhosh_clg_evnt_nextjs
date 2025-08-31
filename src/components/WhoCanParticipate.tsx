// components/WhoCanParticipate.tsx

export default function WhoCanParticipate() {
  return (
    <section
      id="who-can-participate"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Who Can Participate?</h2>


      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 max-w-2xl mx-auto">
        <p className="text-gray-600 leading-relaxed">
          Master&apos;s Degree, Ph.D. Research Scholars, Postdoctoral Researchers,
          Early-Career and Senior Faculty Members across disciplines such as
          Management, Engineering, Computer Science, Social Sciences, and
          Sustainability, seeking collaboration, visibility to build their
          publication portfolio, and gain international exposure.
        </p>
      </div>
    </section>
  );
}
