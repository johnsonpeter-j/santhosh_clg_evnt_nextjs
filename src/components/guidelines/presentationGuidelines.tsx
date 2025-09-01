import { siteData } from "@/data/data";

export default function PresentationGuidelines() {
    return (
        <section
            id="presentation-guidelines"
            className="max-w-[1200px] mx-auto px-4 py-8"
        >
            {/* Content Box */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                    Presentation Guidelines
                </h3>

                <ul>
                    {
                        siteData.presentationGuidelines.map((presentationGuidelinesItem, presentationGuidelinesIndex) => {
                            return (<li key={`presentation_guidelines_item_${presentationGuidelinesIndex}`} className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]">{presentationGuidelinesItem}</li>)
                        })
                    }
                </ul>
            </div>
        </section>
    );
}
