import React from "react";

function Bottombar() {
  return (
    <div className="absolute bottom-0 bg-black/70 h-[3.5em] w-full border-t-[1px] flex justify-center border-gray-600">
      <div className="flex px-7 py-2 items-center justify-between min-w-[20rem] h-full">
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Home
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Search
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Notifications
        </span>
        <span className="cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
          Mail
        </span>
      </div>
    </div>
  );
}

export default Bottombar;
