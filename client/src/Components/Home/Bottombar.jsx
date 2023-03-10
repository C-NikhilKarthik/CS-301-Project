import React from "react";

function Bottombar() {
  return (
    <div className="absolute lg:hidden bottom-0 backdrop-filter backdrop-blur-md bg-black/70 h-[3.5em] w-full border-t-[1px] flex justify-center border-gray-600">
      <div className="flex px-7 py-2 items-center justify-between w-[min(25rem,100%)] h-full">
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Home
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Explore
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Chat
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Bookmarks
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Settings
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          account_circle
        </span>
      </div>
    </div>
  );
}

export default Bottombar;
