import React from "react";
import Image from "next/image";

interface TechMarqueeProps {
  techstack: string;
}

const TechMarquee: React.FC<TechMarqueeProps> = ({ techstack }) => {
  // Extract tech names from the URL
  const techItems = techstack.split('i=')[1].split(',').map(tech => ({
    name: tech.replace(/(^\w|-\w)/g, (match) => match.toUpperCase()).replace(/-/g, ' '),
    icon: `https://skillicons.dev/icons?i=${tech}&theme=light`
  }));

  return (
    <div className="overflow-hidden py-4">
      <div className="flex animate-marquee w-full space-x-3">
        {[...techItems, ...techItems].map((tech, index) => (
          <div 
            key={index} 
            className="flex items-center bg-gray-800 backdrop-blur-sm border border-gray-200/50 
                       rounded-full py-2 px-3 pr-8 shadow-sm transition-all duration-300 
                       hover:scale-105 hover:shadow-md"
          >
            <Image 
              src={tech.icon} 
              alt={tech.name} 
              width={24} 
              height={24} 
              className="mr-2"
            />
            <span className="text-sm font-medium text-white dark:text-gray-200">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;