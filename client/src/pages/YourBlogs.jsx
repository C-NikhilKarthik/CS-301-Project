import React, { useState ,useEffect } from 'react'
import ProfileCard from '../Components/Home/ProfileCard';
import Navbar from '../Components/Main/Navbar';
import TOPBAR from '../Components/Home/TOPBAR';
import CARD from '../Components/Home/CARD';
import Loading from './Loading.jsx'



function YourBlogs() {
    const [list, Setlist] = useState([]);
    const [home_url, Sethome_url] = useState("");
    const [originallist,SetOriginal]=useState([]);
    const [explore_url, setExplore_url] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


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
      var url2 = new URL("http://localhost:3000/home")
      url.searchParams.set("email", `${email}`);
      url2.searchParams.set("email", `${email}`);
      //console.log({explore_url:url})
      setExplore_url(url);
      Sethome_url(url2);
      Setlist(temp_list);
      SetOriginal(temp_list);
      setIsLoading(false) ;
    };
    useEffect(() => {
      generate_blogs();
    }, []);
    return (
      <>{isLoading?(<Loading/>):(
        <div className="w-screen h-screen pb-6 overflow-hidden flex flex-col bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed ">
          <div className="absolute inset-0 h-full w-full gridblock"></div>
          <Navbar explore_url={explore_url} home_url={home_url}/>
          <div className="flex h-full px-2 overflow-hidden sm:px-8 gap-8 z-[5]">
            <div className="md:flex md:flex-col gap-6 hidden rounded-md text-slate-700 dark:text-slate-100 text-lg">
              <ProfileCard />
              {/* <Recommendation /> */}
            </div>
            <div className="relative pb-16 rounded-md mb-8 flex flex-col items-center gap-6 w-full overflow-x-hidden overflow-y-scroll">
              <TOPBAR/>
              {list}
            </div>
            <div className="z-[5] hidden lg:flex min-w-[300px] rounded-md dark:text-slate-100 bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md p-4">
              <p>Notifications</p>
            </div>
          </div>
        </div>
      )}</>
        
      );
}

export default YourBlogs