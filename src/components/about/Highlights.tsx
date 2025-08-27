import { siteData } from "@/data/data";

export default function Highlight() {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-[#00BCD4]">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
                Attraction, Highlights & Value Proposition
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
                {
                    siteData.hightlightData.map((highlightDataItem, highlightDataIndex) => {
                        return (<li key={`hightlight_data_item_${highlightDataIndex}`}>
                            <span className="font-bold">
                                {highlightDataItem.title} :
                            </span>{" "}
                            {highlightDataItem.description}
                        </li>)
                    })
                }
            </ul>
        </div>
    )
}