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
        {siteData.outReachPartners?.map((item, index) => {
          const isMediaPartner =
            item.Title?.toLowerCase().includes("media partner") ||
            item.name?.toLowerCase().includes("media partner");
          const isConferenceAlert =
            item.Title?.toLowerCase().includes("conference alerts") ||
            item.name?.toLowerCase().includes("conference alerts");

          return (
            <div
              key={index}
              className="gap-4 flex lg:flex-nowrap flex-wrap shadow-lg max-h-md md:items-center p-8 rounded-lg"
            >
              {/* Image Column */}
              <div>
                <Image
                  src={item.img}
                  alt={
                    isMediaPartner || isConferenceAlert
                      ? "International Conference Alerts"
                      : item.name
                  }
                  width={180}
                  height={180}
                  className={`object-contain rounded-lg mx-auto 
            ${
              siteData.collabtaorData[1].id === item.id
                ? "max-w-[250px] w-[190px] md:max-w-[280px]"
                : "max-w-[180px] md:max-w-[220px]"
            }`}
                />
              </div>

              {/* Text Column */}
              <div className="text-center md:text-left">
                {/* Title */}
                <p className="text-xl font-bold text-gray-800 block">
                  {item.Title?.trim()}
                </p>

                {/* Subtitle (linked name) */}
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={item.link}
                    className="text-gray-800 text-lg hover:underline block mt-1"
                  >
                    {item.name}
                  </a>
                ) : (
                  <p className="text-gray-800 text-lg mt-1">{item.name}</p>
                )}

                {/* Description: show for non-media partners only */}
                {!isMediaPartner && !isConferenceAlert && (
                  <p
                    style={{ textAlign: "justify" }}
                    className="text-gray-600 text-xl mt-1"
                  >
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
