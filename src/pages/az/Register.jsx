import React from 'react'

function Register() {
  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='border-2 border-indigo-700  	'>
        <div className='flex justify-start  p-4 gap-12 h-16'>
          <div className='hover:border-b-2 hover:border-red-500'>LOG IN</div>
          <div className='hover:border-b-2 hover:border-red-500' >SIGN UP</div>
        </div>
        <div className=' p-10'>
          <div className='flex flex-col gap-6	'>
            <input type="text"placeholder='Email ID'className='border-b border-indigo-400 outline-none p-2 focus:border-b border-indigo-600' />
            <input type="password" placeholder='Full Name'className='border-b border-indigo-400 outline-none p-2'/>
            <input type="password" placeholder='Username'className='border-b border-indigo-400 outline-none p-2'/>
            <input type="password" placeholder='Password'className='border-b border-indigo-400 outline-none p-2'/>
          </div>

          <div className=' flex flex-col gap-2 my-4'>
            <input type="checkbox" />Keep me signed in on this device
          </div>
          <button className='flex justify-center m-auto w-3/6 border border-indigo-600 bg-indigo-600 p-1 rounded-md'>Register</button>
        </div>
      </div>
    </div>

  )
}

export default Register