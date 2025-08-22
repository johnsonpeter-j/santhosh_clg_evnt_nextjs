"use client";
import { marqueeData } from "@/data/marquee";

export default function Marquee() {

    return (
        <>
            {/* 🔔 Marquee Section */}
            <div className="bg-gray-200 py-2 overflow-hidden">
                <div className="container mx-auto">
                    <div className="text-sm text-gray-800 font-medium whitespace-nowrap animate-marquee">
                        {
                            marqueeData.map((marqueeDataItem, marquee_data_index) => {
                                return (<span key={`marquee_data_item_${marquee_data_index}`} className="mr-6">
                                    [{marqueeDataItem.title}] {marqueeDataItem.description} 
                                    {marquee_data_index < marqueeData.length && <span className="ml-6">|</span>}
                                </span>)
                            })
                        }
                    </div>
                </div>
            </div>

        </>
    );
}
