import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectCard from "@/components/work/ProjectCard";
import GitHubActivity from "@/components/work/GitHubActivity";
import WakaTimeActivity from "@/components/work/WakaTimeActivity";

const HomePage: React.FC = () => {
  const sampleProjectCards = [
    {
      title: "ResumeMax - AI-Powered Resume Builder",
      description:
        "Developed a tool that uses AI to create optimized resumes tailored for ATS (Applicant Tracking Systems), improving job application success rates.",
      conceptualWorkImage: "/resumemax.png",
      projectInfo: {
        year: "2024",
        role: "Full Stack Developer",
      },
      actions: [
        {
          text: "View Project",
          icon: "/arrow.svg",
          link: "https://resumemax.vercel.app",
        },
        {
          text: "GitHub",
          icon: "/github.svg",
          link: "https://github.com/some1uknow/resumemax",
        },
      ],
      techstack:
        "https://skillicons.dev/icons?i=nextjs,nodejs,typescript,tailwind,postgresql,vercel",
      features: [
        "User Authentication: Built a secure and user-friendly authentication system with multiple login options, including email/password and social sign-in.",
        "Customizable Themes: Integrated theme customization to support light, dark, and system preferences, enhancing user experience and accessibility.",
        "Responsive Design: Designed a fully responsive and modern interface, ensuring seamless usability across devices.",
        "Scalable Web Application: Built a scalable and maintainable web application using modern frameworks, ensuring efficient performance and future growth.",
      ],
    },
    {
      conceptualWorkImage: "/ventout.png",
      title:
        "VentOut - Platform for building positive connections and emotional support.",
      description:
        "VentOut is a platform that provides a safe space for individuals to express their emotions and receive support from others. It aims to create a positive and empathetic community where users can share their thoughts and feelings without fear of judgment.",
      projectInfo: {
        year: "2024",
        role: "Lead Full Stack Developer",
      },
      actions: [
        {
          text: "View Project",
          icon: "/arrow.svg",
          link: "https://ventout.live",
        },
        {
          text: "Source Code",
          icon: "/github.svg",
          link: "https://github.com/some1uknow/vent-out",
        },
      ],
      techstack:
        "https://skillicons.dev/icons?i=javascript,nextjs,mongodb,tailwind,github,bash,postman,vercel",
    },
    {
      conceptualWorkImage: "/techreads.png",
      title: "TechReads - AI-driven Blog App",
      description:
        "TechReads is an AI-driven blog application that offers personalized content recommendations. Users can read, write, and share articles on various tech topics, with AI algorithms providing customized suggestions.",
      projectInfo: {
        year: "2024",
        role: "Lead Full Stack Developer",
      },
      actions: [
        {
          text: "View Project",
          icon: "/arrow.svg",
          link: "https://techreadsblog.vercel.app",
        },
        {
          text: "Source Code",
          icon: "/github.svg",
          link: "https://github.com/search?q=owner%3ASome1Uknow+techreads&type=repositories",
        },
      ],
      techstack:
        "https://skillicons.dev/icons?i=javascript,react,nodejs,mongodb,express,react,tailwind,git,github,vercel,postman",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center justify-center max-w-[1400px] mx-auto">
      <FeaturedProjects title="Featured Projects" description="" />
      
      <div className="w-full px-4 md:px-8 lg:px-12 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {sampleProjectCards.map((project, index) => (
            <ProjectCard 
              key={index}
              conceptualWorkImage={project.conceptualWorkImage}
              title={project.title}
              description={project.description}
              projectInfo={project.projectInfo}
              actions={project.actions}
              techstack={project.techstack}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default HomePage;
