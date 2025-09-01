import { siteData } from "@/data/data";

export default function DayWiseSchedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-20 mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">
        Day Wise Schedule
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          {siteData.dayWiseData.title}
        </h3>

        <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
          {/* table-fixed ensures equal width columns */}
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead>
              {siteData.dayWiseData.tHeadData.map((tHeadsDataItem, rowIndex) => (
                <tr key={rowIndex}>
                  {tHeadsDataItem.map((item, colIndex) => (
                    <th
                      key={colIndex}
                      className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                    >
                      <p className="block text-sm font-normal leading-snug">
                        {item}
                      </p>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody className="divide-y divide-gray-200">
              {siteData.dayWiseData.tBodyData.map((tbodyItem, rowIndex) => (
                <tr key={rowIndex} >
                  {tbodyItem.map((tbodyItemData, tbodyItemIndex) => (
                    <td
                      key={tbodyItemIndex}
                      className={`px-6 py-4 text-gray-600 whitespace-normal break-words ${
                        tbodyItem.length === 2 && tbodyItemIndex !== 0
                          ? "text-center"
                          : "text-left"
                      }`}
                      colSpan={
                        tbodyItem.length === 2 && tbodyItemIndex !== 0 ? 3 : 1
                      }
                    >
                      <p className="block text-sm">
                        {tbodyItemData}
                      </p>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
