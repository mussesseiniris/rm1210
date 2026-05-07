import ParticlesBackground from "./components/ParticlesBackground";
import TechModal from "./techModal";
import Introduction from "./introduction";
import PaintingModal from "./paintingModal";
import FirstModal from "./firstModal";
import ContactMe from "./ContactModal";
export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen bg-black ">
      {/* <div
        style={{ backgroundImage: "url('/images/images/pawel2.jpg')" }}
        className="absolute inset-0 bg-cover bg-center opacity-50"
      ></div> */}
      <div className="relative z-[60] border-2 border-gray-100/30 p-2 flex flex-col items-center mx-8 my-2 w-full">
        <div className="relative z-[60] border-2 border-gray-100/30 p-2 flex flex-col items-center mx-8 my-2 w-full">
          <div id="home">
            <FirstModal />
          </div>
          <div id="aboutMe" className="w-full">
            <Introduction />
          </div>

          <div id="techModal">
            <TechModal />
          </div>
          <div id="designWork">
            <PaintingModal />
          </div>
          <ParticlesBackground />
          <div id="contactMe" className="w-full">
            <ContactMe />
          </div>
        </div>
      </div>
    </div>
  );
}
