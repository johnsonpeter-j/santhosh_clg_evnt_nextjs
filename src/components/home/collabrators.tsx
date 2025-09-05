import { siteData } from "@/data/data";
import Image from "next/image";

export default function Collaborators() {

    return (
        <div id="collaborating-institutions" className="scroll-mt-20  bg-white rounded-lg shadow-md p-10 mb-12 border-t-4 border-green-600 mt-4 mx-4">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Collaborating Institutions
            </h3>
           

            <div className="space-y-3">
                {siteData.collabtaorData?.map((item, index) => (
                    <div
                        key={index}
                        className="grid lg:grid-cols-3 shadow-lg max-h-md  md:items-center gap-10 p-8  rounded-lg "
                    >
                        {/* Image Column */}
                        <div className="lg:col-span-1 place-items-center">
                            <Image
                                src={item.img}
                                alt={item.name}
                                width={150}
                                height={150}
                                className=" lg:w-40 w-50 h-50 lg:h-40 object-contain "
                            />
                        </div>

                        {/* Text Column */}
                        <div className="lg:col-span-2 text-center md:text-left">
                            <a
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-bold text-gray-800 hover:underline block"
                            >
                                {item.name}
                            </a>
                            <p style={{textAlign:"justify"}} className="text-gray-600 text-sm mt-1">{item.desc}</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}


/*  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                {siteData.collabtaorData.slice(0, 3)?.map((collabratorDataItem, collabratorDataIndex) => (
                    <div key={collabratorDataIndex} className="flex gap-2 flex-col items-center">
                        <Image
                            src={collabratorDataItem.img}
                            alt={collabratorDataItem.name}
                            width={120}
                            height={120}
                            className="h-24 w-auto mb-2 shadow-md"
                        />
                        // <h4 className="text-lg font-bold text-gray-800">{collabratorDataItem.name}</h4> 
                        <a
                            href={collabratorDataItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-gray-800 hover:underline"
                        >
                            {collabratorDataItem.name}
                        </a>
                        <p className="text-gray-600 text-sm">{collabratorDataItem.desc}</p>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-2 mt-4 lg:grid-cols-2 gap-8 text-center">
                {siteData.collabtaorData.slice(3, 6)?.map((collabratorDataItem, collabratorDataIndex) => (
                    <div key={collabratorDataIndex} className="flex gap-2 flex-col items-center">
                        <Image
                            src={collabratorDataItem.img}
                            alt={collabratorDataItem.name}
                            width={120}
                            height={120}
                            className="h-24 w-auto mb-2 shadow-md"
                        />
                        // <h4 className="text-lg font-bold text-gray-800">{collabratorDataItem.name}</h4> 
                        <a
                            href={collabratorDataItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-bold text-gray-800 hover:underline"
                        >
                            {collabratorDataItem.name}
                        </a>
                        <p className="text-gray-600 text-sm">{collabratorDataItem.desc}</p>
                    </div>
                ))}
            </div> */