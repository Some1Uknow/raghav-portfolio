// ProjectCard.tsx
import React from "react";
import ActionLink from "./ActionLink";
import Image from "next/image";
import TechMarquee from "./TechMarquee";
interface ProjectCardProps {
  conceptualWorkImage: string;
  title: string;
  description: string;
  actions: {
    text: string;
    icon: string;
    link: string;
  }[];
  techstack: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  conceptualWorkImage,
  title,
  description,
  actions,
  techstack,
}) => {
  return (
    <article className="group relative overflow-hidden rounded-lg bg-gray-950 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-neutral-900">
      {/* Image Section with Hover Zoom */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={conceptualWorkImage}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      {/* Content Section */}
      <div className="p-6">
        {/* Title and Description */}
        <div className="mb-4 text-stone-50">
          <h3 className="mb-2 text-xl font-semibold dark:text-white">{title}</h3>
          <p className="line-clamp-2 dark:text-neutral-300">{description}</p>
        </div>
        
        {/* Tech Stack */}
        <div className="my-4 border-t border-neutral-100 pt-4 dark:border-neutral-800">
          {/* <Image
            height={32}
            width={160}
            src={techstack}
            alt="Tech Stack"
            className="h-8 w-auto opacity-75 transition-opacity hover:opacity-100"
          /> */}
          <TechMarquee techstack={techstack} />
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 border-t border-neutral-100 pt-4 dark:border-neutral-800">
          {actions.map((action, index) => (
            <ActionLink
              key={index}
              text={action.text}
              icon={action.icon}
              link={action.link}
            />
          ))}
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;