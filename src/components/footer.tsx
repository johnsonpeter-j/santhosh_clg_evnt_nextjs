"use client";

import { footerData } from "@/data/footer";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-gray-300 p-8">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Left - About + Sitemap */}
                <div>
                    <h5 className="font-bold text-lg mb-2 text-white">
                        Thiagarajar School of Management
                    </h5>
                    <p className="text-sm">
                        &copy; 2026 Thiagarajar School of Management.<br/> -All rights reserved.
                    </p>

                    {/* Sitemap */}
                    <div className="mt-4">
                        <h5 className="font-bold text-md mb-1 text-white">Sitemap</h5>
                        <ul className="flex flex-wrap gap-x-4 text-sm">
                            {footerData.map((item) => (
                                <li key={item.id}>
                                    <Link
                                        href={`${item.id}`}
                                        className="hover:text-green-500 transition-colors"
                                    >
                                        {item.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Middle - Contact */}
                <div>
                    <h5 className="font-bold text-lg mb-2 text-white">Contact Us</h5>
                    {/* <p>
                        Conference Chairperson:{" "}
                        <a
                            href="mailto:chairperson@tsm.ac.in"
                            className="text-green-400 hover:text-green-500"
                        >
                            chairperson@tsm.ac.in 
                        </a>
                    </p> */}
                    <p>
                        For Any Queries:{" "}
                        <a
                            href="mailto:fos2026-grie@tsm.ac.in"
                            className="text-green-400 hover:text-green-500"
                        >
                            fos2026-grie@tsm.ac.in
                        </a>
                    </p>
                </div>

                {/* Right - Map */}
                <div className="h-48 rounded-lg overflow-hidden shadow-md">


                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.675275565825!2d78.08084787407627!3d9.87758677513109!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cfdcbf01d40b%3A0xb46d1ec9209ad297!2sThiagarajar%20School%20Of%20Management%20(TSM)%20Madurai!5e0!3m2!1sen!2sin!4v1757048955833!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    >

                    </iframe>
                    {/* <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.988018617306!2d78.07727197598813!3d9.896700073539958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c8227b409605%3A0x673400a40d5885c4!2sThiagarajar%20School%20of%20Management%20(TSM)!5e0!3m2!1sen!2sin!4v1699945532508!5m2!1sen!2sin"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe> */}
                </div>
            </div>
        </footer>
    );
}
