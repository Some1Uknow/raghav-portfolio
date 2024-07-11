import React from 'react';

interface ProjectInfoProps {
  year: string;
  role: string;
}

const ProjectInfo: React.FC<ProjectInfoProps> = ({ year, role }) => {
  return (
    <div className="flex flex-col px-5 mt-8 text-base max-md:max-w-full">
      <h2 className="font-semibold text-white uppercase leading-[150%] max-md:max-w-full">
        Project Info
      </h2>
      <div className="flex flex-col justify-center mt-4 font-medium border-b border-solid border-zinc-700 leading-[160%] max-md:max-w-full">
        <div className="flex gap-2 justify-between py-4 whitespace-nowrap border-t border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
          <span className="text-white">Year</span>
          <span className="text-stone-300">{year}</span>
        </div>
        <div className="flex gap-2 justify-between py-4 border-t border-solid border-zinc-700 max-md:flex-wrap max-md:max-w-full">
          <span className="text-white">Role</span>
          <span className="text-stone-300">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;