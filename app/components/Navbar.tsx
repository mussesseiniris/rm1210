export default function Navbar() {
  return (
    <div>
    <div className="flex justify-center gap-10 py-4 px-8 bg-black">
        {/* <h2 className="flex-2 text-gray-400">Portfolio</h2> */}
      <a href="#home" className="text-white">Home</a>
      <a href="#aboutMe" className="text-pink-100">About me</a>
      <a href="#techModal" className="text-pink-200">Tech Projects</a>
      <a href="#designWork" className="text-pink-300" >Design Work</a>
      <a href="#contactMe" className="text-pink-400">Contact Me</a>
    </div>
    </div>
  );
}