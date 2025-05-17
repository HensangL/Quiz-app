import React from 'react'

function Sidebar() {
  return (
    <div className='mt-20'>
      <nav>
        <ul>
            <li>
                Categories
                <ol>
                    <ul>Science</ul>
                    <ul>Math</ul>              
                    <ul>Geology</ul>
                    <ul>Pop culture</ul>

                </ol>
            </li>
            </ul>
            </nav>
    </div>
  )
}

export default Sidebar