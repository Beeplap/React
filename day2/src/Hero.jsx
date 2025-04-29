import React from "react";


const Hero = () => {
  return (
    <div className="font-mono flex flex-col items-center justify-center h-screen bg-gray-700 text-white ">
      <h1 className="text-4xl  mb-4">Welcome to my Profile</h1>
      <p className=" text-lg mb-8 max-w-xl">
        I am a passionate developer with a love for creating beautiful and
        functional web applications. Let's work together to bring your ideas to
        life!
      </p>
      <div className="flex gap-4">
      <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300 ">
        View My Work
      </button>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 ">
        Contact Me
      </button>
      </div>
    </div>
  );
};

export default Hero;
