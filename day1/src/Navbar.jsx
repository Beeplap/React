import React from "react";
import image from "./assets/react.svg";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-gray-300 font-bold text-xl">  
        <img src={image} alt="Logo" className="h-8 w-8 mr-2 inline-block hover:scale-110 duration-200" />
        </div>
        
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-white duration-200 hover:scale-110 duration-200">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-white duration-200 hover:scale-110 duration-200">
            <a href="#">About</a>
          </li>
          <li className="hover:text-white duration-200 hover:scale-110 duration-200">
            <a href="#">Contact</a>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
