import React, { useState } from 'react';
import Sidebar from './Sidebar';
import categories from '../image/categories.png';
import { Link } from 'react-router-dom';  // Note: Use 'react-router-dom' instead of 'react-router'

function Navbar() {
  const [showsidebar, setshowsidebar] = useState(false);

  // Show sidebar when mouse enters button or sidebar
  // Hide sidebar when mouse leaves both

  const handleMouseEnter=()=> {
    setshowsidebar(true);
  };

  const handleMouseLeave = () => {
    setshowsidebar(false);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <nav className="bg-[#C0C0C0] h-14 items-center w-90 rounded-4xl p-2 mt-5 flex justify-center">
          <ul className="flex gap-20">
            <li
              className="p-1 w-15 flex justify-center font-medium text-gray-900 hover:bg-[#948979] rounded-2xl"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:cursor-pointer">
                <img src={categories} alt="categories" className="w-6" />
              </button>
              {showsidebar && (
  <div
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      position: 'absolute',   // overlay on top
             // optional styling
    }}
  >
    <Sidebar />
  </div>
)}
            </li>

            <li className="p-1 w-15 flex justify-center font-medium text-gray-900 hover:bg-[#948979] rounded-2xl hover:cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="p-1 w-15 flex justify-center font-medium text-gray-900 hover:bg-[#948979] rounded-2xl hover:cursor-pointer">
                            <Link to="/about">About</Link>

            </li>
          </ul>
        </nav>
      </div>

      
    </div>
  );
}

export default Navbar;
