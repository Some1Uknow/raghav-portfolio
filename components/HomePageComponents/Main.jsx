import Image from "next/image";
import React from "react";

const Main = () => {
  return (
    <div className="flex flex-row h-4/5 items-center ">
      <div className="w-1/2 p-10 flex flex-col gap-1">
        <span className="font-light text-5xl ml-1">I'm Raghav Sharma</span>
        <span className="text-8xl font-bold mb-2">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            A Full-Stack Developer
          </span>
        </span>
        <span className="text-2xl font-extralight">
          Specializing in building apps for both web and mobile platforms
        </span>
        <span className="text-xl font-extralight">
          Passionate about solving real-life problems with my problem-solving
          skills and coding prowess.
        </span>
      </div>
      <div className="w-1/2 flex flex-row justify-center">
        <Image
          src="https://via.placeholder.com/900x1600"
          width={900}
          height={160}
          className="w-2/5 h-2/5"
        />
      </div>
    </div>
  );
};

export default Main;
