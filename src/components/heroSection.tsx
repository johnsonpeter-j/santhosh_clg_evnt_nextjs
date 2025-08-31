"use client";

import Image from "next/image";

export default function HeroBanner() {
  return (
    <section id="home" className="w-full mb-12">
      <div className="bg-gray-100 shadow-xl overflow-hidden">
        {/* Hero Content */}
        <div className="relative h-96 flex items-center justify-center text-white bg-gradient-to-r from-green-600 to-green-600">
          <div className="relative text-center mx-auto">
            {/* Logo */}
            <Image
              src={"/images/hero.jpg"} // place your image in /public/2.jpg
              alt="FOS 2026-IRGR Logo"
              width={300}
              height={300}
              className="mx-auto mb-4 shadow-lg rounded"
            />

            {/* Title */}
            <p className="text-lg md:text-2xl font-light">
              International Conference on{" "}
              <span className="font-semibold">Frontiers of Sustainability</span>
              – Global Responsibility for Innovation &amp; Entrepreneurship
            </p>

            {/* Date */}
            <p className="text-xl md:text-2xl font-light mt-2">
              22nd – 24th January 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
