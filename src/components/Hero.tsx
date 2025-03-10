import React from "react";
import ProfileSection from "./ProfileSection";
import Image from "next/image";

export default function Hero() {
  const name = "Raghav Sharma";
  const description =
    "Full Stack Developer who loves shipping cool apps every now and then";
  const socialLinks = [
    {
      icon: "/linkedin.svg",
      url: "https://linkedin.com/in/raghavsharmaweb3",
    },
    {
      icon: "/github.svg",
      url: "https://github.com/some1uknow",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-28 px-4 md:px-8">
      <ProfileSection
        name={name}
        description={description}
        socialLinks={socialLinks}
      />
      <Image
        src="/raghav.jpg"
        alt="Hero Image"
        width={1000} 
        height={1000} 
        className="animate__animated animate__fadeInRight w-1/5 max-sm:w-2/3 rounded-full md:mt-0 object-cover"
      />
    </div>
  );
}
