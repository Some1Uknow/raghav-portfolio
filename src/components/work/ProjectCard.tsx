import React from "react";
import ProjectInfo from "./ProjectInfo";
import ActionLink from "./ActionLink";
import Image from "next/image";
import 'animate.css'

interface ProjectCardProps {
  conceptualWorkImage: string;
  title: string;
  description: string;
  projectInfo: {
    year: string;
    role: string;
  };
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
  projectInfo,
  actions,
  techstack,
}) => {
  return (
    <article className="animate__animated animate__fadeIn flex flex-col bg-zinc-900/80 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all">
      {/* Image Section */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={conceptualWorkImage}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      
      {/* Content Section */}
      <div className="flex flex-col p-4 h-full">
        {/* Title and Description */}
        <div>
          <h3 className="text-xl font-medium text-white mb-2 line-clamp-1">{title}</h3>
          <p className="text-sm text-zinc-300 mb-3 line-clamp-2">{description}</p>
        </div>
        
        {/* Project Info */}
        <ProjectInfo year={projectInfo.year} role={projectInfo.role} />
        
        {/* Tech Stack */}
        <div className="my-3">
          <Image
            height={50}
            width={200}
            src={techstack}
            alt="Tech Stack"
            className="h-8 w-auto"
          />
        </div>
        
        {/* Actions */}
        <div className="flex gap-3 mt-auto pt-2">
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
