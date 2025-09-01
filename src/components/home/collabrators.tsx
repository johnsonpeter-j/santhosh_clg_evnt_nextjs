import { siteData } from "@/data/data";
import Image from "next/image";

export default function Collaborators() {

    return (
        <div id="collaborating-institutions" className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-green-600 mt-4 mx-4">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Collaborating Institutions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {siteData.collabtaorData.map((collabratorDataItem, collabratorDataIndex) => (
                    <div key={collabratorDataIndex} className="flex flex-col items-center">
                        <Image
                            src={collabratorDataItem.img}
                            alt={collabratorDataItem.name}
                            width={120}
                            height={120}
                            className="h-24 w-auto mb-2 shadow-md"
                        />
                        <h4 className="text-lg font-bold text-gray-800">{collabratorDataItem.name}</h4>
                        <p className="text-gray-600 text-sm">{collabratorDataItem.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}