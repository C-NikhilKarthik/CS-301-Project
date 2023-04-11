import React, { useEffect, useState } from "react";
import Navbar from "../Components/Main/Navbar";
import { HiHome } from "react-icons/hi";
import TOPBAR from "../Components/Home/TOPBAR";
import ProfileCard from "../Components/Home/ProfileCard";
import Recommendation from "../Components/Home/Recommendation";
import CARD from "../Components/Home/CARD";
function HOME() {
  const [list, Setlist] = useState([]);
  const [explore_url, setExplore_url] = useState([]);
  const generate_blogs = async (e) => {
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    const response = await fetch("/home", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    for (let i = 0; i < json.all_blogs.length; i++) {
      var blog_url = new URL("http://localhost:3000/slug");
      blog_url.searchParams.set("email", `${email}`);
      blog_url.searchParams.set("blogId", `${String(json.all_blogs[i]._id)}`);

      temp_list.push(
        <CARD
          image={"images/bg.jpg"}
          text={json.all_blogs[i].Post_text}
          Heading={json.all_blogs[i].Title}
          Owner={String(json.all_owners[i])}
          location={blog_url}
        />
      );
    }

    var url = new URL("http://localhost:3000/explore");
    url.searchParams.set("email", `${email}`);
    //console.log({explore_url:url})
    setExplore_url(url);
    Setlist(temp_list);
  };

  useEffect(() => {
    generate_blogs();
  },[]);
  return (
    <div className="w-screen h-screen pb-6 overflow-hidden flex flex-col bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed ">
      <div className="absolute inset-0 h-full w-full gridblock"></div>
      <Navbar explore_url={explore_url}/>
      <div className="flex h-full px-2 overflow-hidden sm:px-8 gap-8 z-[5]">
        <div className="md:flex md:flex-col gap-6 hidden rounded-md text-slate-700 dark:text-slate-100 text-lg">
          <ProfileCard />
          {/* <Recommendation /> */}
        </div>
        <div className="relative pb-16 rounded-md mb-8 flex flex-col items-center gap-6 w-full overflow-x-hidden overflow-y-scroll">
          <TOPBAR />
          {list}
        </div>
        <div className="z-[5] hidden lg:flex min-w-[300px] rounded-md dark:text-slate-100 bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md p-4">
          <p>Notifications</p>
        </div>
      </div>
    </div>
  );
}

export default HOME;