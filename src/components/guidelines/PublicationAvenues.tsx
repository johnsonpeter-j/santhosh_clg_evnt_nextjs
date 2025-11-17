"use client";



export default function PublicationAvenue() {
 

  const EditorialBoard = [
     {
      name:"Dr. K. Mathiyazhagan",
      designation:"Head of the Research Centre & Professor, Thiagarajar School of Management, Madurai"
     },
     {
      name:"Dr. Isotilia Costa Melo",
      designation:"Assistant Professor, ICN Business School- Paris, France"
     },
     {
      name:"Dr. Veronica Scuotto ",
      designation:"Associate Professor Universita degli Studi di Napoli Federico II, Italy"
     },
     {
      name:"Dr. Nachiappan Subramanian",
      designation:"Professor, University of Sussex, United Kingdom Sussex House, Falmer, Brighton BN1 9RH"
     },
     {
      name:"Dr. Mohamed Saleem Haja Nazmudeen",
      designation:"Dean of Graduate Studies & Senior Assistant Professor, School of Business, University Teknologi Brunei, Brunei"
     },
     {
      name:"Dr. Ngo Nguyen Quynh Nhu",
      designation:"Lecturer - Faculty of Finance and Banking, Center for Application Economics Research (CAER), Ton Duc Thang University, Vietnam"
     },
     {
      name:"Dr. Deepak Mathivathanan",
      designation:"Chair – Research & publications, Loyola Institute of Business Administration, Chennai"
     },
     {
      name:"Dr. Bilal A. Pandow",
      designation:"Associate Professor, Bahrain Polytechnic"
     },
  ]

  return (
    <section
      id="editorial_board"
      className="scroll-mt-20 max-w-[1200px] mx-auto px-4 mb-4"
    >
      {/* Content Box */}
      <div className="bg-white rounded-lg shadow-md p-6 border-l-4 border-green-600 mx-auto mt-8">
        
         <h3 className="text-xl font-semibold mb-3">
            EDITORIAL BOARD
        </h3>
          <ul className=" list-inside space-y-2 mb-8">
          {EditorialBoard.map((item, index) => (
            <li key={index} className="text-gray-800 text-lg">
              <p className="font-semibold text-lg">{item.name}</p> 
              {item.designation}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
