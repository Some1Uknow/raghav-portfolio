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
        src="/raghav.jpeg"
        alt="Hero Image"
        width={500} // Adjusted for better responsiveness
        height={500} // Adjusted for better responsiveness
        className="w-1/4 max-sm:w-2/3 rounded-full md:mt-0" // Added margin for smaller screens and adjusted width
      />
    </div>
  );
}
