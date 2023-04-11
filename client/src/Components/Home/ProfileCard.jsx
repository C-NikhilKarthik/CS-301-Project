import React from "react";

function ProfileCard() {
  return (
    <div className="w-full flex flex-col items-center rounded-md overflow-hidden bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md">
      <div className='relative w-[16rem] mb-12 flex justify-center h-20 bg-[url("https://e1.pxfuel.com/desktop-wallpaper/151/445/desktop-wallpaper-flex-banner-backgrounds-design-scrapheap-challenge-com-brilliant-banner-backgrounds.jpg")]'>
        <div className="absolute bottom-0 h-16 w-16 bg-gradient-to-r translate-y-[50%] from-pink-500 via-red-500 to-yellow-500 rounded-full"></div>
      </div>
      <div className="text-xl mb-2 font-semibold">TheNetherAxe</div>
      <div className="text-sm mb-2 text-slate-500">@nikhilkarthik</div>
      <div className="text-sm mb-2">✨Posting and Learning✨</div>
      <div className="flex items-center border-[1px] border-r-0 border-l-0 border-slate-600 w-full p-2">
        <div className="border-r-[1px] flex flex-col py-4  items-center justify-start border-slate-600 w-full">
            <p className="font-semibold">6,664</p>
            <p className="text-sm text-slate-500">Following</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full">
            <p className="font-semibold">9,991</p>
            <p className="text-sm text-slate-500">Followers</p>
        </div>
      </div>
      <button className="py-8 text-sm font-semibold transition-[background-color] text-blue-700 dark:text-blue-500 hover:bg-slate-500/40 dark:hover:bg-slate-700 w-full">
        My Profile
      </button>
    </div>
  );
}

export default ProfileCard;
