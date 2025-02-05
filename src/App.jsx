import React, { useEffect, useState } from 'react'
import HelatCare from './Pages/HelatCare'
import {setLocalstorage} from './Utils/LoaclData'
import Navbar from './Components/Navbar'

const App = () => {

  useEffect(()=>{
    setLocalstorage()
  },[])
  // localStorage.clear()

  return (
    <>
      <div className='w-full realtive'>
        <Navbar/>
        <HelatCare/>
      </div>
    </>
  )
}

export default App