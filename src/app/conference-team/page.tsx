
// import AdvisoryBoard from "@/components/conference-team/AdvisoryBoard";
import OrganizationBoard from "@/components/conference-team/OrganizationBoard";
import Speakers from "@/components/conference-team/Speakers";
// import Sponsors from "@/components/conference-team/Sponsors";

export default function ConferenceTeam() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <Speakers />

            <OrganizationBoard />

            {/* <AdvisoryBoard />

            <Sponsors /> */}
        </div>
    );
}
