import Image from "next/image";

const Main = () => {
  return (
    <div className="flex flex-row h-4/5 items-center max-sm:p-3">
      <div className="w-1/2 p-10 flex flex-col gap-1 max-sm:w-full max-sm:p-3">
        <span className="font-light text-5xl ml-1 max-sm:text-xl">I'm Raghav Sharma</span>
        <span className="text-8xl font-bold mb-2 max-sm:text-3xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            A Full-Stack Developer
          </span>
        </span>
        <span className="text-2xl font-extralight max-sm:text-sm">
          Specializing in building apps for both web and mobile platforms
        </span>
        <span className="text-xl font-extralight max-sm:text-sm">
          Passionate about solving real-life problems with my problem-solving
          skills and coding prowess.
        </span>
      </div>
      <div className="w-1/2 flex flex-row justify-center max-sm:1/4">
        <Image
          src="/raghavprofilepic.png"
          width={900}
          height={160}
          className="w-3/5 h-3/5 rounded-full max-sm:h-full max-sm:w-11/12"
        />
      </div>
    </div>
  );
};

export default Main;
