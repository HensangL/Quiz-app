import React from 'react'
import { Route ,Routes } from 'react-router'
import Home from './mainpage/Home'
function Routees() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
        </Routes>
    </div>
  )
}

export default Routees