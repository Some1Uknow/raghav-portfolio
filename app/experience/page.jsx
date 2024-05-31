const timelineData = [
  {
    date: "Summer 2024",
    event: "Open Source Contributor - APIVerse | GirlScript Summer of Code 2024 | Remote, IN",
    description: (
      <ul className="list-disc ml-6 mt-2">
        <li>Contributed to APIVerse, a project which is used to store all kinds of APIs developers need.</li>
        <li>Developed a Quote API, which can fetch user quotes based on the parameters.</li>
        <li>Implemented GET route to fetch the quotes from a json file in the backend based on the genre and the number of quotes.</li>
        <li>Wrote a clean and easy to read documentation for the user.</li>
        <li>Skills - Express.js, Node.js, REST APIs, Git, Github.</li>
      </ul>
    ),
  },
];

const page = () => {
  return (
    <div className="flex flex-col items-center px-4 py-8">
    <div className="mx-2 md:mx-36">
      {timelineData.map((entry, index) => (
        <div key={index} className="mb-8">
          <div className="flex items-center mb-2">
            {index !== 0 && (
              <div className="absolute top-0 left-4 md:left-6 w-0.5 h-full bg-gray-300"></div> 
            )}
            <div className="ml-1 md:ml-2 w-6 h-6 bg-gray-300 rounded-full z-10"></div> 
            <div className="text-lg font-semibold ml-4 md:ml-8">{entry.date}</div> 
          </div>
          <div className="ml-7 md:ml-14">
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
