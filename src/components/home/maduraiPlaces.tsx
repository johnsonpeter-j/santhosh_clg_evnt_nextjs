"use client";

import { siteData } from "@/data/data";
import Image from "next/image";


export default function Madurai() {

  return (
    <section
      id="discover-madurai"
      className="scroll-mt-20 bg-white rounded-lg shadow-md p-6 mb-12 border-t-4 border-green-600 mt-4 mx-4"
    >
      <h3 className="text-2xl font-bold text-gray-700 mb-4">Discover Madurai</h3>
      <p className="text-gray-600 mb-4">
        Madurai, the cultural capital of Tamil Nadu, is a city with a rich history and vibrant
        traditions. Known for its magnificent temples, bustling markets, and delicious cuisine,
        it is a city that offers a unique and unforgettable experience.
      </p>

      <a
        href="https://drive.google.com/file/d/1hfxOv9sPM8fLSDSnfQ2-F0aROYtQglfa/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43a047] transition-transform duration-300 hover:scale-105"
      >
        Download Tourist Guide
      </a>

      {/* Scrolling Image Carousel */}
      <div className="mt-6 overflow-hidden relative">
        <div className="flex animate-scroll gap-6">
          {siteData.maduraiPlaces.map((place, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-48 text-center"
            >
              <Image
                src={place.src}
                alt={place.title}
                width={200}
                height={150}
                className="w-48 h-32 object-cover rounded-lg shadow-md"
              />
              <p className="mt-2 text-sm text-gray-600 font-semibold">{place.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Tailwind keyframes for infinite scroll */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          width: max-content;
          animation: scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}
