import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-orange-500 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">  
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2s-2-.9-2-2s.9-2 2-2m3.9 6.1c-.4-.4-1.1-1.1-2.4-1.1H11C8.2 7 6 4.8 6 2H4c0 3.2 2.1 5.8 5 6.7V22h2v-6h2v6h2V10.1l4 3.9l1.4-1.4z"></path></svg>
          
           </div>
        
        <ul className="flex space-x-6 text-white">
          <li className="hover:text-gray-300">
            <a href="#">Home</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#">About</a>
          </li>
          <li className="hover:text-gray-300">
            <a href="#">Contact</a>
          </li>
          
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
