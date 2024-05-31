import React from "react";

const page = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-wrap justify-center gap-8">
        {/* Medium Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <h2 className="text-xl font-bold mb-2">Medium Profile</h2>
          <p className="text-gray-700 mb-4">Check out my articles and posts on Medium.</p>
          <a
            href="https://medium.com/@yourMediumUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Visit my Medium Profile
          </a>
        </div>

        {/* Hashnode Profile Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm">
          <h2 className="text-xl font-bold mb-2">Hashnode Profile</h2>
          <p className="text-gray-700 mb-4">Explore my blogs and tutorials on Hashnode.</p>
          <a
            href="https://hashnode.com/@yourHashnodeUsername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            Visit my Hashnode Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default page;
