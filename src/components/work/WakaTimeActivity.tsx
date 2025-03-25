import React from "react";

interface WakaTimeActivityProps {
  username: string;
}

const WakaTimeActivity: React.FC<WakaTimeActivityProps> = ({ username }) => {
  return (
    <section className="animate__animated animate__fadeIn bg-zinc-900/80 p-3 rounded-xl backdrop-blur-sm border border-zinc-800 hover:border-zinc-700 transition-all">
      <h2 className="text-base font-medium text-white mb-2 flex items-center">
        <span className="mr-3">
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
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        </span>
        WakaTime Activity
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
        {/* Language Distribution */}
        <div className="bg-zinc-950/70 rounded-lg overflow-hidden border border-zinc-800/50 hover:border-zinc-700/50 transition-all">
          <div className="aspect-w-16 aspect-h-8">
            <iframe
              src="https://wakatime.com/share/@some1uknow/5ac1c376-f4a6-4ccc-8e49-d5fc56b49d89.svg"
              className="w-full h-full"
              title="WakaTime Language Distribution"
              style={{ background: "transparent", border: "none" }}
            />
          </div>
        </div>

        {/* Coding Activity */}
        <div className="bg-zinc-950/70 rounded-lg overflow-hidden border border-zinc-800/50 hover:border-zinc-700/50 transition-all">
          <div className="aspect-w-16 aspect-h-8">
            <iframe
              src="https://wakatime.com/share/@some1uknow/522e4c68-21e0-4edf-b476-ebb2a598eec9.svg"
              className="w-full h-full"
              title="WakaTime Coding Activity"
              style={{ background: "transparent", border: "none" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WakaTimeActivity;