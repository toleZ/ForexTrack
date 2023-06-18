import { FiGithub, FiLinkedin } from "react-icons/fi";

const Foooter = () => {
  return (
    <footer className="p-4 w-full flex flex-col gap-6 md:flex-row md:gap-0 items-center justify-around bg-gray-400/10">
      <h1 className="text-center">
        Proyecto desarrollado y diseñado por{" "}
        <strong>Juan C. Toloy &copy;</strong>
      </h1>

      <ul className="flex items-center gap-4">
        <li className="hover:scale-125 hover:text-[#c9510c] transition-all duration-300">
          <a href="https://github.com/toleZ" target="_blank">
            <FiGithub />
          </a>
        </li>
        <li className="hover:scale-125 hover:text-[#0a66c2] transition-all duration-300">
          <a
            href="https://www.linkedin.com/in/juan-cruz-toloy-85610223b/"
            target="_blank"
          >
            <FiLinkedin />
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Foooter;
