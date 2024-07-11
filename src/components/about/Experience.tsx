import React from "react";

interface ExperienceItemProps {
  title: string;
  date: string;
  company?: string;
  description: string;
  companyIcon: any;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  date,
  company,
  companyIcon,
  description,
}) => {
  return (
    <article className="flex flex-col px-5 mt-20 first:mt-0 max-md:mt-10 max-md:max-w-full">
      <header className="flex flex-col justify-center max-md:max-w-full">
        <div className="flex gap-2 max-md:flex-wrap">
          <h3 className="flex-1 text-2xl font-medium tracking-tight leading-8 text-white max-md:max-w-full">
            {title}
          </h3>
          <time className="text-lg leading-7 text-stone-300">{date}</time>
        </div>
        {company && (
          <p className="mt-2 text-lg flex flex-row gap-2 items-center font-semibold leading-7 text-lime-300 max-md:max-w-full">
            <img
              alt="company-icon"
              className="w-8 h-8 rounded"
              src={companyIcon}
            />{" "}
            {company}
          </p>
        )}
      </header>
      <p className="mt-4 text-lg leading-7 text-stone-300 max-md:max-w-full">
        {description}
      </p>
    </article>
  );
};

export default ExperienceItem;
