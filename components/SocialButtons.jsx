import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import Image from "next/image";

const SocialButtons = () => {
  return (
    <div className="h-max md:flex flex-col justify-center items-center p-8">
      <h2 className="text-6xl font-mono font-semibold mb-10 max-sm:text-5xl">
        Socials
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-lg md:max-w-full">
        <a
          href="https://hashnode.com/@raghav2004"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full md:w-1/3 font-Poppins text-2xl justify-center bg-blue-500 hover:bg-blue-600 text-white max-sm:p-2 max-sm:text-lg p-5 rounded-full"
        >
          <Image
            src="/Hashnode.png"
            className="mr-2 max-sm:w-6"
            height={32}
            width={32}
          />
          Hashnode
        </a>
        <a
          href="https://twitter.com/raghav_sharma_7"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full md:w-1/3 font-Poppins text-3xl justify-center bg-blue-400 hover:bg-blue-500 text-white max-sm:p-2 max-sm:text-xl p-5 rounded-full"
        >
          <FaTwitter className="mr-2" />
          Twitter
        </a>
        <a
          href="https://linkedin.com/in/raghavsharmaweb3"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full md:w-1/3 font-Poppins text-3xl justify-center bg-blue-600 hover:bg-blue-700 text-white max-sm:p-2 max-sm:text-xl p-5 rounded-full"
        >
          <FaLinkedin className="mr-2" />
          LinkedIn
        </a>
        <a
          href="https://github.com/Some1Uknow"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center w-full md:w-1/3 font-Poppins text-3xl justify-center bg-gray-800 hover:bg-gray-900 text-white max-sm:p-2 max-sm:text-xl p-5 rounded-full"
        >
          <FaGithub className="mr-2" />
          GitHub
        </a>
      </div>
    </div>
  );
};

export default SocialButtons;
