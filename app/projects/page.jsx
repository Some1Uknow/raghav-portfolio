import ProjectCard from "@/components/ProjectCard";
import EmblaCarousel from "../EmblaCarousel";

const projects = [
  {
    name: "VentOut",
    image: "/ventout.png",
    description:
      "VentOut is a mental health platform where people can share their mental health problems and consult help from psychologists at anytime online. The platform uses google sentiment analysis API to detect and filter out content that can negatively affect the users, making the platform a safe place to vent emotions and feelings",
    techStack:
      "Next.js, Tailwind CSS, REST APIs, MongoDB, Mongoose, Google Cloud, NextAuth.js",
    githubLink: "https://github.com/Some1Uknow/vent-out",
    deployedLink: "https://ventout.vercel.app",
  },
  {
    name: "TechReads",
    image: "/techreads.png",
    description:
      "TechReads is a simple and user-friendly blogging platform made for tech lovers. Unlike other complex blogging apps, TechReads offers a clean design and only the essential features you need to start sharing your tech thoughts",
    techStack: "MongoDB, React.js, Express.js, Node.js, TailwindCSS",
    githubLink: "https://github.com/Some1Uknow/Blog-App",
    deployedLink: "deployed-project-link-2",
  },
];

const minorProjects = [
  {
    name: "Rock Paper Scissors Game",
    image:
      "https://github.com/Some1Uknow/rock-paper-scissors/raw/main/public/preview.png",
    description:
      "A simple rock paper scissors game made using only HTML, TailwindCSS and JavaScript",
    techStack: "HTML, TailwindCSS, JavaScript",
    githubLink: "https://github.com/Some1Uknow/rock-paper-scissors",
    deployedLink: "https://some1uknow.github.io/rock-paper-scissors/",
  },
  {
    name: "Simon Game",
    image: "/taptapgame.png",
    description:
      "A classic Simon game where the player must repeat a sequence of tones and lights.",
    techStack: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Some1Uknow/tap-tap-game",
    deployedLink: "https://some1uknow.github.io/tap-tap-game/",
  },
  {
    name: "Quote Generator",
    image: "/quoteproject.png",
    description:
      "A simple quote generator that fetches random quotes from an API and displays them on the screen.",
    techStack: "HTML, Bootstrap, JavaScript",
    githubLink: "https://github.com/some1uknow/quote-generator",
    deployedLink: "https://some1uknow.github.io/quote-generator/",
  },
];

const Projects = () => {
  const OPTIONS = { loop: true }
  return (
    <>
      <div className="w-full flex flex-row justify-around items-center">
        <div className="w-1/3">
          {" "}
          <div className="text-center m-5">
            <span className="text-5xl font-bold bg-gradient-to-r from-emerald-500 to-emerald-900 bg-clip-text text-transparent max-sm:text-2xl max-sm:p-2">
              Major Projects
            </span>
          </div>
          <div className="flex flex-wrap gap-14 justify-between items-center h-1/2 max-sm:p-4">
            <EmblaCarousel projects={projects} options={OPTIONS} />
          </div>
        </div>

        <div className="w-2/5 p-10">
          <div className="mt-5 text-center p-6">
            {" "}
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-300 to-purple-500 bg-clip-text text-transparent max-sm:text-xl max-sm:p-5">
              Minor Projects (Learning Projects)
            </span>
          </div>

          <div className="flex flex-wrap gap-14 justify-between items-center h-1/2 max-sm:p-4">
            <EmblaCarousel projects={minorProjects} options={OPTIONS} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
