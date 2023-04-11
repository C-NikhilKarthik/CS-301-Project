import React from "react";
import { FiMoreHorizontal } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { IoIosShare,IoIosChatbubbles } from "react-icons/io";
function CARD({ image, text, Heading, Owner, location }) {
  return (
    <div className="w-full rounded p-4 bg-slate-300/40 dark:bg-slate-800/40 backdrop-blur-md dark:text-slate-200 flex gap-3">
      <div className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400 h-12 aspect-square rounded-full" />
      <div className="flex flex-col w-full">
        <div className="flex justify-between items-center">
          <div className="flex sm:gap-2 flex-col sm:flex-row sm:items-center">
            <p className="text-xl font-semibold">{Owner}</p>
            <p className="text-sm text-slate-700 dark:text-slate-500">@elonmusk</p>
          </div>
          <FiMoreHorizontal className="text-2xl" />
        </div>
        <div className="text-slate-700 dark:text-slate-500 text-sm">8th April, 2023</div>

        <div className="grid sm:grid-cols-[2fr_3fr] grid-rows-[auto_1fr] mt-5 gap-3">
          <img
            className="rounded-md border-2 border-slate-500 w-full object-cover"
            alt="blog"
            src={image}
            // src="https://wallpaperaccess.com/full/5667105.jpg"
          />
          <div className="text-base sm:ml-4 max-h-[16rem] flex flex-col gap-4 items-end text-justify overflow-hidden">
            <p className="text-xl w-full">{Heading}</p>
            {text}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:items-center pt-4 sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="bg-slate-300/70 dark:bg-slate-700 rounded-md p-3 flex items-center gap-3">
              <FaHeart />
              <p className="sm:flex hidden">Like</p>
            </div>
            <div className="bg-slate-300/70 dark:bg-slate-700 rounded-md p-3 flex items-center gap-3">
              <IoIosShare />
              <p className="sm:flex hidden">Share</p>
            </div>
            <div className="bg-slate-300/70 dark:bg-slate-700 rounded-md p-3 flex items-center gap-3">
              <IoIosChatbubbles />
              <p className="sm:flex hidden">Comment</p>
            </div>
          </div>
          <a
            type="button"
            href={location}
            className="text-white w-fit bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            Continue Reading
            <svg
              aria-hidden="true"
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CARD;