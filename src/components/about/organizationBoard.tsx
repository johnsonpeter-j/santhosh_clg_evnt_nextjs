// import Image from "next/image";

export default function OrganizationBoard() {
    const organizationBoardData = [
        {
            src: "/images/9.webp",
            name: "Dr. Murali Sambasivan",
            role: "Chief Patron & Professor",
            place: "Thiagarajar School of Management, Madurai",
        },
        {
            src: "/images/10.webp",
            name: "Dr. M. Selvalakshmi",
            role: "Patron & Professor",
            place: "Thiagarajar School of Management, Madurai",
        },
        {
            src: "/images/11.webp",
            name: "Dr. K. Mathiyazhagan",
            role: "Conference Chairperson",
            place: "Head of Research Centre & Professor, TSM",
        },
        {
            src: "https://placehold.co/250x250/BCAAA4/FFF?text=Dr.+Isotilia",
            name: "Dr. Isotilia Costa Melo",
            role: "Assistant Professor",
            place: "ICN Business School- Paris, France",
        },
        {
            src: "https://placehold.co/250x250/BCAAA4/FFF?text=Dr.+Veronica",
            name: "Dr. Veronica Scuotto",
            role: "Second-Tier Tenured Professor",
            place: "Universita Delgi Studi Di Napoli Federico II, Italy",
        },
        {
            src: "https://placehold.co/250x250/BCAAA4/FFF?text=Dr.+Nachiappan",
            name: "Dr. Nachiappan Subramanian",
            role: "Professor",
            place: "University of Sussex, United Kingdom",
        },
        {
            src: "https://placehold.co/250x250/BCAAA4/FFF?text=Dr.+Mohamed",
            name: "Dr. Mohamed Saleem Haja Nazmudeen",
            role: "Dean of Graduate Studies & Senior Assistant Professor",
            place: "Universiti Teknologi Brunei, Brunei",
        },
    ]
    return (
        <section
            id="organizing-committee"
            className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-[#00BCD4]"
        >
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Organizing Committee
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
                {organizationBoardData.map((member, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center">
                        {/* <Image
                                src={member.src}
                                alt={member.name}
                                width={128}
                                height={128}
                                className="w-32 h-32 rounded-full mb-2 shadow-lg"
                            /> */}

                        <img
                            src={member.src}
                            alt={member.name}
                            className="w-32 h-32 rounded-full mb-2 shadow-lg"
                        />
                        <h4 className="text-xl font-bold text-gray-800">{member.name}</h4>
                        <p className="text-sm font-semibold text-gray-600 mb-1">
                            {member.role}
                        </p>
                        <p className="text-gray-600 text-sm">{member.place}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}