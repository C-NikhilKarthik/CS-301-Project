import React from "react";

function Topbar() {
  return (
    <div className="absolute top-0 sm:gap-0 gap-4 z-10 w-full bg-slate-900/75 justify-between backdrop-blur-md backdrop-filter py-3 border-b-[1px] items-center px-4 border-slate-600 flex sm:flex-row flex-col ">
      <p className="text-slate-200 sm:w-auto w-full text-start text-lg whitespace-nowrap sm:text-2xl font-semibold">
        The BlogPenn
      </p>
      <ul className="flex sm:w-auto w-full justify-between sm:text-normal text-sm items-center gap-6 px-4">
        <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
          For you
        </li>
        <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
          Following
        </li>
      </ul>
    </div>
  );
}

export default Topbar;
