import { siteData } from "@/data/data";
import Image from "next/image";

export default function OutreachPartner() {
  return (
    <div
      id="outreach_partner"
      className="scroll-mt-20  bg-white rounded-lg shadow-md p-10 mb-12 border-t-4 border-green-600 mt-4 mx-4"
    >
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Outreach Partner 
      </h3>

      <div className="space-y-3">
        {siteData.outReachPartners?.map((item, index) => (
          <div
            key={index}
            className=" gap-4 flex lg:flex-nowrap flex-wrap shadow-lg max-h-md  md:items-center  p-8  rounded-lg "
          >
            {/* Image Column */}
            <div className="mx-auto">
              <Image
                src={item.img}
                alt={item.name}
                width={180}
                height={180}
                // className={` lg:w-96 ${siteData.collabtaorData[1].id === item.id ? "w-72 h-72":"w-60 h-60"} lg:h-40 object-contain `}
                className={`object-contain rounded-lg mx-auto 
            ${
              siteData.collabtaorData[1].id === item.id
                ? "max-w-[250px] w-[190px] md:max-w-[280px]"
                : "max-w-[180px]  md:max-w-[220px]"
            }
          `}
              />
            </div>

            {/* Text Column */}
            <div className=" text-center md:text-left">
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-bold text-gray-800 hover:underline block"
              >
                {item.name}
              </a>
              <p
                style={{ textAlign: "justify" }}
                className="text-gray-600 text-xl mt-1"
              >
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

