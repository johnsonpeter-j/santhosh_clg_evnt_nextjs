import { siteData } from "@/data/data";
import Image from "next/image";

export default function Sponsors() {

    return (
        <section
            id="sponsers"
            className="scroll-mt-20 mx-auto px-4 py-8"
        >

            <div
                id="organizing-committee"
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"
            >
                <h3 className="text-2xl font-bold text-gray-700 mb-6">
                    Sponsors
                </h3>
                <div className="grid md:grid-cols-5 gap-8">
                    {siteData.sponsorsData.map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <Image
                                src={member.image}
                                alt={member.title}
                                width={128}
                                height={128}
                                className="w-32 h-32 rounded-full mb-2 shadow-lg"
                            />
                            <h4 className="text-xl font-bold text-gray-800">{member.title}</h4>
                            <p className="text-gray-600 text-sm">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}