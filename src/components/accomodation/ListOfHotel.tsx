import { siteData } from "@/data/data";

export default function ListOfHostel() {
  return (
    <section
      id="list_of_hotels"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 py-4"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          List of Hotels
        </h3>

        <ol>
          {
            siteData.listOfHostels.map((accommodationDetailsDataItem, accommodationDetailsDataIndex) => {
              return (<li key={`list_of_hostel_data_item_${accommodationDetailsDataIndex}`} className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 text-lg marker:text-[20px]" ><a href={accommodationDetailsDataItem?.link} target="_blank">{accommodationDetailsDataItem?.hotel_name}</a></li>)
            })
          }
        </ol>
      </div>
    </section>
  );
}
