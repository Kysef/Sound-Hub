import React from 'react'
import playlistcover from "../Assets/playlistcover.jpg";



export default function Card() {
  return (
    <div className=' shadow-xl bg-slate-700 hover:bg-slate-500 rounded-lg flex flex-col items-center gap-2 h-fit py-3 w-60 '>
      <div className='h-52 w-52 overflow-hidden rounded-2xl   '>
        <img src={playlistcover} className="w-full h-full object-cover 	" />
      </div>
      <div className=' w-4/5 '>
        <h1 className=''>Greyyyyy</h1>
        <p className='text-white'>Destroy Lonely</p>
      </div>
    </div>
  )
}

