import { Doto } from "next/font/google";
const doto = Doto({
  subsets: ["latin"],
  weight: "400",
});
export default function Introduction() {
  const icons = [
    { src: "/images/icons/csharp.svg", name: "csharp" },
    { src: "/images/icons/dotnet.svg", name: "dotnet" },
    { src: "/images/icons/git.svg", name: "git" },
    { src: "/images/icons/github_light.svg", name: "github" },
    { src: "/images/icons/gitlab.svg", name: "gitlab" },
    { src: "/images/icons/java.svg", name: "java" },
    { src: "/images/icons/javascript.svg", name: "javascript" },
    { src: "/images/icons/nextjs_logo_light.svg", name: "nextjs" },
    { src: "/images/icons/python.svg", name: "python" },
    { src: "/images/icons/react_wordmark_light.svg", name: "react" },
    { src: "/images/icons/typescript.svg", name: "typescript" },
    { src: "/images/icons/vite.svg", name: "vite" },
    { src: "/images/icons/cursor_wordmark_light.svg", name: "Cursor" },
    { src: "/images/icons/claude-ai-wordmark-icon_light.svg", name: "Claude" },
  ];

  return (
    <div className="flex flex-col items-center py-6 px-12 w-full overflow-x-hidden my-6">
      {/* <img src="/images/images/pawel1.jpg" alt="pink" className=" h-96 opacity-80"/> */}

      <div className="z-[60] border-2 border-white p-14 flex flex-col items-center rounded-2xl w-full overflow-hidden">
        <div className="flex flex-row items-center justify-between w-full">
          <div className="flex flex-col w-1/2 justify-center">
            <p className="text-xl text-bold text-pink-300 py-4 font-bold">
              About me
            </p>
            <p className="whitespace-pre-line text-pink-100">
              Hi, I'm Iris. I'm based in Wellington and currently finishing my
              Master of Software Development at VUW. <br />
              Before getting into tech, I spent years as a landscape
              designer — working on everything from small green spaces to large
              public parks. Making the switch to software was a big change, but
              the core of what I love about both is the same: solving problems
              and building things that people actually enjoy using.
              <br />
              When I'm not coding, I'm usually out with my camera looking for
              birds, painting, training for a marathon, or curled up with a book
              or film.
            </p>
            <h3 className="font-bold text-pink-300 mt-4">Tech Stack</h3>
            <ul className="list-disc list-inside">
              <li>
                C#, Java, JavaScript (ES6), TypeScript, Python, React, .NET,
                FastAPI, HTML, CSS
              </li>
              <li> PostgreSQL, MySQL</li>
              <li>Git, npm, Vite, VS Code, Eclipse</li>
              <h3 className="font-bold text-pink-300 mt-4">
                Design & Visualization
              </h3>
              <li>AUTO CAD, Photoshop, SketchUp, Lumion, InDesign</li>
            </ul>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="/images/images/girl_transparent.png"
              alt="pink"
              className=" h-96 opacity-80"
            />
          </div>
        </div>

        <div className="overflow-hidden w-full mt-8">
          <div className="flex animate-scroll w-max">
            {[...icons, ...icons].map((icon, i) => (
              <div
                key={i}
                className="flex-shrink-0 mx-4 w-16 h-16 border border-1 border-white/50 bg-pink-200/20 flex items-center justify-center rounded-2xl"
              >
                <img
                  src={icon.src}
                  alt={icon.name}
                  className="w-10 h-10 object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
