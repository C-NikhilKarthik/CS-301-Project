import React, { useState, useEffect } from "react";
import Footer from "../Components/Main/Footer";
import Switcher from "../Components/Switcher";
import "../Components/TextEditor/container.css";
import Comments from "../Components/BlogPage/Comments";
import Loading from "./Loading";
import Navbar from "../Components/Main/Navbar";

function BlogSlug() {
  const [list, Setlist] = useState([]);
  const [content, SetContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [home_url, setHomeUrl] = useState("")
  const generate_blogs = async (e) => {
    setIsLoading(true);
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get("blogId");
    const email = urlParams.get("email");

    const response = await fetch("/readmore", {
      method: "POST",
      body: JSON.stringify({
        BlogId: blogId,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    SetContent(json.blog_details.Content);
    urlParams.delete('blogId');
    urlParams.set('email', email);
    const url = window.location.pathname.replace('/slug', '/home') + '?' + urlParams.toString();
    
    setHomeUrl(url)
    setIsLoading(false)
    // var url = new URL("http://localhost:3000/explore");
    // url.searchParams.set("email", `${email}`);
    // setExplore_url(url);

    //Setlist(temp_list);
  };

  console.log(content);
  useEffect(() => {
    generate_blogs();
  }, []);
  return (
    <>
      {isLoading ? (<Loading />) : (
      <div className="overflow-hidden flex flex-col bg-bg3 dark:bg-bg2 bg-cover bg-top bg-fixed ">
        <div className="w-full p-3">
        <Navbar home_url={home_url}/>
        </div>
        <div className="w-full flex flex-col items-center bg-slate-300/40 dark:bg-slate-800/40 backdrop-blur-md p-6 mx-auto sm:w-4/5 lg:2/3 sm:px-16 mb-16 md:px-24 lg:px-32">
          <div dangerouslySetInnerHTML={{ __html: content }} className="ql-editor text-slate-800 dark:text-slate-200"></div>
        </div>
        <Comments />
        <Footer />
      </div>)}
    </>

  );
}

export default BlogSlug;
