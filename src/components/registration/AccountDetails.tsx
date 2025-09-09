import { siteData } from "@/data/data";

export default function AccountDetails() {
  return (
    <section
      id="account-details"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8 mb-4"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
         Account details (For Indian Participants only)
        </h3>

      
      <ul>
               {siteData.accountDetails.map(
                 (account, index) => {
                   return (
                     <li
                       key={index}
                       className="ml-10 list-disc  text-gray-600 leading-relaxed marker:text-green-600 marker:text-[20px]"
                     >
                       <p className="inline font-semibold text-lg">{account?.title}</p> {account.content}
                     </li>
                   );
                 }
               )}
             </ul>
      </div>
    </section>
  );
}
