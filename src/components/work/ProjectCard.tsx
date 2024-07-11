import React from "react";
import ProjectInfo from "./ProjectInfo";
import ActionLink from "./ActionLink";

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
    <main className="flex flex-col lg:flex-row items-center gap-5 lg:mx-20 mt-10 mb-20 px-10">
      <section className="flex flex-col w-full lg:w-1/2 bg-zinc-900 p-4 rounded-xl">
        <div className="flex flex-col justify-center text-sm font-medium leading-5 text-white">
          <div className="flex flex-col h-full">
            <img
              src={conceptualWorkImage}
              alt="Conceptual work"
              className="w-full h-auto border-2 border-black rounded-lg object-contain"
            />
            <img src={techstack} alt="Tech Stack" className="p-4" />
          </div>
        </div>
      </section>
      <section className="flex flex-col w-full lg:w-1/2 lg:pl-10">
        <div className="flex flex-col justify-center my-auto lg:mt-0 h-full">
          <div className="flex flex-col px-5">
            <h1 className="text-3xl font-medium leading-10 text-white">
              {title}
            </h1>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              {description}
            </p>
          </div>
          <ProjectInfo year={projectInfo.year} role={projectInfo.role} />
          <div className="flex gap-5 justify-start mt-12">
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
      </section>
    </main>
  );
};

export default ProjectCard;
