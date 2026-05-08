"use client";
import { useState } from "react";
import ShowImgs from "./components/showImgs";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function PaintingModal() {
  const [selectedAlbum, setSelectedAlbum] = useState<(typeof albums)[0] | null>(
    null,
  );

  const albums = [
    {
      title: "Zhushan Lake Landscaping & Supporting Facilities Project",
      catogary:"Landscape design",
      desc: "Acted as Project Leader for Zhushan Lake Landscaping & Supporting Facilities Project. Coordinated multi-disciplinary teams to deliver 2.3 million square meter lakeside green space design. Total investment: RMB 228 million.",
      year: "2020-2022",
      imgs: [
        {
          src: `${BASE}/images/images/zhushan_design.png`,
          desc: "Design Concept",
        },
        { src: `${BASE}/images/images/zhushanLake.png`, desc: "Master plan" },
        {
          src: `${BASE}/images/images/zhushan_Currentphotoes.png`,
          desc: "Site photos before renovation",
        },
        { src: `${BASE}/images/images/zhushan_rendering1.png`, desc: "Rendering" },
        { src: `${BASE}/images/images/zhushan_birdview.png`, desc: "Bird's-eye view" },
      ],
    },
    {
      title: "Baoji Community Park Landscape Design",
      catogary:"Landscape design",
      desc: "This is the landscape design proposal for a community park in Baoji City.",
      year: "2024",
      imgs: [
        {
          src: `${BASE}/images/images/bj07.png`,
          desc: "Master Plan",
        },
        { src: `${BASE}/images/images/bj01.png`, desc: "Background Research" },
        { src: `${BASE}/images/images/bj02.png`, desc: "Design Strategy" },
        { src: `${BASE}/images/images/bj03.png`, desc: "Design Strategy" },
        { src: `${BASE}/images/images/bj05.png`, desc: "Design Scheme" },
        { src: `${BASE}/images/images/bj06.png`, desc: "Design Scheme" },
        { src: `${BASE}/images/images/bj00.png`, desc: "Background Research" },
        { src: `${BASE}/images/images/bj08.png`, desc: "Elevation" },
      ],
    },
    {
      title: "Conceptual Proposal for the Ecological Restoration and Environmental Enhancement Project of the Yangtze River Waterfront in Junshan New Town",
      catogary:"Landscape design",
      desc: "The proposed project is located on the left bank of the Yangtze River at the Junshan section, with a total length of approximately 11 kilometres and a total implementation area of 2,217,612 square metres.",
      year: "2023-2024",
      imgs: [
        {
          src: `${BASE}/images/images/js1.png`,
          desc: "Background Research",
        },
        { src: `${BASE}/images/images/js_concept.png`, desc: "Design Concept" },
        { src: `${BASE}/images/images/jscp.png`, desc: "Master Plan" },
        { src: `${BASE}/images/images/jsjt.png`, desc: "Route Organisation Analysis Diagram" },
        { src: `${BASE}/images/images/jsxgt.png`, desc: "Rendering" },
      ],
    },
    {
      title:
        "Sponge City Renovation Project (EPC) - Second Batch of 17 Residential Compounds in Tangxun Lake Area",
        catogary:"Landscape design",
      desc: "Served as Landscape Discipline Leader for Sponge City Renovation Project (EPC) - Second Batch of 17 Residential Compounds in Tangxun Lake Area. Project investment: approximately RMB 700 million. Coordinated landscape team to collaborate with drainage specialists in completing preliminary design and construction drawing design.",
      year: "2023",
      imgs: [
        { src: `${BASE}/images/images/hm1.png`, desc: "Master Plan" },
        { src: `${BASE}/images/images/hm2.png`, desc: "Detailed Construction Drawings" },
        { src: `${BASE}/images/images/hm3.png`, desc: "Plant Design Table" },
      ],
    },
    {
      title: "Landscape Photoes",
      catogary:"Photography",
      desc: "Out with my camera, looking for birds and light — sun, moon, and the things that move through the sky.",
      year: "2022-2024",
      imgs: [
        {
          src: `${BASE}/images/images/photoBirdnz01.jpg`,
          desc: "",
        },
        {
          src: `${BASE}/images/images/photoBird01.jpg`,
          desc: "Pterorhinus sannio | White-browed Laughingthrush",
        },
        {
          src: `${BASE}/images/images/photoBird02.jpg`,
          desc: "Eophona migratoria | Chinese Grosbeak",
        },
        {
          src: `${BASE}/images/images/photoBird03.jpg`,
          desc: "Egret",
        },
        {
          src: `${BASE}/images/images/photoBirdnz02.jpg`,
          desc: "California quail | Tikaokao",
        },
        {
          src: `${BASE}/images/images/photoBird05.jpg`,
          desc: "Prosthemadera novaeseelandiae | Tūī",
        },
         {
          src: `${BASE}/images/images/photoBirds.jpg`,
          desc: "migratory birds",
        },
              {
          src: `${BASE}/images/images/photoBirds2.jpg`,
          desc: "migratory birds",
        },
              {
          src: `${BASE}/images/images/photographyMoon.jpg`,
          desc: "Moon",
        },
               {
          src: `${BASE}/images/images/photoMoon.jpg`,
          desc: "Eclipse",
        },
                 {
          src: `${BASE}/images/images/photoSunset.jpg`,
          desc: "Sunset",
        }
      ],
    },
    {
      title: "Digital & watercolor painting",
      catogary:"Painting",
      desc: "Watercolor and digital paintings made in the in-between hours — a slower, quieter kind of making.",
      year: "2022-2024",
      imgs: [
        {
          src: `${BASE}/images/images/pink.jpg`,
          desc: "Garden",
        },
        {
          src: `${BASE}/images/images/painting_procreatblack.jpg`,
          desc: "Swirl",
        },
          {
          src: `${BASE}/images/images/girl.png`,
          desc: "The Night Is Short, Walk On Girl",
        },
        {
          src: `${BASE}/images/images/painting_procreatCat.jpg`,
          desc: "Cat",
        },
        {
          src: `${BASE}/images/images/painting_procreatPeople.jpg`,
          desc: "Girl",
        },
        {
          src: `${BASE}/images/images/watercolorMatisse.jpg`,
          desc: "Matisse",
        },
        {
          src: `${BASE}/images/images/paintingSolaris.jpg`,
          desc: "Solaris",
        },
        {
          src: `${BASE}/images/images/watercolor.jpg`,
          desc: "Centaurea cyanus | Cornflower",
        },
        {
          src: `${BASE}/images/images/watercolor02.jpg`,
          desc: "Spirited Away",
        },
          {
          src: `${BASE}/images/images/snoopy.png`,
          desc: "Snoopy",
        },
      ],
    },
  ];

  return (
    <div>
      {selectedAlbum && (
        <ShowImgs
          Album={selectedAlbum}
          onClose={() => setSelectedAlbum(null)}
        />
      )}
      <div className="flex items-center justify-center">
      <h3 className="text-pink-200 font-bold mx-8 mb-0 text-xl pt-12">
            Design Work
          </h3></div>
      <div className="flex flex-col items-center justify-center h-fit w-full px-4 md:px-12 py-0 my-6">
        <div className="z-[60] border-2 border-white px-14 py-14 flex flex-col items-center rounded-2xl w-full">


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-6">
            {albums.map((a) => (
              <div
                key={a.title}
                className="relative group h-80 overflow-hidden flex flex-col bg-gradient-to-b from-transparent to-blue-950/70  art-shadow rounded-xl"
              >
                <img
                  src={a.imgs[0].src}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-pink-200/50 to-sky-950/70 opacity-0 group-hover:opacity-100 group-hover:shadow-lg flex flex-col items-start justify-end p-6">
                  <h3 className="text-xl pb-2">{a.catogary} </h3>
                  <p className="text-white/80 text-base">{a.title}·{a.year}</p>
                  <button
                    className="text-pink-300 hover:text-blue-300 cursor-pointer"
                    onClick={() => setSelectedAlbum(a)}
                  >
                    View details →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
