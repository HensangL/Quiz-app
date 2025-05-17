import React from 'react'

function Sidebar() {
  return (
    <div className='mt-9 ml-20'>
      
        <ul className='p-2 w-33 rounded-b-3xl  bg-[#C0C0C0]'>
             <li className='p-2 font-medium hover:cursor-pointer hover:bg-[#948979]  rounded-2xl'>
                Science
            </li>
             <li className='p-2 font-medium hover:cursor-pointer hover:bg-[#948979]  rounded-2xl'>Math</li>
             <li className='p-2 font-medium hover:cursor-pointer hover:bg-[#948979]  rounded-2xl'>Pop culture</li>
             <li className='p-2 font-medium hover:cursor-pointer hover:bg-[#948979]  rounded-2xl'>Physics</li>
             <li className='p-2 font-medium hover:cursor-pointer hover:bg-[#948979]  rounded-2xl'>Geography</li>
            </ul>
            
    </div>
  )
}

export default Sidebar