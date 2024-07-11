"use client";

import Image from "next/image";

interface SocialButtonProps {
  src: string;
  link: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ src, link }) => {
  return (
    <div
      onClick={() => window.open(link)}
      className="flex justify-center items-center px-3.5 cursor-pointer bg-neutral-800 h-[54px] rounded-[100px] w-[54px]"
    >
      <Image
      width={100}
      height={100}
        loading="lazy"
        src={src}
        alt="Social media buttons"
        className="aspect-square w-[26px]"
      />
    </div>
  );
};

export default SocialButton;
