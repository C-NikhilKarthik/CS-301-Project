import React, { useState, useEffect } from 'react'
import ProfileCard from '../Components/Home/ProfileCard';
import Navbar from '../Components/Main/Navbar';
import TOPBAR from '../Components/Home/TOPBAR';
import CARD from '../Components/Home/CARD';
import Loading from './Loading.jsx'
import { MdAddCircle } from 'react-icons/md';



function YourBlogs() {
  const [list, Setlist] = useState([]);
  const [home_url, Sethome_url] = useState("");
  const [originallist, SetOriginal] = useState([]);
  const [explore_url, setExplore_url] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [UserName, setUserName] = useState('');
  const [profile, setProfile] = useState([]);



  const generate_blogs = async (e) => {
    setIsLoading(true);
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const email = urlParams.get("email");
    const response = await fetch("/your_blogs", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();
    setUserName(json.UserName);

    // console.log(json);
    for (let i = json.all_blogs.length - 1; i > -1; i--) {
      urlParams.set('email', email);
      urlParams.set('blogId', String(json.all_blogs[i]._id));
      var blog_url = window.location.pathname.replace('/yourblogs', '/slug') + '?' + urlParams.toString();

      urlParams.set('email', email);
      urlParams.set('blogId', String(json.all_blogs[i]._id));
      var blog_edit_url = window.location.pathname.replace('/yourblogs', '/edit') + '?' + urlParams.toString();

      temp_list.push(
        <CARD
          key={json.all_blogs[i]._id}
          id={json.all_blogs[i]._id}
          image={"images/bg.jpg"}
          time={json.all_blogs[i].Time}
          Likes={json.all_blogs[i].Likes}
          text={json.all_blogs[i].Desc}
          Heading={json.all_blogs[i].Heading}
          Owner={String(json.all_owners[i])}
          location={blog_url}
          yourblog={true}
          edit_location={blog_edit_url}
        />
      );
    }
    urlParams.delete('blogId');
    urlParams.set('email', email);
    var url2 = window.location.pathname.replace('/yourblogs', '/home') + '?' + urlParams.toString();
    urlParams.delete('blogId');
    urlParams.set('email', email);
    const profile_url = window.location.pathname.replace('/yourblogs', '/profile') + '?' + urlParams.toString();
    var url = window.location.pathname.replace('/yourblogs', '/explore') + '?' + urlParams.toString();
    //console.log({explore_url:url})
    setExplore_url(url);
    Sethome_url(url2);
    Setlist(temp_list);
    setProfile(profile_url);
    SetOriginal(temp_list);
    setIsLoading(false);
  };

  async function handle_search(Search_query) {
    console.log(Search_query);

    if (Search_query !== "") {
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const email = urlParams.get("email");
      const response = await fetch("/search_query_yourblogs", {
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
        urlParams.set("email", email);
        urlParams.set("blogId", String(json.all_blogs[i]._id));
        var blog_url =
          window.location.pathname.replace("/home", "/slug") +
          "?" +
          urlParams.toString();
        temp_list2.push(
          <CARD
            image={"images/bg.jpg"}
            text={json.all_blogs[i].Desc}
            Heading={json.all_blogs[i].Heading}
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
    <>{isLoading ? (<Loading />) : (
      <div className="w-screen h-screen pb-6 overflow-hidden flex flex-col bg-bg3 dark:bg-bg2 bg-cover bg-center bg-fixed ">
        <div className="absolute inset-0 h-full w-full gridblock"></div>
        <Navbar UserName={UserName} explore_url={explore_url} home_url={home_url} />
        <div className="flex h-full px-2 overflow-hidden sm:px-8 gap-8 z-[5]">
          <div className="md:flex md:flex-col gap-6 hidden rounded-md text-slate-700 dark:text-slate-100 text-lg">
            <ProfileCard url={profile}/>
            <a href="/createblog" className="bg-blue-600 w-full px-2 flex justify-center gap-4 items-center rounded-full py-3 text-slate-200">
              <MdAddCircle className="text-xl" />
              <p>Create Blog</p>
            </a>
          </div>
          <div className="relative rounded-md flex flex-col items-center gap-6 w-full overflow-x-hidden overflow-y-scroll">
            <TOPBAR handle_search={handle_search}/>
            {list}
          </div>
          <div className="z-[5] hidden xl:flex min-w-[300px] rounded-md dark:text-slate-100 bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md p-4">
            <p>Notifications</p>
          </div>
        </div>
      </div>
    )}</>

  );
}

export default YourBlogs