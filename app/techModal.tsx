import Image from "next/image";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export default function TechModal() {
  const techProjects = [
    {
      title: "Garden Plan",
      subTitle:"FullStack Project",
      desc: "This is a garden planner for New Zealanders.",
      link: "https://github.com/mussesseiniris/mygarden-planner",
      img: `${BASE}/images/projectsImg/gardenPlanner.png`,
      techStack:["Python","FastAPI","React","javaScript","Postgres"]
    },
    {
      title: "Learning Coach",
      desc: "This is an AI intergrated learning coach.",
      subTitle:"FullStack Project",
      link: "https://learning-coach-mussessein.zhefuz.link/",
      img: `${BASE}/images/projectsImg/learning-coach.png`,
      techStack:[".Net","C#","React","javaScript","Postgres","ClaudeAPI"]
    },
    {
      title: "AI Agent Benchmarking",
      subTitle:"FullStack Team Industry Project",
      desc: "This is an industry project with Raygun.",
      link: "https://github.com/mussesseiniris/AI-Agent-Benchmarking-Dashboard",
      img: `${BASE}/images/images/teckStack.png`,
      techStack:["Python","FastAPI","React","javaScript","Supabase","Autohive Server"]
    },
    {
      title: "Worker dataBlockChain",
      subTitle:"FullStack Team Industry Project",
      desc: "This is an industry project with FS.",
      link: "https://github.com/mussesseiniris/WorkerDataBlockchain",
      img: `${BASE}/images/projectsImg/workerdatablockchain.png`,
      techStack:[".Net","C#","React","Next.js","typeScript","Supabase"]
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-fit px-12 py-4 my-3 w-full">
      
      {/* white line  */}
       <h3 className="text-pink-200 font-bold mx-8 text-xl mb-6">
          Tech Projects
        </h3>
      <div className="z-[60] border-2 border-white px-14 py-14 flex flex-col items-center rounded-2xl w-full">
       

        <div className="flex flex-row gap-8 mx-0 flex-wrap ">
          {techProjects.map((r) => (
          
            <div
              key={r.title}
              className="flex flex-col border border-pink-200 art-shadow w-[280px] pink-200/60 py-8 px-6 rounded-xl hover:bg-pink-200/30 hover:shadow-lg cursor-pointer"
            >
              <div className="flex flex-col min-h-16 ">
         
              <h2 className="text-white px-2 py-1 font-bold text-lg self-start w-full ">{r.title}</h2>
              <p className="text-pink-300 px-2 pb-2 text-sm self-start w-full ">{r.subTitle}</p></div>
              
          
              <a href={r.link} target="_blank">
                <div className="w-60 h-40 overflow-hidden rounded-xl items-center">
                  <Image
                    src={r.img}
                    alt={r.title}
                    width={250}
                    height={200}
                    className="rounded-xl w-full h-full object-cover"
                  />
                </div>
              </a>
              <h2 className="text-black text-start text-sm px-2 py-1 whitespace-pre-line">
                {r.desc}
              </h2>
              <div className="flex row flex-wrap gap-2 items-center justify-center ">
              {r.techStack.map((t)=>(<div  key={t}><p className="bg-pink-200/30 rounded-lg p-1 text-xs">{t}</p></div>))}
                          </div></div>
          ))}
        </div>
      </div>
    </div>
  );
}
