
import AdvisoryBoard from "@/components/committee/AdvisoryBoard";

import OrganizationBoard from "@/components/committee/OrganizationBoard";

export default function ConferenceTeam() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <OrganizationBoard />

            <AdvisoryBoard />

           
        </div>
    );
}
