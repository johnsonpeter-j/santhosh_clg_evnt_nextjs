import AbstractSubmissionGuidelines from "@/components/guidelines/AbstractSubmissionGuidelines";
import CallForPaper from "@/components/guidelines/CallForPaper";
import ConferenceReview from "@/components/guidelines/ConferenceReview";

import FullPaperSubmissionGuidelines from "@/components/guidelines/FullPaperSubmissionGuidelines";
import PresentationGuidelines from "@/components/guidelines/presentationGuidelines";
import PublicationAvenue2 from "@/components/guidelines/PublicationAvenue2";
import PublicationAvenues from "@/components/guidelines/PublicationAvenues";
// import PublicationOptions from "@/components/guidelines/PublicationOptions";

export default function Guidelines() {
  
  
  return (
    <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
      <CallForPaper />

      <ConferenceReview />
      {/* <PublicationOptions/> */}
       <PublicationAvenue2/>

      <AbstractSubmissionGuidelines />

      <FullPaperSubmissionGuidelines />

      <PresentationGuidelines />

      <PublicationAvenues />
     
    </div>
  );
}
