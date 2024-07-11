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
        raghav is a passionate developer hailing from delhi, india. from a young
        age, he had a knack for tinkering with computers, which eventually
        evolved from breaking things to creating new ones. at the age of 17,
        raghav began his coding journey with python and has since been honing
        his skills in web development. during his second year of university,
        raghav built his first app, which allowed people from around the world
        to share their feelings and connect with people. currently, raghav is
        working full-time on his own ideas, with his main focus being a social
        media app designed to promote positivity and eliminate negativity from
        users' online experiences. he is skilled in next.js and other web
        development technologies, having dedicated a significant portion of his
        learning time to these areas. raghav is seeking humble and friendly
        collaborators who can code well to help bring his vision to life.
        additionally, he is open to internship and full time opportunities
        opportunities as a full stack engineer to gain valuable industry
        experience.
      </p>
    </header>
  );
};

export default Header;
