import { siteData } from "@/data/data";

export default function Accomodation() {
  return (
    <section
      id="accommodation"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 py-8"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Accomodation
        </h3>

        <ol>
          {
            siteData.accommodationDetails.map((accommodationDetailsDataItem, accommodationDetailsDataIndex) => {
              return (<li key={`accomodation_details_data_item_${accommodationDetailsDataIndex}`} className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]" >{accommodationDetailsDataItem}</li>)
            })
          }
        </ol>
      </div>
    </section>
  );
}
