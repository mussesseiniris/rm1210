import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function ContactMe() {
  return (
    <div className="w-full px-12 py-12">
      <p className="flex flex-col p-3 justify-center items-center text-pink-200 text-xl">
        Contact me
      </p>
      <div className="z-[60] border-2 border-white p-14 flex flex-row items-center justify-center gap-4 rounded-2xl w-full">
        <a
          href="https://www.linkedin.com/in/si-zhang-iris/"
          target="_blank"
          className="text-white hover:underline flex items-center gap-2"
        >
          <FaLinkedin size={24} />
          LinkedIn
        </a>
          <a
          href="https://github.com/mussesseiniris"
          target="_blank"
          className="text-white hover:underline flex items-center gap-2"
        >
          <FaGithub size={24} />
          Github
        </a>
      </div>
    </div>
  );
}
