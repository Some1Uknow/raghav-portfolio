import React from "react";
import Link from "next/link";
import Image from "next/image";

interface SocialButtonProps {
  icon: string;
  url: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ icon, url }) => {
  return (
    <Link
      href={url}
      className="flex justify-center items-center px-3.5 bg-neutral-800 h-[54px] rounded-[100px] w-[54px]"
    >
      <Image
        width={100}
        height={100}
        loading="lazy"
        src={icon}
        alt=""
        className="aspect-square w-[26px]"
      />
    </Link>
  );
};

export default SocialButton;
