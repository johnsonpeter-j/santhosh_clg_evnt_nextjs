import { siteData } from "@/data/data";
import Image from "next/image";

export default function DayWiseSchedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-20 mx-auto px-4 py-8 mb-4"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">
        Day Wise Schedule
      </h2>

      <div className="w-full">
        <Image
          src={siteData.dayWiseScheduleImagePath}
          alt="venue"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto rounded-lg"
        />
      </div>

    </section>
  );
}
