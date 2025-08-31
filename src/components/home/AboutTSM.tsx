import { siteData } from "@/data/data";

export default function AboutTSM() {
  return (

    <div className="mt-4 mx-4">
      {/* Responsive Grid */}
      < div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12" >
        {/* About Conference Card */}
        < div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600 md:col-span-2" >
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            About TSM Madurai
          </h3>
          <p className="text-gray-600 text-justify">{siteData.aboutData[0].description}</p>
        </div >
        {/* for source video */}
        {/* <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500">
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
        <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-cyan-500">
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
