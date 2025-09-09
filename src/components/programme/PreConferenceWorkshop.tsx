import { siteData } from "@/data/data";

export default function PreConferenceWorkshop() {
  return (
    <section id="workshop" className="scroll-mt-20 mx-auto px-4 py-8 mb-4">
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Pre-Conference Workshop Highlights
        </h3>

        <ul>
          {siteData.presentationConfrence.map(
            (presentationGuidelinesItem, presentationGuidelinesIndex) => {
              return (
                <li
                  key={`presentation_guidelines_item_${presentationGuidelinesIndex}`}
                  className="ml-10 list-disc  text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
                >
                  <p className="inline text-lg font-semibold">{presentationGuidelinesItem?.title}</p> {presentationGuidelinesItem.content}
                </li>
              );
            }
          )}
        </ul>
      </div>
    </section>
  );
}
