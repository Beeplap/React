import React from "react";

const Hero = () => {
  return (
    <div className="font-mono flex flex-col items-center justify-center h-screen text-white ">
      <h1 className="text-4xl mb-4">Welcome to my AnimeHub</h1>
      <p className="text-lg mb-8 max-w-xl">
        Discover the latest and greatest in anime. From classic series to new
        releases, we have it all. Join our community and stay updated with the
        latest trends and news.
      </p>
      <div className="flex gap-4">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300">
          View My Work
        </button>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
