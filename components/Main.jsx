import Image from "next/image";

const Main = () => {
  return (
    <div className="flex mt-20 flex-col items-center md:flex-row md:justify-around max-sm:flex-col max-sm:items-center max-sm:p-3">
      <div className="w-1/2 p-10 flex flex-col gap-1 md:w-1/2 max-sm:w-full max-sm:p-3">
        <span className="font-light text-5xl ml-1 md:text-5xl max-sm:text-3xl">
          I'm Raghav Sharma
        </span>
        <span className="text-8xl font-bold mb-2 md:text-8xl max-sm:text-5xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            A Full-Stack Developer
          </span>
        </span>
        <span className="text-2xl font-extralight md:text-2xl max-sm:text-sm">
          Specializing in building apps for both web and mobile platforms
        </span>
        <span className="text-xl font-extralight md:text-xl max-sm:text-sm">
          Passionate about solving real-life problems with my problem-solving
          skills and coding prowess.
        </span>
      </div>
      <div className="w-1/2 flex flex-row justify-center md:w-1/4 max-sm:w-1/2">
        <Image
          src="/raghavprofilepic.png"
          width={900}
          height={160}
          className="w-3/5 h-3/5 rounded-full md:h-full md:w-11/12 max-sm:h-full max-sm:w-11/12"
        />
      </div>
    </div>
  );
};

export default Main;
