import { siteData } from "@/data/data";

export default function PreConferenceWorkshop() {
  return (
    <section
      id="tracks"
      className="mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">
        Pre-Conference Workshop
      </h2>

      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          {siteData.preConferenceWorkshop.title}
        </h3>

        <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
          {/* table-fixed ensures equal width columns */}
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead>
              {siteData.preConferenceWorkshop.tHeadData.map((tHeadsDataItem, rowIndex) => (
                <tr key={`pre_conference_workshop_table_row_item_${rowIndex}`}>
                  {tHeadsDataItem.map((item, colIndex) => (
                    <th
                      key={`pre_conference_workshop_table_head_item_${colIndex}`}
                      className={`px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider ${rowIndex === 0 ? "text-center" : "text-left"}`}
                      colSpan={rowIndex === 0 && colIndex === 1 ? 2 : 1}
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
              {siteData.preConferenceWorkshop.tBodyData.map((tbodyItem, rowIndex) => (
                <tr key={`pre_conference_workshop_table_body_row_item_${rowIndex}`} >

                  <td
                    className={`px-6 py-4 text-gray-600 whitespace-normal break-words`}
                  >
                    <p className="block text-sm">
                      {tbodyItem.time}
                    </p>
                  </td>

                  <td
                    className={`px-6 py-4 text-gray-600 whitespace-normal break-words ${!tbodyItem.day_1_roomB
                      ? "text-center"
                      : "text-left"
                      }`}
                    colSpan={
                      !tbodyItem.day_1_roomB ? 2 : 1
                    }
                  >
                    <p className="block text-sm">
                      {tbodyItem.day_1_roomA}
                    </p>
                  </td>

                  {tbodyItem.day_1_roomB && <td
                    className={`px-6 py-4 text-gray-600 whitespace-normal break-words`}
                  >
                    <p className="block text-sm">
                      {tbodyItem.day_1_roomB}
                    </p>
                  </td>
                  }

                  <td
                    className={`px-6 py-4 text-gray-600 whitespace-normal break-words`}
                  >
                    <p className="block text-sm">
                      {tbodyItem.day_2_roomA}
                    </p>
                  </td>


                  <td
                    className={`px-6 py-4 text-gray-600 whitespace-normal break-words`}
                  >
                    <p className="block text-sm">
                      {tbodyItem.day_3_roomA}
                    </p>
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
