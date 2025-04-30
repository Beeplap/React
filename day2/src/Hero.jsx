import React from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
const Hero = () => {
  return (
    <div className="font-mono flex flex-col items-end justify-center mr-20 mt-20 h-screen text-white ">
      <h1 className="text-4xl font-bold mb-4">Your Name</h1>
      <p className="text-lg mb-8 max-w-xl text-right">
      Two souls, separated by time and space, begin to swap bodies. As their lives intertwine,
       a deep connection forms — one that transcends the boundaries of fate itself.
      </p>
      <div className="flex gap-4">
        <button className=  "flex items-center gap-2 bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 duration-300 transition duration-300">
         More info <IoInformationCircleOutline />
        </button>
        <button className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-md hover:bg-gray-400 duration 300 transition duration-300">
          Play <FaPlay />
        </button>
        
      </div>
    </div>
  );
};

export default Hero;
