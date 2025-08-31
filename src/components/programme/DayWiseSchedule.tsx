import { siteData } from "@/data/data";

export default function DayWiseSchedule() {
  return (
    <section
      id="tracks"
      className="mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">
        Day Wise Schedule
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          {siteData.dayWiseData.title}
        </h3>

        <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
          {/* table-fixed ensures equal width columns */}
          <table className="w-full text-left table-fixed min-w-max border-collapse">
            <thead>
              {siteData.dayWiseData.tHeadData.map((tHeadsDataItem, rowIndex) => (
                <tr key={rowIndex}>
                  {tHeadsDataItem.map((item, colIndex) => (
                    <th
                      key={colIndex}
                      className="p-4 border-b border-green-300 bg-green-600 w-[25%] whitespace-normal break-words"
                    >
                      <p className="block text-sm font-normal leading-snug text-white">
                        {item}
                      </p>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>

            <tbody>
              {siteData.dayWiseData.tBodyData.map((tbodyItem, rowIndex) => (
                <tr key={rowIndex} className="hover:bg-green-50">
                  {tbodyItem.map((tbodyItemData, tbodyItemIndex) => (
                    <td
                      key={tbodyItemIndex}
                      className={`p-4 border-b border-green-200 w-[25%] whitespace-normal break-words ${
                        tbodyItem.length === 2 && tbodyItemIndex !== 0
                          ? "text-center"
                          : "text-left"
                      }`}
                      colSpan={
                        tbodyItem.length === 2 && tbodyItemIndex !== 0 ? 3 : 1
                      }
                    >
                      <p className="block text-sm text-green-800">
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
