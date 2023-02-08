import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import SideBar from "../Components/SideBar";
import Notifications from "../Components/Notifications";
import Main from "../Components/Main";
import Bottombar from "../Components/Bottombar";

function Home() {
  useState(() => {
    AOS.init();
  }, []);
  return (
    <div className="bg-bg1 w-screen h-screen bg-cover bg-center p-1 sm:p-4">
      <div
        data-aos="fade-right"
        data-aos-duration="500"
        data-aos-offset="0"
        className="bg-black/40 w-full border-2 border-gray-500  h-full rounded-lg backdrop-blur-md overflow-hidden"
      >
        <div className="w-full h-full lg:hidden relative overflow-hidden flex bg-black/40">
          <Main/>
          <Bottombar/>
        </div>
        <div className="w-full h-full hidden sm:grid sm:grid-cols-[1fr_3fr_1fr]">
          <SideBar/>
          <Main/>
          <Notifications/>
        </div>
      </div>
    </div>
  );
}

export default Home;
