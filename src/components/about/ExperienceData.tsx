import React from "react";
import ExperienceItem from "./Experience";

interface ExperienceData {
  title: string;
  date: string;
  company?: string;
  location?: string;
  companyIcon: any;
  description: string[];
  skills: string[];
}

const experienceData: ExperienceData[] = [
  {
    title: "SWE Intern",
    date: "Feb 2025 — Present",
    company: "FOSSEE | IIT Bombay",
    location: "Remote",
    companyIcon:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2uMg64FOeSZDyO25bJPVp3bZ4kFC5-uPmxg&s",
    description: [
      "Working on Osdag, a cross-platform open-source software for structural steel design as per Indian Standards",
      "Implementing new features and improving existing functionality in the civil engineering CAD tool",
      "Collaborating with a team of developers to maintain and enhance software quality",
      "Contributing to open-source development under the guidance of IIT Bombay faculty",
    ],
    skills: [
      "Git",
      "GitHub",
      "React.js",
      "Python",
      "Django",
      "Docker",
      "Software Development",
    ],
  },
  {
    title: "Web Development Intern",
    date: "July 2024 — September 2024",
    company: "Debales.ai",
    location: "Remote",
    companyIcon: "/debales.png",
    description: [
      "Developed dynamic pages that efficiently display AI-generated data, enhancing user engagement by 20%",
      "Implemented session storage for chat history, improving user retention and multi-session continuity",
      "Enhanced chatbot functionality by integrating product image display, increasing user interaction rates by 45%",
      "Built a feedback system for chatbot response rating, contributing to a 15% improvement in response accuracy",
      "Resolved critical bugs and reduced UI/UX inconsistencies to improve user satisfaction by 15%",
    ],
    skills: [
      "Git",
      "GitHub",
      "Next.js",
      "TailwindCSS",
      "ShadcnUI",
      "Software Development",
    ],
  },
];

const ExperienceSection: React.FC = () => {
  return (
    <section>
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-full">
          <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
            <h2 className="text-3xl font-bold text-white mb-8">
              Professional Experience
            </h2>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 h-full w-0.5 bg-lime-300 ml-4"></div>

              {/* Experience items */}
              <div className="ml-12">
                {experienceData.map((experience, index) => (
                  <ExperienceItem key={index} {...experience} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
