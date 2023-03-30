import React from "react";

function OptionButton({ icon,onClick }) {
  return (
    <div onClick={onClick} className="cursor-pointer aspect-square h-10 flex items-center transition-[background-color] duration-300 hover:bg-slate-300 hover:dark:bg-slate-600 rounded-md">
      <span class="h-full flex items-center justify-center w-full material-symbols-outlined text-2xl">{icon}</span>
    </div>
  );
}

export default OptionButton;
