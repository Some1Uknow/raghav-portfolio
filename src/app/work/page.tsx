import React from "react";
import FeaturedProjects from "@/components/FeaturedProjects";
import ProjectCard from "@/components/work/ProjectCard";

const HomePage: React.FC = () => {
  const sampleProjectCards = [
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
        "https://skillicons.dev/icons?i=javascript,nextjs,mongodb,html,css,tailwind,git,github,bash,postman,vscode,vercel",
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
        "https://skillicons.dev/icons?i=javascript,react,nodejs,mongodb,express,react,tailwind,git,github,vercel,postman,vscode",
    },
    {
      conceptualWorkImage: "/taptapgame.png",
      title: "Tap-Tap Game",
      description:
        "A classic memory game where you must repeat a sequence of colors and sounds. Test your memory and see how far you can go!",
      projectInfo: {
        year: "2023",
        role: "Lead Developer",
      },
      actions: [
        {
          text: "View Project",
          icon: "/arrow.svg",
          link: "https://some1uknow.github.io/tap-tap-game/",
        },
        {
          text: "Source Code",
          icon: "/github.svg",
          link: "https://github.com/Some1Uknow/tap-tap-game",
        },
      ],
      techstack:
        "https://skillicons.dev/icons?i=javascript,git,github,vscode,html,css",
    },
  ];

  return (
    <main className="min-h-screen">
      <FeaturedProjects title="Featured Projects" description="" />
      {sampleProjectCards.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </main>
  );
};

export default HomePage;
