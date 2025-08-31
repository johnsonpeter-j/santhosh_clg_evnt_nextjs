import { siteData } from "@/data/data";

// components/Updates.tsx
export default function Updates() {

  return (
    <section id="updates" className="max-w-[1200px] mx-auto px-4 py-8 mb-12">
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">Updates</h2>


      {/* Updates Table */}
      <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
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
              {siteData.updatesData.map((updatesDataItem, updatesDataIndex) => (
                <tr key={updatesDataIndex} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {updatesDataItem.date}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {updatesDataItem.text}
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
