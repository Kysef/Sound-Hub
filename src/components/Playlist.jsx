import React from 'react'

function Playlist() {
  return (
    <div>
      <div className='border-b flex justify-around w-full  text-white '>
        <span className='flex justify-between w-16 items-center'>
          <div>#</div>
          <div>TITLE</div>
        </span>
        <span>ALBUM</span>
        <span>DATE ADDED</span>
        <span>+</span>
      </div >

      
      {/* rows_table */}
        <div className='flex flex-col h-fit  '>

          {/* first row of the table */}

          <div className='flex justify-around align-center h-full hover:bg-gray-900 rounded-md p-1'>
            <span className='flex justify-between w-24'>
              <span className='flex items-center justify-center'>ID</span>
              <span className='flex flex-col items-center justify-center'>
                <span>Title</span>
                <span>Producer</span>
              </span>
            </span>

            <span className=' flex items-center justify-center'>Album</span>
            <span className=' flex items-center justify-center'>Date Added</span>
            <span className=' flex items-center justify-center'>10:00</span>
          </div>
          <div className='flex justify-around align-center h-full hover:bg-gray-900 rounded-md p-1'>
            <span className='flex justify-between w-24'>
              <span className='flex items-center justify-center'>ID</span>
              <span className='flex flex-col items-center justify-center'>
                <span>Title</span>
                <span>Producer</span>
              </span>
            </span>

            <span className=' flex items-center justify-center'>Album</span>
            <span className=' flex items-center justify-center'>Date Added</span>
            <span className=' flex items-center justify-center'>10:00</span>
          </div>
          <div className='flex justify-around align-center h-full hover:bg-gray-900 rounded-md p-1'>
            <span className='flex justify-between w-24'>
              <span className='flex items-center justify-center'>ID</span>
              <span className='flex flex-col items-center justify-center'>
                <span>Title</span>
                <span>Producer</span>
              </span>
            </span>

            <span className=' flex items-center justify-center'>Album</span>
            <span className=' flex items-center justify-center'>Date Added</span>
            <span className=' flex items-center justify-center'>10:00</span>
          </div>
          <div className='flex justify-around align-center h-full hover:bg-gray-900 rounded-md p-1'>
            <span className='flex justify-between w-24'>
              <span className='flex items-center justify-center'>ID</span>
              <span className='flex flex-col items-center justify-center'>
                <span>Title</span>
                <span>Producer</span>
              </span>
            </span>

            <span className=' flex items-center justify-center'>Album</span>
            <span className=' flex items-center justify-center'>Date Added</span>
            <span className=' flex items-center justify-center'>10:00</span>
          </div>
          <div className='flex justify-around align-center h-full hover:bg-gray-900 rounded-md p-1'>
            <span className='flex justify-between w-24'>
              <span className='flex items-center justify-center'>ID</span>
              <span className='flex flex-col items-center justify-center'>
                <span>Title</span>
                <span>Producer</span>
              </span>
            </span>

            <span className=' flex items-center justify-center'>Album</span>
            <span className=' flex items-center justify-center'>Date Added</span>
            <span className=' flex items-center justify-center'>10:00</span>
          </div>
          <div className='flex justify-around align-center h-full hover:bg-gray-900 rounded-md p-1'>
            <span className='flex justify-between w-24'>
              <span className='flex items-center justify-center'>ID</span>
              <span className='flex flex-col items-center justify-center'>
                <span>Title</span>
                <span>Producer</span>
              </span>
            </span>

            <span className=' flex items-center justify-center'>Album</span>
            <span className=' flex items-center justify-center'>Date Added</span>
            <span className=' flex items-center justify-center'>10:00</span>
          </div>
          
          
          
          
          
        </div>

      
    </div>
  )
}

export default Playlist
