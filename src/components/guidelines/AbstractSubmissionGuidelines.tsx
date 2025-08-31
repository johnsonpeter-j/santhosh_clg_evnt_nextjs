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

                <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md rounded-lg bg-clip-border">
                    {/* table-fixed ensures equal width columns */}
                    <table className="w-full text-left table-fixed min-w-max border-collapse">
                        <thead>
                            <tr >
                                {siteData.AbstractSubmissionGuidelinesData.tHeadData.map((tHeadsDataItem, rowIndex) => (
                                    <th key={`abstract_sub_guide_th_item_${rowIndex}`}
                                        className="p-4 border-b border-green-300 bg-green-600 w-[25%] whitespace-normal break-words"
                                    >
                                        <p className="block text-sm font-normal leading-snug text-white" dangerouslySetInnerHTML={{ __html: sanitizeHtml(tHeadsDataItem) }}>

                                        </p>
                                    </th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                            {siteData.AbstractSubmissionGuidelinesData.tBodyData.map((tbodyItem, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-green-50">
                                    {tbodyItem.map((tbodyItemData, tbodyItemIndex) => (
                                        <td
                                            key={tbodyItemIndex}
                                            className={`p-4 border-b border-green-200 w-[25%] whitespace-normal break-words `}

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
