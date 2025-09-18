import { siteData } from '@/data/data'
import React from 'react'

const InternalOrganizeCommitee = () => {
  return (
   <section id="advisory" className="scroll-mt-20 mx-auto px-4 pt-8">
         <div
           id="internal_organizing_committee"
           className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"
         >
           <h3 className="text-2xl font-bold text-gray-700 mb-6">
            Internal Organizing Committee

           </h3>
           <div className="mx-auto">
             <ol className=" list-inside space-y-2">
               {siteData.Internal_Organizing_Committee.map((prof, index) => (
                 <li
                   key={`advisory_board_data_item_${index}`}
                   className="text-lg font-semibold leading-relaxed tracking-wide"
                 >
                   {prof.name}
                   <p className="inline ms-2 font-light">{prof.location}</p>
                 </li>
               ))}
             </ol>
           </div>
         </div>
         <div
         
           className="bg-white rounded-lg shadow-md p-6 mt-7 border-t-4 border-green-600"
         >
           <p className="text-lg text-center font-semibold text-gray-600 mb-1">
             Co-Organized by Faculty of Thiagarajar School of Management
           </p>
         </div>
       </section>
  )
}

export default InternalOrganizeCommitee