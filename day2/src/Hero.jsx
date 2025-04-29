import React from "react";


const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-700 text-white">
      <h1 className="text-4xl font-mono mb-4">Welcome to ArchWiki</h1>
      <p className="text-lg mb-8 font-mono">
        Your one-stop solution for all things Arch Linux.
      </p>
      <button className="bg-cyan-600 font-mono text-white px-4 py-2 rounded hover:bg-cyan-500 transition duration-300">
        Get Started
      </button>
    </div>
  );
};

export default Hero;
