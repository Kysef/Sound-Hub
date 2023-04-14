import React from "react";
import Card from "./Card";
import Playlist from "./Playlist";
import { NavLink } from "react-router-dom";


export default function Main() {
  return (
    <div className="w-full h-full  bg-slate-800	box-border ">
      <div className="flex w-full justify-end pr-4 ">
        <NavLink to={"/Profil"} className="  bg-indigo-800 p-2 shadow-md my-2 box-border rounded-lg hover:bg-violet-500 ">
          Profile
        </NavLink>
      </div>
      <div className="flex justify-evenly flex-wrap gap-2 py-4 px-2 ">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>

      <div className=" flex justify-end mr-10 ">
        <input type="text" className="rounded-lg px-2" placeholder="Search in the playlist"/>
      </div>
      <div className="flex bg-slate-700 m-6 h-[44vh] rounded-lg mb-2 ">
        <div className="mx-7 flex flex-col w-full my-4 ">
          <Playlist/>
          
        </div>
      </div> 
    </div>
  );
}
