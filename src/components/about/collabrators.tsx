import Image from "next/image";

export default function Collaborators() {

    const collabtaorData = [
        {
            name: "ICN Business School, France",
            desc: "A French Business School known for its interdisciplinary ATM approach and triple crown accreditation.",
            img: "https://placehold.co/240x240/BCAAA4/FFF.png?text=ICN+Business+School",
        },
        {
            name: "Universita Delgi Studi Di Napoli Federico II, Italy",
            desc: "One of the world’s oldest academic institutions promoting extensive research activities.",
            img: "https://placehold.co/240x240/BCAAA4/FFF.png?text=Universita+Delgi+Studi+Di+Napoli",
        },
        {
            name: "University of Sussex, United Kingdom",
            desc: "A public research university recognized for its research excellence and teaching quality.",
            img: "https://placehold.co/240x240/BCAAA4/FFF.png?text=University+of+Sussex",
        },
        {
            name: "Universiti Teknologi Brunei, Brunei",
            desc: "An Engineering and Technology University with a five-star QS ranking.",
            img: "https://placehold.co/240x240/BCAAA4/FFF.png?text=Universiti+Teknologi+Brunei",
        },
    ]

    return (
        <div className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-[#00BCD4]">
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Collaborating Institutions
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                {collabtaorData.map((c, i) => (
                    <div key={i} className="flex flex-col items-center">
                        <Image
                            src={c.img}
                            alt={c.name}
                            width={120}
                            height={120}
                            className="h-24 w-auto mb-2 shadow-md"
                        />
                        <h4 className="text-lg font-bold text-gray-800">{c.name}</h4>
                        <p className="text-gray-600 text-sm">{c.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}