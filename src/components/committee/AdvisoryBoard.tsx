import { siteData } from "@/data/data";

export default function AdvisoryBoard() {
  return (
    <section id="advisory" className="scroll-mt-20 mx-auto px-4 pt-8">
      <h3 className="text-2xl font-bold text-gray-700 mb-6">
        Conference Advisory Committee
      </h3>
      <div
        id="organizing-committee"
        className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"
      >
        {/* <div className="mx-auto">
          <ol className=" list-inside space-y-2">
            {siteData.advisoryBoardData.map((prof, index) => (
              <li
                key={`advisory_board_data_item_${index}`}
                className="text-lg font-semibold leading-relaxed tracking-wide"
              >
                {prof.name}
                <p className="inline ms-2 font-light">{prof.location}</p>
              </li>
            ))}
          </ol>
        </div> */}
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="overflow-x-auto border border-gray-300   bg-white  rounded-lg shadow-sm">
              <table className="min-w-full divide-y ">
                {/* <thead className="bg-white text-left">
              <tr className="divide-gray-300 border border-gray-300">
                <th
                  scope="col"
                  className="px-4 py-3 font-semibold  text-lg text-gray-700"
                >
                  International Reviewer
                </th>
                <th
                  scope="col"
                  className="px-4 py-3  text-lg font-semibold text-gray-700"
                >
                  Affiliation
                </th>
              </tr>
            </thead> */}

                <tbody className="bg-white border border-gray-300 divide-y  ">
                  {siteData.advisoryBoardData.map((r, idx) => (
                    <tr
                      key={r.id}
                      className={`${
                        idx % 2 === 0 ? "bg-white" : "bg-gray-50 "
                      }    border border-gray-300`}
                    >
                      <td className="px-4 py-4 whitespace-normal text-base  align-top">
                        <div className="flex items-start gap-3">
                          <div className="">
                            <div
                              style={{ textAlign: "left" }}
                              className="font-medium text-lg"
                            >
                              {r.name}
                            </div>
                          </div>
                        </div>
                      </td>

                      <td className="px-4 py-4  ">
                        <div
                          style={{ textAlign: "left" }}
                          className="text-lg  break-words"
                        >
                          {r.location}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* <div
      
        className="bg-white rounded-lg shadow-md p-6 mt-7 border-t-4 border-green-600"
      >
        <p className="text-lg text-center font-semibold text-gray-600 mb-1">
          Co-Organized by Faculty of Thiagarajar School of Management
        </p>
      </div> */}
    </section>
  );
}
