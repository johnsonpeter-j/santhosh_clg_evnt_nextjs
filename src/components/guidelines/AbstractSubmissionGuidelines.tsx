import { siteData } from "@/data/data";
import { sanitizeHtml } from "@/lib/sanitizeHtml";

export default function AbstractSubmissionGuidelines() {
    return (
        <section
            id="tracks"
            className=" max-w-[1200px] mx-auto px-4 pt-8"
        >
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">

                <h3 className="text-xl font-bold text-gray-700 mb-2">
                    {siteData.AbstractSubmissionGuidelinesData.title}
                </h3>

                <div className="bg-white rounded-lg shadow-md p-6 overflow-x-auto">
                    {/* table-fixed ensures equal width columns */}
                    <table className="min-w-full divide-y divide-gray-200 text-sm">
                        <thead>
                            <tr >
                                {siteData.AbstractSubmissionGuidelinesData.tHeadData.map((tHeadsDataItem, rowIndex) => (
                                    <th key={`abstract_sub_guide_th_item_${rowIndex}`}
                                        className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider"
                                    >
                                        <p className="block text-sm font-normal leading-snug" dangerouslySetInnerHTML={{ __html: sanitizeHtml(tHeadsDataItem) }}>

                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody className="divide-y divide-gray-200">
                            {siteData.AbstractSubmissionGuidelinesData.tBodyData.map((tbodyItem, rowIndex) => (
                                <tr key={rowIndex} >
                                    {tbodyItem.map((tbodyItemData, tbodyItemIndex) => (
                                        <td
                                            key={`abstract_sub_guide_td_item_${tbodyItemIndex}`}
                                            className={`px-6 py-4 text-gray-600 whitespace-normal break-words `}

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
