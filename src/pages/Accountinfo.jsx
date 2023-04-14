import {useState} from "react"
import React from 'react'
import Login from "./az/Login"
import Register from "./az/Register"


function Accountinfo() {

  const[isLogin,setIsLogin]=useState(true)

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='border-2 border-indigo-700  h-2/5 w-1/5'>
        <div className='flex justify-start  p-4 gap-12 h-16'>
          <div className='hover:border-b-2 hover:border-red-500'>LOG IN</div>
          <div className='hover:border-b-2 hover:border-red-500' >SIGN UP</div>
        </div>
        {isLogin ? <Login/> :<Register/>}
          
      </div>
    </div>
  )
  if (isLogin){
    return <Login/>
  }else{
    return <Register/>
  }
}
export default Accountinfo
