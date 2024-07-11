"use client";

import Image from "next/image";

interface ActionLinkProps {
  text: string;
  icon: string;
  link: string;
}

const ActionLink: React.FC<ActionLinkProps> = ({ text, icon, link }) => {
  return (
    <div className="flex flex-col items-start">
      <div
        onClick={() => window.open(link)}
        className="flex items-center gap-2 p-2 font-bold leading-6 text-lime-300 uppercase cursor-pointer hover:text-lime-400 text-2xl"
      >
        <span>{text}</span>
        <Image height={100} width={100} src={icon} alt="" className="shrink-0 w-6 h-6" />
      </div>
      <div className="w-full h-0.5 bg-lime-300 mt-1" />
    </div>
  );
};

export default ActionLink;
