import AdvisoryBoard from "@/components/committee/AdvisoryBoard";
import InternalOrganizeCommitee from "@/components/committee/InternalOrganizeCommitee";
import InternalReviewerTable from "@/components/committee/InternalReviewerTable";


import InternationalReviewersTable from "@/components/committee/InternationalReviewersTable";
import NationalReviewers from "@/components/committee/NationalReviewers";

import OrganizationBoard from "@/components/committee/OrganizationBoard";

export default function ConferenceTeam() {
  return (
    <div className="w-full">
      <OrganizationBoard />
<InternalOrganizeCommitee/>
      <AdvisoryBoard />

      <InternationalReviewersTable />
      <NationalReviewers />
     <InternalReviewerTable/>
    </div>
  );
}
