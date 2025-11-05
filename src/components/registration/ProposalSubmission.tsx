import { siteData } from "@/data/data";

export default function ProposalSubmission() {
  return (
    <section
      id="proposal_submission"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8"
    >
      {/* Content Box */}
      {/* <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Proposal Submission
        </h3>

        <ol className=" px-4 mt-3">
          <li>
            <p className="text-gray-600 text-lg leading-relaxed">
              Registration Instructions for Delegates:
            </p>
          </li>
          <ul>
            {siteData.proposal_submission.map((point, i) => (
              <li
                key={`abs_paper_sub_item_${i}`}
                className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
              >
                <strong>{point?.point1}</strong>
                {point?.point2}
              </li>
            ))}
          </ul>
        </ol>
      </div> */}
    </section>
  );
}
