import React from "react";

function InterestsCard({ text }) {
  return (
    <div className="hover:bg-cyan-400 font-semibold cursor-pointer transition-[background-color] duration-400 text-blue-500 rounded-md border-[1px] border-blue-400 p-2 w-fit h-fit flex gap-2">
      <div className="text-md">{text}</div>
      <span className="material-symbols-outlined">
        Add
      </span>
    </div>
  );
}

export default InterestsCard;
