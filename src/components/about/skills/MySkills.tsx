"use client";
import { useState, useEffect } from "react";
import CapabilityButton from "./CapabilityButton";
import { motion } from "framer-motion";

interface Capability {
  name: string;
  iconUrl?: string;
  color?: string;
}

// Group capabilities by category for better organization
const capabilities: { [key: string]: Capability[] } = {
  Frontend: [
    {
      name: "HTML",
      iconUrl: "https://skillicons.dev/icons?i=html",
      color: "#E34F26",
    },
    {
      name: "CSS",
      iconUrl: "https://skillicons.dev/icons?i=css",
      color: "#1572B6",
    },
    {
      name: "JavaScript",
      iconUrl: "https://skillicons.dev/icons?i=javascript",
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      iconUrl: "https://skillicons.dev/icons?i=typescript",
      color: "#3178C6",
    },
    {
      name: "TailwindCSS",
      iconUrl: "https://skillicons.dev/icons?i=tailwindcss",
      color: "#06B6D4",
    },
    {
      name: "React",
      iconUrl: "https://skillicons.dev/icons?i=react",
      color: "#61DAFB",
    },
    {
      name: "NextJS",
      iconUrl: "https://skillicons.dev/icons?i=nextjs",
      color: "#ffffff",
    },
  ],
  Backend: [
    {
      name: "Express",
      iconUrl: "https://skillicons.dev/icons?i=express",
      color: "#412424",
    },
    {
      name: "Node",
      iconUrl: "https://skillicons.dev/icons?i=nodejs",
      color: "#339933",
    },
    {
      name: "Prisma",
      iconUrl: "https://skillicons.dev/icons?i=prisma",
      color: "#2D3748",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      iconUrl: "https://skillicons.dev/icons?i=mongodb",
      color: "#47A248",
    },
    {
      name: "PostgreSQL",
      iconUrl: "https://skillicons.dev/icons?i=postgresql",
      color: "#4169E1",
    },
  ],
  "DevOps & Tools": [
    {
      name: "Git",
      iconUrl: "https://skillicons.dev/icons?i=git",
      color: "#F05032",
    },
    {
      name: "GitHub",
      iconUrl: "https://skillicons.dev/icons?i=github",
      color: "#ffffff",
    },
    {
      name: "AWS",
      iconUrl: "https://skillicons.dev/icons?i=aws",
      color: "#FF9900",
    },
    {
      name: "Cloudflare",
      iconUrl: "https://skillicons.dev/icons?i=cloudflare",
      color: "#F38020",
    },
    {
      name: "Docker",
      iconUrl: "https://skillicons.dev/icons?i=docker",
      color: "#2496ED",
    },
  ],
};

const MyCapabilities: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("Frontend");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Simple intersection observer to trigger animation when component is in view
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("skills-section");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };

  return (
    <section id="skills-section" className="w-full font-Manrope py-8">
      <div className="bg-gradient-to-r  rounded-2xl p-6 shadow-xl">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {Object.keys(capabilities).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                  : "bg-gray-800 text-gray-400 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Display */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="flex flex-wrap gap-4 justify-center"
        >
          {capabilities[activeCategory].map((capability, index) => (
            <motion.div
              key={index}
              variants={item}
              className="transform hover:scale-105 transition-all duration-300"
            >
              <CapabilityButton
                name={capability.name}
                iconUrl={capability.iconUrl}
                color={capability.color}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Level Indicator */}
        <div className="mt-10 flex flex-col items-center">
          <p className="text-gray-400 mt-2 text-sm">
            {activeCategory} - {capabilities[activeCategory].length} skills
          </p>
        </div>
      </div>
    </section>
  );
};

export default MyCapabilities;
