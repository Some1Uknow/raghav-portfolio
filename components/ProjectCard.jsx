const ProjectCard = ({ project }) => {
  const { name, image, description, techStack, githubLink, deployedLink } = project;

  return (
    <div className="p-4 h-max shadow-lg rounded-lg box-border shadow-purple-700 border border-purple-700 flex flex-col gap-4 ">
      <img
        src={image}
        alt={name}
        className="object-cover rounded-lg mr-4 max-sm:w-full max-sm:mb-0"
      />
      <div className="flex flex-col justify-between p-2 max-sm:w-full">
        <div>
          <div className="text-2xl font-bold mb-2">{name}</div>
          <div className="text-gray-600 text-xs font-semibold mb-4">{description}</div>
          <div className="text-sm text-gray-500 mb-2">
            Tech Stack: {techStack}
          </div>
        </div>
        <div>
          <div className="flex justify-between">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
            <a
              href={deployedLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              Project Link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
