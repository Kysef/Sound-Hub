import React from 'react'
import {SliderData} from './SliderData'
import {FaArrowAltCircleLeft,FaArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'

const Imageslider=({})=>{

    return (
    <section className='flex justify-center items-center relative h-screen'>
      <FaArrowAltCircleLeft  className=" absolute "/>
      <FaArrowAltCircleRight  className=""/>
      {SliderData.map((slide,index)=>{
        return( <img src={slide.image} className="w-48 h-24"/>)
      })}
    </section>  
    );
    
    
}
export default Imageslider