import React from "react";

interface FeaturedProjectsProps {
  title: string;
  description: string;
}

const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  title,
  description,
}) => {
  return (
    <section className="flex flex-col w-1/2 px-16">
      <h2 className="w-full text-7xl text-white leading-[76px] max-md:max-w-full max-md:text-4xl font-Bebas">
        {title}
      </h2>
      <p className="mt-2 w-full text-lg leading-7 text-stone-300 max-md:max-w-full font-Manrope">
        {description}
      </p>
    </section>
  );
};

export default FeaturedProjects;
