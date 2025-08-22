import Image from "next/image";

export default function AdvisoryBoard() {
    return (
        <section
            id="advisory-board"
            className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-[#00BCD4]"
        >
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Advisory Board
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-center space-x-4">
                    <Image
                        src="https://placehold.co/100x100/BCAAA4/FFF.png?text=Dr.+P.A.J."
                        alt="Dr. Paulo Nocera Alves Junior"
                        width={100}
                        height={100}
                        className="w-24 h-24 rounded-full shadow-lg"
                    />
                    <div>
                        <h4 className="text-xl font-bold text-gray-800">
                            Dr. Paulo Nocera Alves Junior
                        </h4>
                        <p className="text-gray-600">
                            Associate Professor, Catholic University of the North
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}