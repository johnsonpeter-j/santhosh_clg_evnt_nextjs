import AbstractSubmissionGuidelines from "@/components/guidelines/AbstractSubmissionGuidelines";
import CallForPaper from "@/components/guidelines/CallForPaper";
import FullPaperSubmissionGuidelines from "@/components/guidelines/FullPaperSubmissionGuidelines";
import PresentationGuidelines from "@/components/guidelines/presentationGuidelines";
import PublicationAvenues from "@/components/guidelines/PublicationAvenues";

export default function Guidelines() {
    return (
        <div className="mt-16 lg:mt-[72px] xl:mt-[72px] 2xl:mt-[72px] w-full">
            <CallForPaper />

            <AbstractSubmissionGuidelines />

            <FullPaperSubmissionGuidelines />

            <PresentationGuidelines />

            {/* <PublicationAvenues /> */}
        </div>
    );
}
