import { siteData } from "@/data/data";

export default function PaymentInfo() {
  return (
    <section
      id="payment"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8 mb-4"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Registration Fee (Includes tax)
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300 text-left text-sm">
            <thead className="bg-gray-100">
              <tr>
                <th className="border border-gray-300 px-4 py-2"></th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Early Bird <br />
                  (Before 31/12/2025)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Indian Participants
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  Early Bird for International Participants
                  <br /> (Before 31/12/2025)
                </th>
                <th className="border border-gray-300 px-4 py-2 text-center">
                  International Participants
                </th>
              </tr>
            </thead>
            <tbody>
              {siteData.paymmentInfoDetails.map((row, index) => (
                <tr key={index} className="odd:bg-white even:bg-gray-50">
                  {siteData.paymmentInfoDetails.length - 1 === index ? (
                    <>
                      <td
                        colSpan={5}
                        className="border mx-auto border-gray-300 px-4 py-2 font-semibold"
                      >
                        {row.category}
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="border border-gray-300 px-4 py-2 font-semibold">
                        {row?.category}</td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row?.EarlyBirdInd}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row?.indian}
                      </td>
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row?.EarlyBirdNat}
                      </td>
                      
                      <td className="border border-gray-300 px-4 py-2 text-center">
                        {row?.international}
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
