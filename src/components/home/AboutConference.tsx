import { siteData } from "@/data/data";
import DownloadBrochure from "./DownloadBrochure";

export default function AboutConfernce() {
  return (

    <div className="mt-4 mx-4">
      {/* Responsive Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* About Conference Card */}
        <div id="about-the-conference" className="scroll-mt-20 bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 md:col-span-2">
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            About Conference
          </h3>
          <p className="text-gray-600 text-justify">{siteData.aboutData[1].description}</p>
        </div>

        {/* Key Dates Card */}
        <div id="key-dates" className="scroll-mt-20 bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
          <h3 className="text-2xl font-bold text-gray-700 mb-4 text-center">
            Key Dates
          </h3>
          <ul className="list-disc list-inside text-gray-600 space-y-3">
            {siteData.keyDates.map((item, idx) => (
              <li key={idx}>
                <span className="font-bold">{item.label}:</span> {item.value}
              </li>
            ))}
          </ul>
          <DownloadBrochure />
        </div>
      </div>
    </div>
  );
}
