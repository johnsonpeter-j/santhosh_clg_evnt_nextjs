import React from "react";

const Connectivity = () => {
  return (
    <section
      id="connectivity"
      className="scroll-mt-20 max-w-[1200px] mt-3 mx-auto px-4 py-6"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">Connectivity</h3>

        <ol>
          <li className="ml-10 list-disc text-gray-600 leading-relaxed text-lg marker:text-green-600 marker:text-[20px]">
           <strong> Madurai airport -</strong> 8 kms from Thiagarajar School of Management .
          </li>
          <li className="ml-10 list-disc text-gray-600 leading-relaxed text-lg marker:text-green-600 marker:text-[20px]">
          <strong> Madurai railway station - </strong> 8 kms from Thiagarajar School of Management .
          </li>
        </ol>
      </div>
    </section>
  );
};

export default Connectivity;
