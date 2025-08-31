import { siteData } from "@/data/data";
import Image from "next/image";

export default function AdvisoryBoard() {
    return (
        <section
            id="advisory-board"
            className="bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-green-600"
        >
            <h3 className="text-2xl font-bold text-gray-700 mb-6">
                Advisory Board
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
                {
                    siteData.advisoryBoardData.map((advisoryBoardDataItem, advisoryBoardDataIndex) => {
                        return (
                            <div key={`advisory_board_item_${advisoryBoardDataIndex}`} className="flex items-center space-x-4">
                                <Image
                                    src={advisoryBoardDataItem.image}
                                    alt={advisoryBoardDataItem.name}
                                    width={100}
                                    height={100}
                                    className="w-24 h-24 rounded-full shadow-lg"
                                />
                                <div>
                                    <h4 className="text-xl font-bold text-gray-800">
                                        {advisoryBoardDataItem.name}
                                    </h4>
                                    <p className="text-gray-600">
                                        {advisoryBoardDataItem.profession}, {advisoryBoardDataItem.university}
                                    </p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}