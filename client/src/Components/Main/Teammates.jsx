import React, { useState } from "react";
import Teamcard from "./Teamcard";
import AOS from "aos";
import "aos/dist/aos.css";
function Teammates() {
  useState(() => {
    AOS.init();
  }, []);
  return (
    <div className=" relative w-full pb-10 flex-col flex bg-[url('https://tailwindcss.com/_next/static/media/8-dark@tinypng.7abc66a1.png')] bg-cover border-slate-600 border-b-[1px] bg-center">
      <div className="absolute inset-0 h-full w-full gridblock"></div>
      <div className="w-full flex justify-center py-10 text-blue-400">
        <p className="text-2xl font-semibold ">Contributors</p>
      </div>
      <div className="w-full z-[1] lg:px-[8rem] sm:grid sm:gap-3 sm:grid-cols-3">
        <div className="w-full h-full flex-col flex gap-3 dark:text-slate-400">
          <div data-aos="fade-right" data-aos-duration="300">
            <Teamcard name={"Avaneesh Sundarajan"} task={"Backend"} />
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="300"
            data-aos-delay="150"
          >
            <Teamcard name={"Anand Kumar Singh"} task={"Backend/Frontend"} />
          </div>
        </div>
        <div
          data-aos="zoom-in-down"
          data-aos-duration="300"
          data-aos-delay="300"
          className="w-full p-4 bg-slate-100 dark:bg-slate-800 rounded-md flex-col flex"
        >
          <div className="w-full dark:text-slate-400 h-full flex items-center">
            <div className="h-10 w-10 rounded-full bg-slate-400 dark:bg-white"></div>
            <div className="pl-2 flex flex-col">
              <p className="text-normal font-semibold whitespace-nowrap">
                C Nikhil Karthik
              </p>
              <p className="relative text-sm">Frontend/Backend</p>
            </div>
          </div>
        </div>
        <div className="w-full h-full flex-col flex gap-3 dark:text-slate-400">
          <div data-aos="fade-left" data-aos-duration="300">
            <Teamcard name={"Ankur De"} task={"Backend"} />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="300"
            data-aos-delay="150"
          >
            <Teamcard name={"Anish Kumar"} task={"Backend/Frontend"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teammates;
