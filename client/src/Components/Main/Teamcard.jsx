import React from "react";

function Teamcard({ name, task }) {
  return (
    <div className="w-full items-start p-4 bg-slate-100 dark:bg-slate-800 rounded-md flex-col flex">
      <div className="w-full flex items-center">
        <div className="h-10 w-10 rounded-full bg-slate-400 dark:bg-white"></div>
        <div className="pl-2 flex flex-col">
          <p className="text-normal font-semibold whitespace-nowrap">{name}</p>
          <p className="relative text-sm">{task}</p>
        </div>
      </div>
    </div>
  );
}

export default Teamcard;
