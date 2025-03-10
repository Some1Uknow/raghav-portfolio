import React from "react";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <header className="flex flex-col px-10 w-full max-md:max-w-full">
      <h1 className="w-full text-3xl font-medium leading-10 font-Bebas text-white max-md:max-w-full">
        Full stack Developer based in Delhi, India. Background in Computer
        Science and Engineering.
      </h1>
      <p className="mt-4 w-full text-sm leading-7 font-Manrope text-stone-300 max-md:max-w-full">
        Full Stack Developer skilled in JavaScript, TypeScript, React.js,
        Next.js, Node.js, and databases like MongoDB & PostgreSQL. Winner of SIH
        2024, with experience building AI-powered and scalable web applications.
        Passionate about solving real-world problems through clean, efficient
        code. Strong problem-solving mindset with hands-on experience in both
        frontend and backend development. Always eager to learn, adapt, and push
        the limits of what's possible in tech.
      </p>
    </header>
  );
};

export default Header;
