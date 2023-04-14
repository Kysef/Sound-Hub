import React from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import Player from "../components/Player";


export default function Home() {
  return (
    <div className=" max-h-screen h-screen max-w-screen  flex ">
      <Sidebar />

      <div className=" flex flex-col  h-full w-full">
        <Main className=""/>
        <Player className=" " />
      </div>

    </div>
  );
}
