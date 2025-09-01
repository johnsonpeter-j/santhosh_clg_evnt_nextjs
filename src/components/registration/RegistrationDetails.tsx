import { siteData } from "@/data/data";
import { sanitizeHtml } from "@/lib/sanitizeHtml";

export default function RegistrationDetails() {
  return (
    <section
      id="registration-details"
      className="max-w-[1200px] mx-auto px-4 pt-8"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Registration Details
        </h3>

        <ol>
          {
            siteData.registrationDetailsData.map((registrationDataItem, registrationDataIndex) => {
              return (<li key={`registration_data__item_${registrationDataIndex}`} className="ml-10 list-decimal text-gray-600 leading-relaxed marker:text-green-600 " dangerouslySetInnerHTML={{ __html: sanitizeHtml(registrationDataItem) }}></li>)
            })
          }
        </ol>
      </div>
    </section>
  );
}
