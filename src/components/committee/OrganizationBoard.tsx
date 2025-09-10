import { siteData } from "@/data/data";
import Image from "next/image";
import OrganizationCommitee from "./OrganizationCommitee";

export default function OrganizationBoard() {

    return (
        <section
            id="organizing"
            className="scroll-mt-20 mx-auto px-4 pt-8"
        >
            <div
                id="organizing-committee"
                className="bg-white rounded-lg text-center shadow-md p-6 border-t-4 border-green-600"
            >
                <h3 className="text-2xl font-bold text-gray-700 mb-6">
                    Chief Patrons
                </h3>
                <div className="grid md:grid-cols-3 place-content-center gap-8">
                    {siteData.chiefPatron.slice(0, 3).map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center ">
                            <Image
                                src={member.src}
                                alt={member.name}
                                width={128}
                                height={128}
                                className=" object-cover w-32 h-32 rounded-full  shadow-lg"
                            />
                            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                            <p className="text-lg font-semibold text-gray-600 ">
                                {member.role}
                            </p>
                            <p className="text-gray-600 text-lg">{member.place}</p>
                        </div>
                    ))}
                </div>
                <div className="grid md:grid-cols-2 place-content-center gap-8 mt-8">
                    {siteData.chiefPatron.slice(3, 5).map((member, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center ">
                            <Image
                                src={member.src}
                                alt={member.name}
                                width={128}
                                height={128}
                                className=" object-cover w-32 h-32 rounded-full  shadow-lg"
                            />
                            <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                            <p className="text-lg font-semibold text-gray-600 ">
                                {member.role}
                            </p>
                            <p className="text-gray-600 text-lg">{member.place}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div
                id="organizing-committee"
                className="bg-white rounded-lg shadow-md text-center p-6 border-t-4 border-green-600"
            >
                <h3 className="text-2xl font-bold text-gray-700 mb-6">
                    Conference Convenor
                </h3>
                <div className="grid md:grid-cols-1 place-content-center gap-8">
                    <div className="flex flex-col items-center text-center">
                        <Image
                            src={'/images/11.webp'}
                            alt=""
                            width={128}
                            height={128}
                            className=" object-cover w-32 h-32 rounded-full mb-1 shadow-lg"
                        />
                        <h4 className="text-xl font-bold text-gray-800">Dr. K. Mathiyazhagan</h4>
                        <p className="text-lg font-semibold text-gray-600 ">
                            Professor & Head of Research Centre
                        </p>
                        <p className="text-gray-600 text-lg">
                            Thiagarajar School of Management, Madurai,
                            India
                        </p>
                    </div>
                </div>
            </div>
            <OrganizationCommitee />

        </section>
    )
}