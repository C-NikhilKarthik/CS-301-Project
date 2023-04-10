import React, { useEffect, useState } from "react";
import Navbar from "../Components/Main/Navbar";
import { HiHome } from "react-icons/hi";
import TOPBAR from "../Components/Home/TOPBAR";
import ProfileCard from "../Components/Home/ProfileCard";
import Recommendation from "../Components/Home/Recommendation";
import CARD from "../Components/Home/CARD";

function Explore() {
  const [list, Setlist] = useState([]);
  const [home_url, Sethome_url] = useState("");

  //   function shuffle(blogs)
  // {
  //     const seen=new Set()
  //     const arr=[]
  //     for(let i=0;i<blogs.length;i++)
  //     {
  //         let index=Math.floor(Math.random()*blogs.length)
  //         if(!seen.has())
  //         {
  //             arr.push(blogs[index])

  //         }
  //     }
  //     return arr
  // }

  const generate_blogs = async (state) => {
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");

    const response = await fetch("/explore", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    const shuffled_blogs = json.all_blogs;

    for (let i = 0; i < shuffled_blogs.length; i++) {
      temp_list.push(
        <CARD
          image={"images/bg.jpg"}
          text={shuffled_blogs[i].Post_text}
          Heading={shuffled_blogs[i].Title}
          Owner={String(shuffled_blogs[i]._id)}
        />
      );
    }

    var url = new URL("http://localhost:3000/home");
    url.searchParams.set("email", `${email}`);
    Sethome_url(url);
    Setlist(temp_list);
  };

  useEffect(() => {
    generate_blogs();
  }, []);

  return (
    <div className="w-screen h-screen pb-6 overflow-hidden flex flex-col bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed ">
      <div className="absolute inset-0 h-full w-full gridblock"></div>
      <Navbar home_url={home_url} />
      <div className="flex h-full px-8 gap-8 z-[5]">
        <div className="md:flex md:flex-col gap-6 hidden rounded-md text-slate-700 dark:text-slate-100 text-lg">
          <ProfileCard />
          <Recommendation />
        </div>
        <div className="relative pb-16 rounded-md mb-8 flex flex-col items-center  gap-6 w-full overflow-y-scroll">
          <TOPBAR />
          {list}
        </div>
        <div className="z-[5] hidden lg:flex min-w-[300px] rounded-md text-slate-100 bg-slate-400 dark:bg-slate-800 p-4">
          <p>Notifications</p>
        </div>
      </div>
    </div>
  );
}

export default Explore;
