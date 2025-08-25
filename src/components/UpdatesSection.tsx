// components/Updates.tsx
export default function Updates() {
  const updates = [
    {
      date: "Nov 1, 2025",
      text: "New report highlights the critical role of circular economy models in achieving global sustainability goals.",
    },
    {
      date: "Oct 25, 2025",
      text: "A recent study shows that investments in green technology have surged by 30% this quarter, indicating a growing market.",
    },
    {
      date: "Oct 15, 2025",
      text: "Global leaders gather at a climate conference to discuss new policies for carbon neutrality by 2050.",
    },
  ];

  return (
    <section id="updates" className="max-w-[1200px] mx-auto px-4 py-8 mb-12">
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Updates</h2>


      {/* Updates Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Update
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {updates.map((item, idx) => (
                <tr key={idx} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {item.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {item.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
