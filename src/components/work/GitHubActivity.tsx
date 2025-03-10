import React from "react";
import Image from "next/image";

interface GitHubActivityProps {
  username: string;
}

const GitHubActivity: React.FC<GitHubActivityProps> = ({ username }) => {
  return (
    <section className="animate__animated animate__fadeIn mx-20 mb-10 bg-zinc-900/80 p-4 rounded-xl mt-8 backdrop-blur-sm border border-zinc-800">
      <h2 className="text-xl font-medium text-white mb-3 flex items-center">
        <span className="mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </span>
        GitHub Activity
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* GitHub Contribution Heatmap - 50% width */}
        <div className="md:col-span-2 bg-zinc-950/70 rounded-md overflow-hidden border border-zinc-800/50 h-full flex items-center">
          <Image
            src={`https://ghchart.rshah.org/${username}`}
            alt="GitHub Contribution Heatmap"
            width={1000}
            height={170}
            className="w-full h-auto bg-zinc-950 p-2 rounded-md"
          />
        </div>

        {/* Grid of 2 tiles next to heatmap */}
        <div className="md:col-span-1 grid grid-cols-1 gap-3 h-full">
          {/* GitHub Streak Stats */}
          <div className="bg-zinc-950/70 rounded-md overflow-hidden border border-zinc-800/50">
            <Image
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${username}&theme=dark&hide_border=true&card_width=400&background=00000000&stroke=2D3742`}
              alt="GitHub Streak Stats"
              width={400}
              height={155}
              className="w-full h-auto"
            />
          </div>
        </div>

        {/* Remaining tiles below in a grid */}
        <div className="md:col-span-4 grid grid-cols-1 md:grid-cols-[1fr_1fr_2fr] gap-3">
          {/* GitHub Languages */}
          <div className="bg-zinc-950/70 rounded-md overflow-hidden border border-zinc-800/50">
            <Image
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=dark&hide_border=true&card_width=400&langs_count=6&bg_color=00000000`}
              alt="GitHub Top Languages"
              width={400}
              height={155}
              className="w-full h-auto"
            />
          </div>

          {/* GitHub Trophies */}
          <div className="bg-zinc-950/70 rounded-md overflow-hidden border border-zinc-800/50">
            <Image
              src={`https://github-profile-trophy.vercel.app/?username=${username}&theme=darkhub&no-frame=true&margin-w=4&margin-h=4&row=1&column=4&no-bg=true`}
              alt="GitHub Trophies"
              width={800}
              height={155}
              className="w-full h-auto"
            />
          </div>

          {/* GitHub Activity Graph */}
          <div className="bg-zinc-950/70 rounded-md overflow-hidden border border-zinc-800/50 h-full flex items-center">
            <Image
              src="https://github-readme-activity-graph.vercel.app/graph?username=Some1Uknow&bg_color=000000&color=ffffff&line=c800ff&point=ffffff&area=true&hide_border=true"
              alt="GitHub Contribution Heatmap"
              width={1000}
              height={170}
              className="w-full h-auto bg-zinc-950 p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GitHubActivity;
