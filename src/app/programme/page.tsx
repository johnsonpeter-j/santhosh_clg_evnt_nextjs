import ConferenceTracks from "@/components/programme/ConferenceTracks";
import DayWiseSchedule from "@/components/programme/DayWiseSchedule";
import PreConferenceWorkshop from "@/components/programme/PreConferenceWorkshop";

export default function Programme() {
    return (
        <div className="w-full">
            <ConferenceTracks />

            <DayWiseSchedule />

            <PreConferenceWorkshop />
        </div>
    );
}
