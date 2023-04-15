import React, { useEffect, useState } from "react";
import Navbar from "../Components/Main/Navbar";
// import { HiHome } from "react-icons/hi";
import TOPBAR from "../Components/Home/TOPBAR";
import ProfileCard from "../Components/Home/ProfileCard";
// import Recommendation from "../Components/Home/Recommendation";
import CARD from "../Components/Home/CARD";
import Loading from './Loading.jsx'
import { MdAddCircle } from "react-icons/md";


function HOME() {
  const [list, Setlist] = useState([]);
  const [yourblogs_url, setYourblogs_url] = useState([]);
  const [originallist, SetOriginal] = useState([]);
  const [profile,setProfile] = useState([]);
  const [explore_url, setExplore_url] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [UserName, setUserName] = useState('');

  const generate_blogs = async (e) => {
    setIsLoading(true);
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
    setUserName(json.UserName);
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
      setIsLoading(false);
    }

    var url = new URL("http://localhost:3000/explore");
    var url2 = new URL("http://localhost:3000/yourblogs");
    var url3 = new URL("http://localhost:3000/profile");

    url.searchParams.set("email", `${email}`);
    url2.searchParams.set("email", `${email}`);
    url3.searchParams.set("email", `${email}`);
    //console.log({explore_url:url})
    setExplore_url(url);
    setYourblogs_url(url2);
    setProfile(url3);
    Setlist(temp_list);
    SetOriginal(temp_list);
  };

  async function handle_search(Search_query) {
    console.log(Search_query);

    if (Search_query !== "") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const email = urlParams.get("email");
      const response = await fetch("/search_query_home", {
        method: "POST",
        body: JSON.stringify({
          email_login: email,
          search_query: Search_query,
        }),
        headers: { "Content-type": "application/json" },
      });

      const json = await response.json();
      const temp_list2 = [];

      for (let i = 0; i < json.all_blogs.length; i++) {
        var blog_url = new URL("http://localhost:3000/slug");
        blog_url.searchParams.set("email", `${email}`);
        blog_url.searchParams.set("blogId", `${String(json.all_blogs[i]._id)}`);
        temp_list2.push(
          <CARD
            image={"images/bg.jpg"}
            text={json.all_blogs[i].Post_text}
            Heading={json.all_blogs[i].Title}
            Owner={String(json.all_owners[i])}
            location={blog_url}
          />
        );
      }
      Setlist(temp_list2);
    } else {
      Setlist(originallist);
    }
  }

  useEffect(() => {
    generate_blogs();
  }, []);
  return (
    <>
      {isLoading ? (<Loading />) :
        (<div className="w-screen h-screen pb-6 overflow-hidden flex flex-col bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed ">

          <div className="absolute inset-0 h-full w-full gridblock"></div>
          <Navbar UserName={UserName} explore_url={explore_url} yourblogs_url={yourblogs_url} />
          <div className="flex h-full px-2 overflow-hidden sm:px-8 gap-8 z-[5]">
            <div className="md:flex md:flex-col gap-6 hidden rounded-md text-slate-700 dark:text-slate-100 text-lg">
              <ProfileCard url={profile}/>
              <a href="/createblog" className="bg-blue-600 w-full px-2 flex justify-center gap-4 items-center rounded-full py-3 text-slate-200">
                <MdAddCircle className="text-xl" />
                <p>Create Blog</p>
              </a>
            </div>
            <div className="relative pb-16 rounded-md mb-8 flex flex-col items-center gap-6 w-full overflow-x-hidden overflow-y-scroll">
              <TOPBAR handle_search={handle_search} />
              {list}
            </div>
            <div className="z-[5] hidden lg:flex min-w-[300px] rounded-md dark:text-slate-100 bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md p-4">
              <p>Notifications</p>
            </div>
          </div>
        </div>)}
    </>
  );
}

export default HOME;