import { siteData } from "@/data/data";
import Link from "next/link";

export default function AboutTSM() {
  return (

    <div id="about-tsm-madurai" className="scroll-mt-20 mt-4 mx-4">
      {/* Responsive Grid */}
      < div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" >
        {/* About Conference Card */}
        < div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 md:col-span-2" >
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            <Link href={"https://tsm.ac.in/"} target="_blank" >
              Thiagarajar School of Management, Madurai, India
            </Link>
          </h3>
          <p className="text-gray-600 text-justify tracking-wider">{siteData.aboutData[0].description}</p>
          <div className="mt-4 p-3">
            <h3 className="text-2xl font-bold text-gray-700 mb-4">
              FOS 2026 - GRIE offers
            </h3>
            <ul className="list-disc">
              <li>
                <p className="text-gray-600 text-justify tracking-wider">
                  Engagement with pioneering research and emerging trends ensures participants interact directly with
                  cutting-edge technologies and breakthrough studies through interactive sessions, keynote talks, and
                  technical panels.
                </p>
              </li>
              <li>
                <p className="text-gray-600 text-justify tracking-wider">
                  Tailored feedback and one-on-one mentoring support early-career scholars, while deliberate inclusivity
                  ensures broad representation across regions, disciplines, and genders.
                </p>
              </li>
              <li>
                <p className="text-gray-600 text-justify tracking-wider">
                  Real-world impact is fostered by connecting academic theory to practice and policy through collaborative
                  dialogue, workshops, and case studies with researchers, practitioners, and policymakers.
                </p>
              </li>
            </ul>
          </div>
        </div >

        {/* for source video */}
        {/* <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
          <video
            src="/videos/conference.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full h-full rounded-lg"
          />
        </div> */}

        {/* for youtube video */}
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600">
          <div className="relative w-full aspect-video rounded-lg overflow-hidden">
            <iframe
              src={siteData.aboutTsmVideoLink}
              title="Conference Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          </div>
        </div>

      </div >
    </div>
  );
}
