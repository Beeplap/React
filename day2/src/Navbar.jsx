import React from "react";
import { TiHome } from "react-icons/ti";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { IoMdContacts } from "react-icons/io";

const Navbar = () => {
  return (
    <nav className=" gap-20 bg-transparent font-mono flex justify-left items-center  bg-gray-800 text-white p-4">
      <div className="font-black text-2xl"> AnimeHub</div>
      <ul className=" font-bold flex items-left justifycont-center gap-6 ">
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md ">
          {" "}
          <TiHome /> Home
        </li>
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          {" "}
          <MdOutlineMiscellaneousServices /> Latest Release
        </li>
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
        <MdOutlineWatchLater />
          Upcommings
        </li>
        <li className="flex items-center gap-2 hover:text-white cursor-pointer hover:scale-105 duration-300 hover:bg-gray-700 p-2 rounded-md">
          {" "}
          <IoMdContacts />
          Watch later
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
