import Image from "next/image";
import React from "react";

interface ExperienceItemProps {
  title: string;
  date: string;
  company?: string;
  location?: string;
  description: string[];
  skills: string[];
  companyIcon: any;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  date,
  company,
  location,
  companyIcon,
  description,
  skills,
}) => {
  return (
    <article className="relative pb-12 mb-8 last:mb-0 last:pb-0 ml-2 mr-4">
      {/* Timeline dot */}
      <div className="absolute -left-12 mt-1.5 w-4 h-4 rounded-full bg-lime-300 border-4 border-gray-900"></div>
      
      <div className="bg-gray-800/50 rounded-lg p-6 hover:bg-gray-800/80 transition-all duration-300">
        <header className="flex flex-col justify-center max-md:max-w-full">
          <div className="flex justify-between items-start max-md:flex-wrap">
            <h3 className="text-2xl font-medium tracking-tight leading-8 text-white max-md:max-w-full">
              {title}
            </h3>
            <time className="text-lg leading-7 text-stone-300 whitespace-nowrap">{date}</time>
          </div>
          
          <div className="flex items-center mt-2">
            {companyIcon && (
              <div className="mr-3 flex-shrink-0">
                <Image
                  height={32}
                  width={32}
                  alt="company-icon"
                  className="w-8 h-8 rounded object-cover"
                  src={companyIcon}
                />
              </div>
            )}
            
            <div>
              {company && (
                <p className="text-lg font-semibold leading-7 text-lime-300">
                  {company}
                </p>
              )}
              {location && (
                <p className="text-sm text-stone-400">
                  {location}
                </p>
              )}
            </div>
          </div>
        </header>
        
        <div className="mt-4">
          <ul className="space-y-2">
            {description.map((item, index) => (
              <li key={index} className="text-stone-300 flex items-start">
                <span className="text-lime-300 mr-2">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-sm font-medium text-stone-400 mb-2">Skills</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700 text-lime-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ExperienceItem;
