import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

function Navbar() {
  const [showsidebar, setshowsidebar] = useState(false);

  useEffect(() => {
    let timeoutId;

    if (showsidebar) {
      timeoutId = setTimeout(() => {
        setshowsidebar(false);
      }, 30000); // Hide after 30 seconds
    }

    return () => clearTimeout(timeoutId); // Cleanup on state change/unmount
  }, [showsidebar]);

  return (
    <div>
        <div className='flex justify-center items-center' >
      <nav className='bg-[#C0C0C0] h-14 items-center w-90 rounded-4xl p-2 mt-5 flex justify-center'>
        <ul className='flex  gap-20'>
          <li className='p-1 w-15 flex justify-center font-medium text-gray-900 hover:bg-[#948979] rounded-2xl  '>
            <button className='hover:cursor-pointer' onMouseEnter={() => setshowsidebar(true)}>Menu</button>
          </li>
          <li className='p-1 w-15 flex justify-center font-medium text-gray-900 hover:bg-[#948979] rounded-2xl hover:cursor-pointer'>Home</li>
          <li className='p-1 w-15 flex justify-center font-medium text-gray-900 hover:bg-[#948979] rounded-2xl hover:cursor-pointer'>About</li>
        </ul>
      </nav>
</div>
      {showsidebar && <Sidebar />}
    </div>
    
  );
}

export default Navbar;
