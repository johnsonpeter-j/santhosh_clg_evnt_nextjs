import { siteData } from "@/data/data";

// components/ConferenceTracks.tsx
export default function ConferenceTracks() {
  return (
    <section
      id="tracks"
      className="scroll-mt-20 mx-auto px-4 py-8 mb-12"
    >
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">
        Conference Tracks
      </h2>

      {/* Tracks Grid */}
      <div id="track-details" className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 px-5">
        {siteData.conferenceTracks?.map((track, idx) => (
          <div
            key={idx}
            className="flex flex-col bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-md font-bold text-gray-500  mb-2">
              Track {idx + 1} <span className="text-gray-700"><br />{track.title}</span>
            </h3>
            <ul className="list-disc p-3">
              {track.desc.map((item, index) =>
                <li key={index}>
                  <p className="text-gray-600 text-sm leading tracking-wide">
                    {item}
                  </p>
                </li>
              )}
            </ul>
            


            {/* Push this to the bottom */}
            <div className="mt-auto flex gap-3">
              <p>For more details  <a className="underline" href={track.path}>Link</a></p>
              {/* <DownloadTrackDetails title={`See More`} path={track.path} fileName={track.fileName} /> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
