import { siteData } from "@/data/data";
import Image from "next/image";

export default function DayWiseSchedule() {
  return (
    <section
      id="schedule"
      className="scroll-mt-20 mx-auto px-4 py-8 mb-4"
    >
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
                <th colSpan={6} className="border border-gray-400 p-5 text-center lg:text-xl text-sm">
                  International Conference on Frontiers of Sustainability - Global Responsibility for Innovation & Entrepreneurship FOS 2026 - GRIE
                </th>
              </tr>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Time Slot</th>
                <th className="border border-gray-400 p-2">Day 1<br />Session Room A</th>
                <th className="border border-gray-400 p-2">Day 1<br />Session Room B</th>
                <th className="border border-gray-400 p-2">Day 2<br />Session Room</th>
                <th className="border border-gray-400 p-2">Day 3<br />Session Room</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td className="border border-gray-400 bg-white p-2">9:30 AM to 10:50 AM</td>
                <td className="bg-purple-300 text-center border border-gray-400 p-2" colSpan={2}>Inauguration and Keynote Address</td>
                <td className="bg-cyan-200 border border-gray-400 p-2">Guest Speaker Session<br />(Based on FOS 2026)</td>
                <td className="bg-green-200 border border-gray-400 p-2">Guest Speaker Session<br />(Based on trends in Sustainability)</td>
              </tr>
              {/* <tr>
                <td className="border border-gray-400 p-2 bg-white">10:50 AM to 11:00 AM</td>
                <td colSpan={4} className="bg-yellow-200 border border-gray-400 p-2 text-center">Hi-Tea</td>
              </tr> */}
              <tr>
                <td className="border border-gray-400 p-2 bg-white">11:00 AM to 12:30 PM</td>
                <td colSpan={2} className="bg-red-200 border border-gray-400 text-center p-2">Meet the Editors</td>
                <td className="bg-blue-200 border border-gray-400 p-2">Conference Presentation<br />Offline/Online (National level)</td>
                <td className="bg-blue-200 border border-gray-400 p-2">Conference Presentation<br />Offline/Online</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 bg-white">12:45 PM to 1:30 PM</td>
                <td colSpan={4} className="bg-gray-100 border border-gray-400 p-2 text-center">Networking Lunch</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 bg-white">1:30 PM to 2:45 PM</td>
                <td colSpan={2} className="bg-green-300 border border-gray-400 p-2 text-center">Meta-Analysis and Systematic Review</td>
                {/* <td className="border border-gray-400 p-2"></td> */}
                <td className="bg-indigo-200 border border-gray-400 p-2">Conference Presentation<br />Offline/Online</td>
                <td className="bg-indigo-200 border border-gray-400 p-2">Conference Presentation<br />Offline/Online</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 bg-white">2:45 PM to 3:00 PM</td>
                <td colSpan={4} className="bg-gray-200 border border-gray-400 p-2 text-center">Break / Transition</td>
              </tr>
              <tr>
                <td className="border border-gray-400 p-2 bg-white">3:00 PM to 4:15 PM</td>
                <td colSpan={2} className="bg-pink-300 text-center border border-gray-400 p-2">Advanced Multivariate Analysis & SEM<br />Session Speaker:</td>
                <td className="bg-blue-100 border border-gray-400 p-2">TSM campus tour</td>
                <td className="bg-cyan-100 border border-gray-400 p-2">Valedictory</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}
