// components/ConferenceTracks.tsx
export default function ConferenceTracks() {
  const tracks = [
    {
      title: "Track 1. Sustainable Entrepreneurship and Business Models",
      desc: "This track explores how organizations can manage human resources to promote social and environmental sustainability, covering topics like green HRM, employee well-being, and ethical labor practices.",
    },
    {
      title: "Track 2. Technological Innovations for Sustainability",
      desc: "This track explores financial strategies and instruments that support long-term economic and environmental health, including green banking, impact investing, and sustainable risk management.",
    },
    {
      title: "Track 3. Financing Sustainability and Impact Investing",
      desc: "This track explores the integration of sustainable practices into operational processes and supply chains, covering areas like sustainable logistics, lean manufacturing, and circular economy models.",
    },
    {
      title: "Track 4. Policy, Regulation, and Governance for Sustainability",
      desc: "This track explores the role of corporate governance and public policy in driving sustainability, including corporate social responsibility, stakeholder engagement, and ethical leadership.",
    },
    {
      title: "Track 5. Education and Capacity Building for Green Entrepreneurship",
      desc: "This track highlights how digital technologies can be leveraged to achieve sustainability goals, such as using AI for resource optimization, blockchain for transparent supply chains, and big data for environmental monitoring.",
    },
    {
      title: "Track 6. Digital Transformation and Sustainable Development",
      desc: "This track focuses on how organizations can manage human resources to promote social and environmental sustainability, covering topics like green HRM, employee well-being, and ethical labor practices.",
    },
    {
      title: "Track 7. Measuring Impact and Scaling Sustainable Ventures",
      desc: "This track explores financial strategies and instruments that support long-term economic and environmental health, including green banking, impact investing, and sustainable risk management.",
    },
    {
      title: "Track 8. Global Responsibility and Ethical Leadership",
      desc: "This track explores the integration of sustainable practices into operational processes and supply chains, covering areas like sustainable logistics, lean manufacturing, and circular economy models.",
    },
    {
      title: "Track 9. Sustainable Economic Growth in a Low-Carbon Future",
      desc: "This track focuses on the role of corporate governance and public policy in driving sustainability, including corporate social responsibility, stakeholder engagement, and ethical leadership.",
    },
  ];

  return (
    <section
      id="tracks"
      className="max-w-[1200px] mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Conference Tracks</h2>

      {/* Tracks Grid */}
      <div id="track-details" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tracks.map((track, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              {track.title}
            </h3>
            <p className="text-gray-600 leading-relaxed">{track.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
