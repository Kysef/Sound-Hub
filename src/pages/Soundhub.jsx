import React from 'react'
import Denji from"../Assets/denji.jpg"
import PopularCards from"../components/PopularCards"


function Soundhub() {
  return (
    <div className='flex  flex-col w-screen h-screen '>
      <nav className=' flex w-full h-16	bg-indigo-700'>
        bzzzz
      </nav>
      <div className=' w-full h-full bg-indigo-400	'>
        <div className='p-10 py-4 '>
          <img src={Denji}/>
        </div>
        <p className='w-fit px-20 pb-3 text-xl font-semibold	'>Popular Albums</p>
        <div className='flex justify-evenly bg-indigo-700 h-[35vh]	p-6 mx-24'>    
          <PopularCards/>
          <PopularCards/>
          <PopularCards/>
          <PopularCards/>
          <PopularCards/>
        </div>
      </div>
    </div>
  )
}

export default Soundhub