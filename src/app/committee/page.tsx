
import AdvisoryBoard from "@/components/committee/AdvisoryBoard";
import InternalBoard from "@/components/committee/InternalComittee";
import OrganizationBoard from "@/components/committee/OrganizationBoard";
import Speakers from "@/components/speakers/Speakers";
// import Sponsors from "@/components/conference-team/Sponsors";

export default function ConferenceTeam() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <OrganizationBoard />

            {/* <Speakers /> */}

            <AdvisoryBoard />

            <InternalBoard />

            {/* <Sponsors /> */}
        </div>
    );
}
