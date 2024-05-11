
const timelineData = [
  {
    date: "May 2024 - Present",
    event: "Selected as an Open Source Contributor in GSSoC 2024",
    description:
      "Joined GSSoC as a participant and started working on projects.",
  },
  {
    date: "May 2024 - Present",
    event: "Selected as an Open Source Contributor in GSSoC 2024",
    description:
      "Joined GSSoC as a participant and started working on projects.",
  },
];
const page = () => {
  return (
    <div className="container px-4 py-8">
      <div className="mx-auto max-w-2xl relative">
        {timelineData.map((entry, index) => (
          <div key={index} className="mb-8">
            <div className="flex items-center mb-2">
              {index !== 0 && (
                <div className="absolute top-0 left-4 w-0.5 h-full bg-gray-300"></div>
              )}
              <div className="ml-1 w-6 h-6 bg-gray-300 rounded-full z-10"></div>
              <div className="text-lg font-semibold ml-4">{entry.date}</div>
            </div>
            <div className="ml-7">
              <div className="text-xl font-semibold">{entry.event}</div>
              <div className="text-gray-700">{entry.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
