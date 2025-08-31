import ConferenceTracks from "@/components/programme/ConferenceTracks";
import DayWiseSchedule from "@/components/programme/DayWiseSchedule";
import PreConferenceWorkshop from "@/components/programme/PreConferenceWorkshop";

export default function Programme() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <ConferenceTracks />

            <DayWiseSchedule />

            <PreConferenceWorkshop />
        </div>
    );
}
