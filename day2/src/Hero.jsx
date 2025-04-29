import React from "react";

const Hero = () => {
  return (
    <div className="font-mono flex flex-col items-center justify-center h-screen text-white bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800">
      <h1 className="text-4xl mb-4 text-teal-400 text-shadow-lg/30">Welcome to my AnimeHub</h1>
      <p className="text-lg mb-8 max-w-xl text-gray-300">
        Discover the latest and greatest in anime. From classic series to new
        releases, we have it all. Join our community and stay updated with the
        latest trends and news.
      </p>
      <div className="flex gap-4">
        <button className="bg-teal-600 text-white px-6 py-3 rounded-md hover:bg-teal-700 hover:scale-110 duration-300">
          View My Work
        </button>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 hover:scale-110 duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
