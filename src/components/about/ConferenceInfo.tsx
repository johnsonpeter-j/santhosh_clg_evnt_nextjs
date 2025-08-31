import { siteData } from "@/data/data";

export default function ConferenceInfo() {
    return (
        <div className="grid md:grid-cols-2 gap-8 mb-12">
            {
                siteData.aboutData.map((aboutDataItem, aboutDataIndex) => {
                    return (<div key={`about_data_item_${aboutDataIndex}`} className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
                        <h3 className="text-2xl font-bold text-gray-700 mb-4">
                            {aboutDataItem.title}
                        </h3>
                        <p className="text-gray-600">
                            {aboutDataItem.description}
                        </p>
                    </div>)
                })
            }
        </div>
    )
}