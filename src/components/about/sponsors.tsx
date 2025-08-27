// components/Sponsors.tsx

import { siteData } from "@/data/data";

export default function Sponsors() {

    return (
        <section
            id="sponsors"
            className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500"
        >
            <h3 className="text-2xl font-bold text-gray-700 mb-6">Our Sponsors</h3>

            {/* Scrolling container */}
            <div className="flex overflow-x-auto gap-6 scrollbar-hide -webkit-overflow-scrolling-touch">
                {siteData.sponsors.map((sponsor, index) => (
                    <div
                        key={index}
                        className="bg-gray-200 rounded-md shadow-md px-6 py-4 text-center text-gray-800 text-lg font-medium min-w-[120px] flex items-center justify-center"
                    >
                        {sponsor}
                    </div>
                ))}
            </div>
        </section>
    );
}
