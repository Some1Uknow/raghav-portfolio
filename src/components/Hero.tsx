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
    <>
      <div className="max-w-screen flex flex-row justify-center items-center mt-20">
        <ProfileSection
          name={name}
          description={description}
          socialLinks={socialLinks}
        />
        <Image
          src="/raghav.jpeg"
          alt="Hero Image"
          width={1000}
          height={1000}
          className="w-1/4 rounded-full"
        />
      </div>
    </>
  );
}
