import Home from "@/components/Home";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

const page = () => {
  return (
    <>
      <div className=" bg-black text-white font-Poppins">
        <Home />
        <TechStack />
        <Projects />
      </div>
    </>
  );
};

export default page;
