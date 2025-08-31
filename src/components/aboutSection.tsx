
import ConferenceInfo from "./about/ConferenceInfo";
import Highlight from "./about/Highlights";
// import Collaborators from "./about/collabrators";
import AdvisoryBoard from "./about/advisoryBoard";
import Sponsors from "./about/sponsors";
import OrganizationBoard from "./about/organizationBoard";
import Madurai from "./home/maduraiPlaces";
import { siteData } from "@/data/data";

export default function AboutSection() {
    return (
        <section id="about" className="container mx-auto px-4 mb-12">
            {/* <h2 className="text-4xl font-bold text-[#4CAF50] text-center mb-10">
                About Us
            </h2> */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">About Us</h2>


            {/* TSM and Conference Info */}
            <ConferenceInfo />

            {/* Highlights */}
            <Highlight />

            {/* Awards */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-green-600">
                <h3 className="text-2xl font-bold text-gray-700 mb-4">
                    Awards & Recognition
                </h3>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                    {
                        siteData.awardData.map((awardDataItem, awardDataIndex)=>{
                            return (<li key={`award_data_item_${awardDataIndex}`}>{awardDataItem}</li>)
                        })
                    }
                </ul>
            </div>

            {/* Collaborators */}
            {/* <Collaborators /> */}

            {/* Advisory Board */}
            <AdvisoryBoard />

            {/* Organizing Committee */}
            <OrganizationBoard />

            {/* Sponsors */}
            <Sponsors />

            {/* Madurai places */}
            {/* <Madurai/> */}
        </section>
    );
}
