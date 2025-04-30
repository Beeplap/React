import React from "react";
import { TiHome } from "react-icons/ti";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdApps } from "react-icons/io";
import { RiAccountCircle2Fill } from "react-icons/ri";


import { IoSearch } from "react-icons/io5";
import { CgNotifications } from "react-icons/cg";
const Navbar = () => {
  return (
    <nav className=" gap-20 bg-transparent font-mono flex justify-left items-center  bg-gray-800 text-white p-4">
      <div className="font-black text-2xl"> AnimeHub</div>
      <ul className=" text-sm font-bold flex items-left justifycont-center gap-4 ">
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 p-2 ">
          {" "}
          <TiHome /> Home
        </li>
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 p-2 ">
          {" "}
          <MdOutlineMiscellaneousServices /> Latest Release
        </li>
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 p-2">
          <MdOutlineSystemUpdateAlt />
          Upcommings
        </li>
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 p-2">
          {" "}
          <MdOutlineWatchLater />
          Watch later
        </li>
      </ul>
      <ul className=" text-sm font-bold flex items-center justify-center gap-2 ml-auto mr-10">
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 pl-7 pr-7 rounded-md">
          {" "}
          <IoSearch />
        </li>
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          {" "}
          <IoMdApps />
        </li>
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          {" "}
          <CgNotifications />
        </li>
        <li className="flex items-center gap-2 hover:text-gray-200 duration-300 cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          {" "}
          <RiAccountCircle2Fill />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
