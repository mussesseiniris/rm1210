import { Doto } from "next/font/google";
const doto = Doto({
  subsets: ["latin"],
  weight: "400",
});
export default function FirstModal() {
  return (
    <div className="flex flex-col pt-12 pb-20">
    
      <div className="flex flex-col items-center justify-center px-6 py-8 ">
      <h1 className={`text-white text-8xl font-bold ${doto.className}`}>
        {" "}
        Iris{" "}
      </h1>
      <p
        className={`text-pink-100 text-3xl font-bold py-6 ${doto.className}`}
      >
        Software Developer
      </p>
</div>
  <p className="text-6xl py-8 text-pink-200">
        Explore the boundless 
        <br />possibilities of creation{" "}
      </p>
      <a href="#aboutMe" className="block">  
      <button className="w-full border-2 border-pink py-2 px-12 my-22 rounded-2xl hover:bg-gradient-to-b from-pink-200/30 to-sky-200/40 transition-colors">Explore more</button></a>
      </div>
  );
}
