import React, { useEffect, useState } from "react";
import Navbar from "../Components/Main/Navbar";
// import { HiHome } from "react-icons/hi";
import TOPBAR from "../Components/Home/TOPBAR";
import ProfileCard from "../Components/Home/ProfileCard";
import Recommendation from "../Components/Home/Recommendation";
import CARD from "../Components/Home/CARD";
import Loading from './Loading.jsx'
import { MdAddCircle } from "react-icons/md";

function Explore() {
  const [list, Setlist] = useState([]);
  const [home_url, Sethome_url] = useState("");
  const [yourblogs_url, setYourblogs_url] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [UserName, setUserName] = useState('');
  const [profile, setProfile] = useState([]);
  const [numBlogs, setNumBlogs] = useState(0);
  const [tot_numBlogs, setTotNumBlogs] = useState(0);


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
    setIsLoading(true);
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
    setUserName(json.UserName);

    const shuffled_blogs = json.all_blogs;

    for (let i = 0; i < shuffled_blogs.length; i++) {
      urlParams.set('email', email);
      urlParams.set('blogId', String(json.all_blogs[i]._id));
      var blog_url = window.location.pathname.replace('/explore', '/slug') + '?' + urlParams.toString();
      temp_list.push(
        <CARD
          key={json.all_blogs[i]._id}
          id={json.all_blogs[i]._id}
          Likes={json.all_blogs[i].Likes}
          image={"images/bg.jpg"}
          text={shuffled_blogs[i].Desc}
          Heading={shuffled_blogs[i].Heading}
          Owner={String(json.all_owners[i])}
          location={blog_url}
        />
      );
    }
    urlParams.delete('blogId');
    urlParams.set('email', email);
    var url = window.location.pathname.replace('/explore', '/home') + '?' + urlParams.toString();
    Sethome_url(url);
    Setlist(temp_list);
    urlParams.delete('blogId');
    urlParams.set('email', email);
    const profile_url = window.location.pathname.replace('/explore', '/profile') + '?' + urlParams.toString();
    var url2 = window.location.pathname.replace('/explore', '/yourblogs') + '?' + urlParams.toString();
    setYourblogs_url(url2)
    setProfile(profile_url);
    setIsLoading(false);

  };

  const get_more_blogs = async () => {
    let temp_list = [...list];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    const response = await fetch("/get_more_blogs_explore", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
        blog_num: numBlogs,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    for (let i = json.all_blogs.length - 1; i > -1; i--) {
      urlParams.set("email", email);
      urlParams.set("blogId", String(json.all_blogs[i]._id));
      var blog_url =
        window.location.pathname.replace("/home", "/slug") +
        "?" +
        urlParams.toString();
      temp_list.push(
        <CARD
          image={"images/bg.jpg"}
          text={json.all_blogs[i].Desc}
          Heading={json.all_blogs[i].Heading}
          Owner={String(json.all_owners[i])}
          location={blog_url}
        />
      );
    }

    Setlist(temp_list);
    console.log("list length", list.length);
    setNumBlogs(json.blog_count);
    console.log(numBlogs, tot_numBlogs);
    const button = document.getElementById("SeeMore_button");
    if (numBlogs === tot_numBlogs) {
      button.style.display = "none";
    }
  };

  useEffect(() => {
    generate_blogs();
  }, []);

  return (
    <>{isLoading ? (<Loading />) : (
      <div className="w-screen h-screen pb-6 overflow-hidden flex flex-col bg-bg3 dark:bg-bg2 bg-cover bg-center bg-fixed ">
        <div className="absolute inset-0 h-full w-full gridblock"></div>
        <Navbar UserName={UserName} home_url={home_url} yourblogs_url={yourblogs_url} />
        <div className="flex h-full px-8 gap-8 z-[5]">
          <div className="md:flex md:flex-col gap-6 hidden rounded-md text-slate-700 dark:text-slate-100 text-lg">
            <ProfileCard url={profile}/>
            <a href="/createblog" className="bg-blue-600 w-full px-2 flex justify-center gap-4 items-center rounded-full py-3 text-slate-200">
              <MdAddCircle className="text-xl" />
              <p>Create Blog</p>
            </a>
          </div>
          <div className="relative pb-16 rounded-md mb-8 flex flex-col items-center  gap-6 w-full overflow-y-scroll">
            <TOPBAR />
            {list}
            <button
                onClick={get_more_blogs}
                id="SeeMore_button"
                className="text-white w-fit bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
              >
                see more
              </button>
          </div>
          <div className="z-[5] hidden xl:flex min-w-[300px] rounded-md dark:text-slate-100 bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md p-4">
            <p>Notifications</p>
          </div>
        </div>
      </div>
    )}</>

  );
}

export default Explore;
