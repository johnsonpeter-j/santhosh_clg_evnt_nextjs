import { siteData } from "@/data/data";

export default function CallForPaper() {
    return (
        <section
            id="call-for-papers"
            className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8"
        >
            {/* Content Box */}
            <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
                <h3 className="text-xl font-bold text-gray-700 mb-2">
                    Who Can Apply ?
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {siteData.callForPaperDescription}
                </p>
               
            </div>
        </section>
    );
}
