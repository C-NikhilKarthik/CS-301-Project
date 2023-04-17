import React, { useEffect, useState } from "react";

function ProfileCard({ url }) {
  const [data, setData] = useState({
    name: '',
    following: '',
    followers: ''
  })
  const generate_blogs = async (e) => {
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    const response = await fetch("/profile", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
      }),
      headers: { "Content-type": "application/json" },
    });

    const response2 = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
      }),
      headers: { "Content-type": "application/json" },
    });
    const json2 = await response2.json();
    const json = await response.json();
    var followers = 0;
    const id = json._id;
    // for (let i = 0; i < json2.length; i++) {
    //   if (json2[i].Friends.length === 0) {
    //     continue;
    //   }
    //   else {
    //     for (let j = 0; j < json2[i].Friends.length; j++) {
    //       if (json2[i].Friends[j] === id) {
    //         followers++;
    //       }
    //     }
    //   }
    // }

    setData({ name: json.UserName, following: (json.Friends.length > 0) ? json.Friends.length : 0, followers: followers });
    console.log(data)
  }


  useEffect(() => {
    generate_blogs();
  }, [])
  return (
    <div className="w-full flex flex-col items-center rounded-md overflow-hidden bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md">
      <div className='relative mb-12 flex justify-center h-20 bg-[url("https://e1.pxfuel.com/desktop-wallpaper/151/445/desktop-wallpaper-flex-banner-backgrounds-design-scrapheap-challenge-com-brilliant-banner-backgrounds.jpg")]'>
        <div className="absolute bottom-0 h-16 w-16 bg-gradient-to-r translate-y-[50%] from-pink-500 via-red-500 to-yellow-500 rounded-full"></div>
      </div>
      <div className="text-xl mb-2 font-semibold">{data.name}</div>
      <div className="text-sm mb-2 text-slate-500">@nikhilkarthik</div>
      <div className="text-sm mb-2">✨Posting and Learning✨</div>
      <div className="flex items-center border-[1px] border-r-0 border-l-0 border-slate-600 w-full p-2">
        <div className="border-r-[1px] flex flex-col px-10 py-4  items-center justify-start border-slate-600 w-full">
          <p className="font-semibold">{data.following}</p>
          <p className="text-sm text-slate-500">Following</p>
        </div>
        <div className="flex flex-col items-center px-10 justify-center w-full">
          <p className="font-semibold">{data.followers}</p>
          <p className="text-sm text-slate-500">Followers</p>
        </div>
      </div>
      <a href={url} className="py-8 flex justify-center text-sm font-semibold transition-[background-color] text-blue-700 dark:text-blue-500 hover:bg-slate-500/40 dark:hover:bg-slate-700 w-full">
        My Profile
      </a>
    </div>
  );
}

export default ProfileCard;
