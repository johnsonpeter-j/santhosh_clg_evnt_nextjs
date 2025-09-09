export default function DayWiseSchedule() {
  return (
    <section id="schedule" className="scroll-mt-20 mx-auto px-4 py-8 mb-4">
      {/* Section Title */}
      <h2 className="section-title text-4xl font-bold text-center mb-10">
        Day Wise Schedule
      </h2>

      <div className="w-full flex justify-center items-center">
        {/* <Image
          src={siteData.dayWiseScheduleImagePath}
          alt="venue"
          width={0}
          height={0}
          sizes="100vw"
          className="w-10/12 object-cover h-1/2  rounded-lg"
        /> */}

        <div className="overflow-x-auto p-4">
          <table className="table-auto border-collapse border border-gray-400 w-full text-sm">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th
                  colSpan={6}
                  className="border border-gray-400 p-5 text-center lg:text-xl text-sm"
                >
                  International Conference on Frontiers of Sustainability-
                  Global Responsibility for Innovation &amp; Entrepreneurship
                  FOS 2026-GRIE
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="border text-lg border-gray-400 p-2">
                  Time Slot
                </th>
                <th colSpan={2} className="border text-lg border-gray-400 p-2">
                  {/* Day 1<br /> */}
                  Session Room{" "}
                </th>
                {/* <th className="border text-base border-gray-400 p-2">Day 1<br />Session Room B</th> */}
                <th colSpan={2} className="border text-lg border-gray-400 p-2">
                  {/* Day 2<br /> */}
                  Session Room
                </th>
                {/* <th className="border border-gray-400 p-2">
                  Day 3<br />
                  Session Room
                </th> */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border text-lg border-gray-400 bg-white p-2">
                  9:30 AM to 10:30 AM
                </td>
                <td
                  className="bg-purple-300 text-lg text-center border border-gray-400 p-2"
                  colSpan={2}
                >
                  FOS Release &amp; Inaugural Address
                </td>
                <td className="bg-cyan-200 text-lg border border-gray-400 p-2">
                  Guest Speaker Session <br />
                 
                </td>
                <td className="bg-green-200 text-lg border border-gray-400 p-2">
                  Guest Speaker Session <br />
                 
                </td>
              </tr>
              <tr>
                <td className="border text-lg border-gray-400 p-2 bg-white">
                  10:30 AM to 10:45 AM
                </td>
                <td
                  colSpan={4}
                  className="bg-gray-100 text-lg border border-gray-400 p-2 text-center"
                >
                  Hi-Tea
                </td>
              </tr>
              <tr>
                <td className="border text-lg border-gray-400 p-2 bg-white">
                  10:45 AM to 12:00 PM
                </td>
                <td
                  colSpan={2}
                  className="bg-red-200 text-lg border border-gray-400 text-center p-2"
                >
                  Keynote Address
                </td>
                <td
                  rowSpan={2}
                  className="bg-blue-200 text-lg border border-gray-400 p-2"
                >
                  Research
                   Pitch / Doctoral Colloquium <br />
                  offline/ Online <br />
                  (National level)
                </td>
                <td
                  rowSpan={2}
                  className="bg-blue-200 text-lg border border-gray-400 p-2"
                >
                  Conference Presentation
                  <br />
                  offline/ online
                </td>
              </tr>

              <tr>
                <td className="border text-lg border-gray-400 p-2 bg-white">
                  12:20 PM to 1.00 PM
                </td>
                <td
                  colSpan={2}
                  className="bg-red-200 text-lg border border-gray-400 text-center p-2"
                >
                  Invited Session 
                </td>
                {/* <td className="bg-blue-200 border border-gray-400 p-2">
                  Conference Presentation
                  <br />
                  Offline/Online (National level)
                </td>
                <td className="bg-blue-200 border border-gray-400 p-2">
                  Conference Presentation
                  <br />
                  Offline/Online
                </td> */}
              </tr>

              <tr>
                <td className="border text-lg border-gray-400 p-2 bg-white">
                  1.00 PM to 1.30 PM
                </td>
                <td
                  colSpan={4}
                  className="bg-gray-100 text-lg border border-gray-400 p-2 text-center"
                >
                  Networking Lunch
                </td>
              </tr>
              <tr>
                <td className="border text-lg border-gray-400 p-2 bg-white">
                  1:30 PM to 3.00 PM
                </td>
                <td
                  colSpan={2}
                  className="bg-green-300 text-lg border border-gray-400 p-2 text-center"
                >
                  Meet the Editors Modertor
                  
                </td>
                {/* <td className="border border-gray-400 p-2"></td> */}
                <td className="bg-indigo-200 text-lg border border-gray-400 p-2">
                  Meta-Analysis and Systematic Review
                 
                </td>
                <td className="bg-indigo-200 text-lg border border-gray-400 p-2">
                  Conference Presentation
                  <br />
                  offline/ online
                </td>
              </tr>
              <tr>
                <td className="border text-lg border-gray-400 p-2 bg-white">
                  3.00 PM to 3:30 PM
                </td>
                <td
                  colSpan={4}
                  className="bg-gray-200 text-lg border border-gray-400 p-2 text-center"
                >
                  Networking
                </td>
              </tr>
              <tr>
                <td className="border text-lg border-gray-400 p-2 bg-white">
                  3:30 PM to 5.00 PM
                </td>
                <td
                  colSpan={2}
                  className="bg-pink-300 text-lg text-center border border-gray-400 p-2"
                >
                  Advanced Multivariate Analysis &amp; SEM <br />
                  Session Speaker
                </td>
                <td className="bg-blue-100 text-lg border border-gray-400 p-2">
                  Research  Pitch / Doctoral Colloquium <br />
                  offline/ Online
                  <br />
                  (National level)
                  <br /> (3.30 PM-4.30 PM)
                </td>
                <td className="bg-cyan-100 text-lg border border-gray-400 p-2">
                  Conference Presentation
                  <br />
                  offline/ online  <br />
                  (3.30 PM-4.30 PM)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
