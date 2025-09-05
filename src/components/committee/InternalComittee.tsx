import { siteData } from "@/data/data";

export default function InternalBoard() {

    return (
        <section
            id="internal-committee"
            className="scroll-mt-20 mx-auto px-4 pt-8 mb-4"
        >

            <div
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"
            >
                <h3 className="text-2xl font-bold text-gray-700 mb-6">
                    Internal Committee
                </h3>
                <div className="grid md:grid-cols-3 gap-8">
                    {siteData.internalBoardData.map((member, idx) => (
                        <div key={idx} className="flex flex-col bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow gap-2">
                            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                            <p className="text-sm font-semibold text-gray-600 mb-1">
                                {member.email}
                            </p>
                            <p className="text-gray-600 text-sm">{member.phone}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}