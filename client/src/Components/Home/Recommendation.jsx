import React from "react";

function Recommendation() {
  return (
    <div className="bg-slate-800 rounded-md gap-4 w-full  p-6 flex flex-col">
      <p>Recommended</p>
      <div className="flex gap-4 justify-between items-center">
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-14 aspect-square rounded-full" />
        <div>
          <p className=" text-base ">Product Hunt</p>
          <p className="text-sm text-slate-500">@ProductHunt</p>
        </div>
        <button className="bg-slate-200 rounded-full font-semibold text-sm py-2 text-slate-900 h-fit w-fit px-3">
          Follow
        </button>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-14 aspect-square rounded-full" />
        <div>
          <p className=" text-base ">Product Hunt</p>
          <p className="text-sm text-slate-500">@ProductHunt</p>
        </div>
        <button className="bg-slate-200 rounded-full font-semibold text-sm py-2 text-slate-900 h-fit w-fit px-3">
          Follow
        </button>
      </div>
      <div className="flex gap-4 justify-between items-center">
        <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-14 aspect-square rounded-full" />
        <div>
          <p className=" text-base ">Product Hunt</p>
          <p className="text-sm text-slate-500">@ProductHunt</p>
        </div>
        <button className="bg-slate-200 rounded-full font-semibold text-sm py-2 text-slate-900 h-fit w-fit px-3">
          Follow
        </button>
      </div>
      <div className="mt-3 text-blue-400 font-semibold text-base cursor-pointer">Show More</div>
    </div>
  );
}

export default Recommendation;
