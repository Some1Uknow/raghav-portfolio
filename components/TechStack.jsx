import Image from "next/image";

const TechStackItem = ({ title, icons, iconNames }) => {
  return (
    <div
      className="w-max text-blue-500 h-max p-5 shadow-md border-t box-border shadow-blue-600 border-blue-700 rounded-2xl max-sm:p-1 max-sm:w-11/12"
      style={{
        background:
          "radial-gradient(circle at 10% 20%, rgb(10, 10, 10) 0%, rgb(20, 20, 20) 90.2%)",
      }}
    >
      <div className="flex flex-col items-center gap-6 max-sm:flex-wrap ">
        <div>
          <span className="w-max text-xl">{title}</span>
        </div>
        <div className="flex flex-row gap-6 flex-wrap max-sm:gap-2">
          {icons.map((icon, index) => (
            <div key={index} className="flex flex-col items-center ">
              <Image
                height={80}
                width={80}
                src={icon}
                className="mb-2 text-white rounded-3xl shadow-2xl shadow-blue-700 hover:shadow-xl hover:shadow-blue-800 transition duration-300"
              />
              <div>
                <span className="text-xs">{iconNames[index]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const TechStack = () => {
  const techStackItems = [
    {
      title: "Programming Languages",
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/JavaScript.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TypeScript.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Java-Light.svg",
      ],
      iconNames: ["JavaScript", "TypeScript", "Java"],
    },
    {
      title: "Frameworks",
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NextJS-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Light.svg",
      ],
      iconNames: ["NextJS", "React Native"],
    },
    {
      title: "Databases",
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MongoDB.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Appwrite.svg",
      ],
      iconNames: ["MongoDB", "AppWrite"],
    },
    {
      title: "Other Tools",
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Git.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Github-Light.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/GCP-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Postman.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Prisma.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Bash-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Vercel-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/main/icons/Netlify-Dark.svg",
      ],
      iconNames: [
        "Git",
        "Github",
        "Google Cloud",
        "Postman",
        "Prisma",
        "Bash",
        "Vercel",
        "Netlify",
      ],
    },
    {
      title: "Web Technologies",
      icons: [
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/HTML.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/CSS.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/TailwindCSS-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Bootstrap.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/MaterialUI-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg",
        "/restapi.png",
        "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/NodeJS-Dark.svg",
      ],
      iconNames: [
        "HTML",
        "CSS",
        "TailwindCSS",
        "Bootstrap",
        "MaterialUI",
        "React",
        "ExpressJS",
        "REST APIs",
        "NodeJS",
      ],
    },
  ];

  return (
    <div className="h-max flex flex-col">
      <div className="text-8xl text-center h-max pb-10 font-bold">
        <span className="text-transparent bg-gradient-to-r from-blue-800 via-blue-500 to-blue-300 bg-clip-text max-sm:text-5xl">
          Tech Stack
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-7">
        {techStackItems.map((item, index) => (
          <TechStackItem
            key={index}
            title={item.title}
            icons={item.icons}
            iconNames={item.iconNames}
          />
        ))}
      </div>
    </div>
  );
};

export default TechStack;
