import CapabilityButton from "./CapabilityButton";

interface Capability {
  name: string;
  iconUrl?: string;
  color?: string;
}

const capabilities: Capability[] = [
  {
    name: "HTML",
    iconUrl: "https://skillicons.dev/icons?i=html",
    color: "red",
  },
  { name: "CSS", iconUrl: "https://skillicons.dev/icons?i=css", color: "blue" },
  {
    name: "JavaScript",
    iconUrl: "https://skillicons.dev/icons?i=javascript",
    color: "yellow",
  },
  {
    name: "TypeScript",
    iconUrl: "https://skillicons.dev/icons?i=typescript",
    color: "blue",
  },
  {
    name: "TailwindCSS",
    iconUrl: "https://skillicons.dev/icons?i=tailwindcss",
    color: "teal",
  },
  {
    name: "React",
    iconUrl: "https://skillicons.dev/icons?i=react",
    color: "cyan",
  },
  {
    name: "NextJS",
    iconUrl: "https://skillicons.dev/icons?i=nextjs",
    color: "white",
  },
  {
    name: "Express",
    iconUrl: "https://skillicons.dev/icons?i=express",
    color: "green",
  },
  {
    name: "Node",
    iconUrl: "https://skillicons.dev/icons?i=nodejs",
    color: "green",
  },
  {
    name: "MongoDB",
    iconUrl: "https://skillicons.dev/icons?i=mongodb",
    color: "green",
  },
  {
    name: "PostgreSQL",
    iconUrl: "https://skillicons.dev/icons?i=postgresql",
    color: "blue",
  },
  {
    name: "Git",
    iconUrl: "https://skillicons.dev/icons?i=git",
    color: "orange",
  },
  {
    name: "GitHub",
    iconUrl: "https://skillicons.dev/icons?i=github",
    color: "white",
  },
  {
    name: "Prisma",
    iconUrl: "https://skillicons.dev/icons?i=prisma",
    color: "blue",
  },
];

const MyCapabilities: React.FC = () => {
  return (
    <section className="w-full font-Manrope">
      <div className="flex flex-wrap gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-full px-5">
          <div className="flex flex-wrap text-base leading-4 text-white gap-4">
            {capabilities.map((capability, index) => (
              <CapabilityButton
                key={index}
                name={capability.name}
                iconUrl={capability.iconUrl}
                color={capability.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyCapabilities;
