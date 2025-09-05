import { siteData } from "@/data/data";
import Image from "next/image";

export default function TravelToTSM() {
  return (
    <section
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 py-8"
    >
      {/* Content Box */}


      {/* Image wrapper with relative + height */}
      {/* <div className="relative w-full h-170 rounded-lg overflow-hidden">
        <Image
          src={siteData.venueImagePath}
          alt="venue"
          fill
          className="object-cover"
        />
      </div> */}
      <div className="lg:relative lg:h-170 rounded-lg overflow-hidden">
        <Image
          src={siteData.venueImagePath}
          alt="venue"
          fill
          className="md:object-cover imgStyle object-contain"
        />
      </div>
    </section>
  );
}
