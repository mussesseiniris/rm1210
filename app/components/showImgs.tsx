"use client";
import { useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

type Album = {
  title: string;
  desc: string;
  year: string;
  catogary:string;
  imgs: { src: string; desc: string }[];
};

export default function ShowImgs({
  Album,
  onClose,
}: {
  Album: Album;
  onClose: () => void;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleNext() {
    if (currentIndex < Album.imgs.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  }
  function handlePrevious() {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(Album.imgs.length - 1);
    }
  }

  return (
    <div className="w-full ">
      <div className="inset-0 z-[100] fixed flex flex-col items-center justify-center bg-black/80 p-10 h-full w-full">
        <div className="bg-black/20 rounded-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto px-10 pb-16 pt-10">
          <div className="flex justify-end">
            <button className="pr-4 text-lg" onClick={() => onClose()}>
              x
            </button>
          </div>
          <div>
            <h3 className="flex self-start text-pink-300 text-xl px-4 py-4">
              {Album.catogary}
            </h3>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-cente gap-10">
            <div className="relative w-full md:w-2/3 h-[250px] md:h-[500px] bg-white/5 rounded-xl">
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 opacity-50 hover:opacity-100 px-2 py-2 rounded-xl"
                onClick={() => handlePrevious()}
              >
                <CircleChevronLeft size={36} />
              </button>
              <div className="max-h-[50vh] md:max-h-[70vh]">
                <img
                  src={Album.imgs[currentIndex].src}
                  alt="current"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 opacity-50 hover:opacity-100 px-2 py-4 rounded-xl"
                onClick={() => handleNext()}
              >
                <CircleChevronRight size={36} />
              </button>
            </div>
            <div className="flex flex-col w-full md:w-1/3">
            <p className="py-8 mb-12 text-pink-200 text-xl">{Album.title}</p>
              <p className="flex self-start py-4 px-5 text-base bg-pink-400/40">
                {Album.desc}
              </p>
              <div className="border-l-4 border-pink-400/70 px-5 bg-white/5 py-5 my-6">
                <p className="text-white text-base">{Album.imgs[currentIndex].desc}</p>
              </div>
              <div className="flex gap-16">
                <span className="text-pink-400 font-bold">Year:</span>
                <span className="text-white">{Album.year}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
