import React from 'react'
import banner from "../Assets/2.jpg"
import {faGithub, faInstagram, faTwitter} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faKey,faUser,faPen, faMountainSun, faSpinner, faLock, faAddressCard} from '@fortawesome/free-solid-svg-icons'
import profilepic from"../Assets/profilepic.jpg"

export default function Profil() {
  return (
    <div className='h-screen w-screen'>
      <div className=' flex justify-end items-center h-[6vh] w-full bg-slate-500 '>
        <div className='px-4 mx-2 text-white text-lg hover:text-xl shadow-md rounded-xl	'>
                <FontAwesomeIcon icon={faMountainSun}/></div>
        <div className='px-4 text-lg hover:text-xl shadow-md rounded-xl mr-4'><FontAwesomeIcon icon={faMountainSun} /></div>
      </div>
      
      <div className=' mx-20'>
        <div className='h-48'><img src={banner} className="object-cover h-full w-full  "/></div>
        <div className=' flex  h-[69vh] w-full '>
          
          <div className=' flex  flex-col  py-20 w-1/4  text-white bg-gray-900 rounded-bl-md'>

            <img src={profilepic} className="absolute w-32 h-32 object-cover left-40 top-48 rounded-md shadow-md"/>
            <div className=' profil-item border-t'><FontAwesomeIcon icon={faUser} className="px-4"/>Account Overview</div>
            <div className=' profil-item'><FontAwesomeIcon icon={faPen} className="px-4"/>Edit Profile</div>
            <div className=' profil-item'><FontAwesomeIcon icon={faKey} className="px-4"/>Password</div>
            <div className=' profil-item'><FontAwesomeIcon icon={faLock} className="px-4"/>Privacy Settings </div>
            <div className=' profil-item'><FontAwesomeIcon icon={faSpinner} className="px-4"/>Recover Playlists </div>
            <div className=' profil-item'><FontAwesomeIcon icon={faAddressCard} className="px-4"/>About Us </div>
          </div>

          {/* editpart */}
          <div className='w-full bg-zinc-600 rounded-br-md'>
            
            {/* Account Overview */}
            <div className='mx-20 my-12 w-auto  	'>

              <div className='flex justify-between  '>
                <div className='mb-4  text-4xl font-bold'> Account Overview</div>
                
              </div>

              <div className='mb-6 text-2xl font-bold px-2 mt-4 '>Profile</div>
              <div className='mb-8  text-[18px]  '>

                <div className='mb-4 flex shadow-sm p-2'>
                  <div className='w-full text-zinc-400'>Username</div>
                  <div className='w-full'>Kysef</div>
                </div>
                <div className='mb-4 flex text-[18px] shadow-sm p-2'>
                  <div className='w-full text-zinc-400'>Email Address</div>
                  <div className='w-full'>AntiRetards69@gmail.com</div>
                </div>
                <div className='mb-4 flex text-[18px] shadow-sm p-2'>
                  <div className='w-full text-zinc-400'>Date of Birth</div>
                  <div className='w-full'>17 septembre 1969</div>
                </div>
                <div className='mb-4 flex w-full  text-[18px] shadow-sm p-2'>
                  <div className='w-full text-zinc-400'>Country</div>
                  <div className='w-full'>Maroc</div>    
                </div>

                <div className='border-gray-900 bg-gray-900  text-slate-400	w-fit p-3.5 rounded-2xl mx-4'>Edit Profile</div>
              </div>


              {/* editpart */}
          <div className='w-full bg-zinc-600 rounded-br-md'>
            
            {/* Editprofile */}
            <div className='mx-20 my-12 w-auto  	'>
              <div className='flex justify-between  '>
                <div className='mb-4  text-4xl font-bold'>Edit Profile</div> 
              </div>

              <div className=''>
                <div className=''>
                  <label className='text-lg'>Email</label><br />
                  <input type="email" className='p-2 w-full my-1 rounded-md '/><br />
                </div>
                
                <div className='my-2'>
                  <label className='text-lg'>Password</label><br />
                  <input type="password" className='p-2 w-full my-1 rounded-md'/><br />
                </div>

                <div className='my-2'>
                  <label className='text-lg'>Gender</label><br />
                  <select className='p-2 w-full my-1 rounded-md'>
                    <option value="">Prefert not to say</option>
                    <option value="">Male</option>
                    <option value="">Female</option>
                  </select><br />
                </div>

                <div className='my-2'>
                  <label className='text-lg'>Date of birth</label><br />
                  <div className='flex justify-between w-3/5 '>
                    <input type="number" className='rounded-md'/><br />
                    <select className='p-2 rounded-md'>
                      <option >January</option>
                      <option >February</option>
                      <option >March</option>
                      <option >April</option>
                      <option >May</option>
                      <option >June</option>
                      <option >July</option>
                      <option >August</option>
                      <option selected>September</option>
                      <option >October</option>
                      <option >November</option>
                      <option >December</option>
                    </select>
                    <input type="number"className='rounded-md'/>
                  </div>
                </div>

                <div className='my-2'>
                  <label className='text-lg '>Country or region</label><br />
                  <select className='p-2 w-full my-1 rounded-md'>
                    <option>Nigeria</option>
                  </select>
                </div>

                <div className='flex justify-end'>
                  <button className='border bg-white p-3 rounded-2xl mx-8 hover:m-1 hover:mx-8'>Cancel</button>
                  <button className='border border-indigo-500 bg-indigo-500 p-3 rounded-2xl hover:m-1'>Save profile</button>
                </div>

              </div>
            </div>
            
          
          </div>



              

              {/* About */}
              <div className=" flex h-fit ml-20 ">

                <div className='flex h-full  w-4/6 '>
                  <ul className=' w-3/5	 p-2'>
                    <li className='text-slate-400 text-[13px] font-extrabold pb-2	'>COMPANY</li>
                    <li className='text-zinc-400'>About</li>
                  </ul>
                  <ul className='w-3/5	p-2'>
                    <li className='text-slate-400 text-[13px] font-extrabold	 pb-2'>COMMUNITIES</li>
                    <li className='text-zinc-400'>About</li>
                  </ul>
                  <ul className='w-3/5	p-2'>
                    <li className='text-slate-400 text-[13px] font-extrabold pb-2	'>USERFUL LINKS</li>
                    <li className='text-zinc-400'>Support</li>
                    <li className='text-zinc-400'>Privacy Policy</li>
                    <li className='text-zinc-400'>Cookies</li>
                  </ul>
                </div>
                <div className=' flex w-4/12	justify-end '>
                  <button className='w-fit h-fit p-2 m-1'><FontAwesomeIcon icon={faInstagram} /></button>
                  <button className='w-fit h-fit p-2 m-1'><FontAwesomeIcon icon={faTwitter} /></button>
                  <button className='w-fit h-fit p-2 m-1'><FontAwesomeIcon icon={faGithub} /></button>
                </div>

              </div>

            </div>
            
          
          </div>
        </div>
      </div>
      
    </div>
  )
}

