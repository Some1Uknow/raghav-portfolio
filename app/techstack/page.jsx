import Image from "next/image";

const TechStack = () => {
  const techStackItems = [
    {
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CPP.svg",
      ],
      iconNames: ["JavaScript", "TypeScript", "C++"],
    },
    {
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Light.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg",
        "/restapi.png",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Prisma.svg",
      ],
      iconNames: [
        "NextJS",
        "React",
        "ExpressJS",
        "NodeJS",
        "REST APIs",
        "Prisma",
      ],
    },
    {
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/PostgreSQL-Dark.svg",
      ],
      iconNames: ["MongoDB", "PostgreSQL"],
    },
    {
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Bootstrap.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MaterialUI-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bash-Dark.svg",
      ],
      iconNames: [
        "HTML",
        "CSS",
        "TailwindCSS",
        "Bootstrap",
        "MaterialUI",
        "Bash",
      ],
    },
    {
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Light.svg",
      ],
      iconNames: ["Git", "Github"],
    },
    {
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/GCP-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Netlify-Dark.svg",
      ],
      iconNames: ["Google Cloud", "Postman", "Vercel", "Netlify"],
    },
  ];

  return (
    <div className="bg-black text-white p-8 lg:mx-48 lg:mt-14">
      <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-8 lg:grid-cols-8 gap-6">
        {techStackItems.map((stack, stackIndex) =>
          stack.icons.map((icon, iconIndex) => (
            <div
              key={`${stackIndex}-${iconIndex}`}
              className="flex flex-col items-center"
            >
              <Image
                src={icon}
                alt={stack.iconNames[iconIndex]}
                width={64}
                height={64}
                className="w-36 h-50"
              />
              <p className="mt-2 text-xs">{stack.iconNames[iconIndex]}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default TechStack;
