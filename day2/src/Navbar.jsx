import React from "react";
import { TiHome } from "react-icons/ti";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { FaInfo } from "react-icons/fa6";
import { IoMdContacts } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className="font-mono flex justify-between items-center  bg-gray-800 text-gray-300 p-4">
      <div className="font-black"> Portfolio</div>
      <ul className="  flex items-center justifycont-center gap-6 ">
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md ">
          {" "}
          <TiHome /> Home
        </li>
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          {" "}
          <MdOutlineMiscellaneousServices /> Services
        </li>
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          <FaInfo />
          About
        </li>
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          {" "}
          <IoMdContacts />
          Contacts
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
