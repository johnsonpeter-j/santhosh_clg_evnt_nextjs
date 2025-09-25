import { siteData } from "@/data/data";

export default function FullPaperSubmissionGuidelines() {
  return (
    <section
      id="paper-guidelines"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 py-8"
    >
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          {siteData.fullPaperSubmissionGuidelinessData.title}
        </h3>
        <ul>
          {siteData.submissionDetails[1].points.map((point, i) => (
            <li
              key={`full_paper_sub_item_${i}`}
              className="ml-10 text-lg list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
            >
              <strong>{point?.point1}</strong>
              {point?.point2}
            </li>
          ))}
          <li className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]">
            For the Template{" "}
            <a
              href={siteData.submissionDetails[1].path}
              download={siteData.submissionDetails[1].fileName} // ensures file downloads instead of opening
              className="underline"
            >
              download here
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
