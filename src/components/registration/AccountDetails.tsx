import { siteData } from "@/data/data";
import Image from "next/image";

export default function AccountDetails() {
  return (
    <>
      {/* Payments Header */}
      <div className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8">
        <p className="text-xl font-bold text-gray-700 mb-2">Payments</p>
      </div>

      <section
        id="account-details"
        className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8 mb-4"
      >
        {/* Indian Participants */}
        <div className="bg-white flex flex-wrap justify-between rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Account details (For Indian Participants only)
            </h3>

            <ul>
              {siteData.accountDetails.indian.map((account, index) => (
                <li
                  key={`indian_${index}`}
                  className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
                >
                  <p className="inline font-semibold text-lg">
                    {account.title}
                  </p>{" "}
                  {account.content}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Image
              width={180}
              height={35}
              src="/images/paymentImg.jpg"
              alt="pay"
            />
          </div>
        </div>

        {/* Foreign Participants */}
        <div className="bg-white flex flex-wrap justify-between rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto mb-6">
          <div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Account details (For Foreign Participants only)
            </h3>

            <ul>
              {siteData.accountDetails.foreign.map((account, index) => (
                <li
                  key={`foreign_${index}`}
                  className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
                >
                  <p className="inline font-semibold text-lg">
                    {account.title}
                  </p>{" "}
                  {account.content}
                </li>
              ))}
            </ul>
          </div>

          {/* <div>
            <Image
              width={180}
              height={35}
              src="/images/paymentImg.jpg"
              alt="pay"
            />
          </div> */}
        </div>
      </section>
    </>
  );
}
