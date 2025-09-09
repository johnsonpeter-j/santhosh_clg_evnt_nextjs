import { siteData } from '@/data/data'
import React from 'react'

const PublicationOptions = () => {
  return (
     <section
          id="publication-options"
          className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8"
        >
          {/* Content Box */}
          <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
            <h3 className="text-xl font-bold text-gray-700 mb-2">
              Publication options
            </h3>
            <ol>
              {siteData?.Publicationoptions.map((content, i) => (
                <li
                  key={`full_paper_sub_item_${i}`}
                  className="ml-10 list-disc text-gray-600 leading-relaxed marker:text-green-600 marker:text-[16px]"
                >
                  {content?.content}
                </li>
              ))}
            </ol>
          </div>
        </section>


  )
}

export default PublicationOptions