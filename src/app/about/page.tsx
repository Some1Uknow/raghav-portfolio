import MyComponent from "@/components/about/AboutMe";
import ExperienceSection from "@/components/about/ExperienceData";
import MyCapabilities from "@/components/about/skills/MySkills";
import 'animate.css';

export default function About() {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:justify-start justify-start w-full lg:items-start items-center mt-20">
        <div className="animate__animated animate__fadeInLeft text-5xl lg:text-8xl font-Bebas w-full lg:w-1/2 lg:ml-16 text-center lg:text-left">
          ABOUT ME
        </div>
        <div className="animate__animated animate__fadeInRight w-full lg:w-1/2 mt-8 lg:mt-0 px-4 lg:px-0">
          <MyComponent />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-start justify-start w-full lg:items-start items-center mt-20 mb-10">
        <div className="animate__animated animate__fadeInLeft text-5xl lg:text-8xl font-Bebas w-full lg:w-1/2 lg:ml-16 text-center lg:text-left">
          SKILLS
        </div>
        <div className="animate__animated animate__fadeInRight w-full lg:w-1/2 mt-8 lg:mt-0 px-4 lg:px-0">
          <MyCapabilities />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row lg:justify-start justify-start w-full lg:items-start items-center mt-20 mb-10">
        <div className="animate__animated animate__fadeInLeft text-5xl lg:text-8xl font-Bebas w-full lg:w-1/2 lg:ml-16 text-center lg:text-left">
          EXPERIENCE
        </div>
        <div className="animate__animated animate__fadeInRight w-full lg:w-1/2 mt-8 lg:mt-0 px-4 lg:px-0">
          <ExperienceSection />
        </div>
      </div>
    </>
  );
}
