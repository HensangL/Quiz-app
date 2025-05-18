import React from 'react'
import { Route ,Routes } from 'react-router'
import Home from './mainpage/Home'
import About from './mainpage/About'
function Routees() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
                        <Route path='/about' element={<About/>}/>

        </Routes>
    </div>
  )
}

export default Routees