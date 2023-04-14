import React from "react";
import logo from "../Assets/logo.png";
import Guts from "../Assets/guts.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCoffee, faHouse, faPlus, faSearch} from '@fortawesome/free-solid-svg-icons'


export default function Sidebar() {
  return (
    <section className=" bg-gray-900	min-w-[16rem] max-w-[16rem]  max-h-full flex flex-col items-center gap-6 pt-6">
      <div className=" flex justify-center items-center overflow-hidden mb-12 w-44 h-fit ">
        <img src={logo} className="h-full w-full object-cover" />
      </div>

      <div className="nav-item"><FontAwesomeIcon icon={faHouse} className="px-2"/>Home </div>
      <div className="nav-item"><FontAwesomeIcon icon={faSearch} className="px-2"/>Search </div>
      <div className="nav-item"><FontAwesomeIcon icon={faPlus} className="px-2"/> Create Playlists</div>

      <div className="mt-auto rounded ">
        <img src={Guts} className="object-cover w-60 h-60" />
      </div>
    </section>
  );
}
