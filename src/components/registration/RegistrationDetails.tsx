export default function RegistrationDetails() {
  return (
    <section
      id="registration-details"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 pt-8"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto">
        <h3 className="text-xl font-bold text-gray-700 mb-2">
          Registration Details
        </h3>

        {/* <ol>
          {
            siteData.registrationDetailsData.map((registrationDataItem, registrationDataIndex) => {
              return (<li key={`registration_data__item_${registrationDataIndex}`} className="ml-10 list-decimal text-gray-600 leading-relaxed marker:text-green-600 " dangerouslySetInnerHTML={{ __html: sanitizeHtml(registrationDataItem) }}></li>)
            })
          }
        </ol> */}
        <ol className=" px-4 mt-3">
          <li>
            <p className="text-gray-600 text-lg leading-relaxed">
              Submission is open to Research Scholars, Early-Career Faculty Members / Assistant Professors, and
              Postdoctoral Researchers.Scholars from disciplines such as Management, Engineering, Computer Science, Social Sciences, and
              Sustainability are welcome to submit.
            </p>
          </li>
          {/* <li>
            <p className="text-gray-600 leading-relaxed">
              Scholars from disciplines such as Management, Engineering, Computer Science, Social Sciences, and
              Sustainability are welcome to submit.
            </p>
          </li> */}
          {/* <li>
            <p className="text-gray-600 leading-relaxed">
              Conference Website: To be Updated Shortly
            </p>
          </li> */}
          <li>
            <p className="text-gray-600 text-lg leading-relaxed">
              Submission Link: To be Updated Shortly
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
