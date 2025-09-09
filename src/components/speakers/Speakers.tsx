import { siteData } from "@/data/data";
import Image from "next/image";

export default function Speakers() {

    return (
        <section
            id="speakers"
            className="scroll-mt-20 mx-auto px-4 pt-8"
        >

            <div
                id="organizing-committee"
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"
            >
                <h3 className="text-2xl font-bold text-gray-700 mb-6">
                    Key Speakers
                </h3>
                <div className="grid md:grid-cols-4  gap-8">
                    {siteData.keySpeakersData.slice(0,4).map((member, idx) => (
                        <div key={idx} className="flex flex-col  items-center text-center">
                            <Image
                                src={member.src}
                                alt={member.name}
                                width={120}
                                height={120}
                                className="w-32  h-32  rounded-full mb-2 shadow-lg"
                            />
                            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                            <p className="text-lg font-semibold text-gray-600 mb-1">
                                {member.role}
                            </p>
                            <p className="text-gray-600 text-base">{member.place}</p>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-3 mt-12 gap-8">
                    {siteData.keySpeakersData.slice(4,7).map((member, idx) => (
                        <div key={idx} className="flex flex-col  items-center text-center">
                            <Image
                                src={member.src}
                                alt={member.name}
                                width={120}
                                height={120}
                                className="w-32  h-32  rounded-full mb-2 shadow-lg"
                            />
                            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                            <p className="text-lg font-semibold text-gray-600 mb-1">
                                {member.role}
                            </p>
                            <p className="text-gray-600 text-base">{member.place}</p>
                        </div>
                    ))}
                </div>
                <div className="p-1">

                    <p className="text-base">* A few more editors yet to be confirmed</p>
                </div>
            </div>
        </section>
    )
}