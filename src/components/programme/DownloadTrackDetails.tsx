"use client";

export default function DownloadTrackDetails({ title, path, fileName }: { title: string, path: string, fileName: string }) {
  return (
    <div className="mt-3 w-full flex justify-center">
      <a
        href={path}
        download={fileName} // ensures file downloads instead of opening
        className="inline-block bg-[#4CAF50] text-white font-bold py-2 px-6 rounded-full hover:bg-[#43a047] transition-transform duration-300 hover:scale-105"
      >
        {title}
      </a>
    </div>
  );
}
