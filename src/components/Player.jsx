import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart} from '@fortawesome/free-solid-svg-icons'

export default function Player() {
  return (
    <div className='flex justify-center items-center bg-indigo-500 w-full '>
      <div className='p-7 text-white'>
        <h1>Song Name </h1>
        <h1>Artist</h1>
      </div>
      <div className='  flex   p-7'>
        <input type="range"  />
      </div>
      <div>
        <FontAwesomeIcon icon={faHeart}/>
      </div>
    </div>
  )
}

