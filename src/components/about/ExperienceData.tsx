import React from "react";
import ExperienceItem from "./Experience";

interface ExperienceData {
  title: string;
  date: string;
  company?: string;
  companyIcon: any;
  description: string;
}

const experienceData: ExperienceData[] = [
  {
    title: "Web Development Intern",
    date: "July 2024 — Present",
    company: "Debales.ai",
    companyIcon: "/debales.png",
    description:
      "Enhanced user experience by replacing placeholder content with high-quality text resulting in a more engaging website.\n● Improved chatbot functionality by fixing text overflow issues, ensuring seamless and user-friendly interactions for website visitors.",
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col mr-5 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            {experienceData.map((experience, index) => (
              <ExperienceItem key={index} {...experience} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
