import React from "react";

function FriendsCard({ dp, Name }) {
  return (
    <div className="relative rounded p-4 items-center bg-white dark:bg-slate-800 flex gap-4">
      {dp ? (
        <div className="rounded-full h-12 aspect-square border-black dark:border-slate-300 border-[1px]">
          <img src={dp} className="object-cover h-full w-full" alt="Profile" />
        </div>
      ) : (
        <div className="rounded-full h-12 aspect-square border-black bg-slate-500 dark:border-slate-300 border-[1px]"></div>
      )}
      <div className="text-slate-800 cursor-pointer dark:text-slate-300 ">{Name}</div>
      <div className="absolute cursor-pointer right-3 text-slate-800 dark:text-slate-100">
        <span class="material-symbols-outlined">more_vert</span>
      </div>
    </div>
  );
}

export default FriendsCard;
