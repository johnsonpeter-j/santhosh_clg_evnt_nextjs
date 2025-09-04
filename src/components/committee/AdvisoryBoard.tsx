import { siteData } from "@/data/data";
import Image from "next/image";

export default function AdvisoryBoard() {

    return (
        <section
            id="advisory"
            className="scroll-mt-20 mx-auto px-4 pt-8"
        >

            <div
                id="organizing-committee"
                className="bg-white rounded-lg shadow-md p-6 border-t-4 border-green-600"
            >
                <h3 className="text-2xl font-bold text-gray-700 mb-6">
                    Advisory Board
                </h3>
                <div className="mx-auto">
                    <ol className="list-decimal list-inside space-y-2">
                        {siteData.advisoryBoardData.map((prof, index) => (
                            <li key={`advisory_board_data_item_${index}`} className="text-base leading-relaxed tracking-wide">
                                {prof}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </section>
    )
}