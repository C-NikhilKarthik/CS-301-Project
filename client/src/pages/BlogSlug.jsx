import React, { useState, useEffect } from "react";
import Footer from "../Components/Main/Footer";
import Switcher from "../Components/Switcher";
import "../Components/TextEditor/container.css";
import Comments from "../Components/BlogPage/Comments";
import Loading from "./Loading";
import Navbar from "../Components/Main/Navbar";

function BlogSlug() {
  const [heading, Setheading] = useState([]);
  const [owner, setOwner] = useState([]);
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

    const response1 = await fetch("/users", {
      method: "POST",
      body: JSON.stringify({
        email_login: email,
      }),
      headers: { "Content-type": "application/json" },
    });
    const json1 = await response1.json();
    const json = await response.json();
    SetContent(json.blog_details.Content);
    Setheading(json.blog_details.Heading);

    for (let i = 0; i < json1.length; i++) {
      if (json1[i]._id === json.blog_details.Owner) {
        setOwner(json1[i].UserName);
      }
    }
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
            <Navbar home_url={home_url} />
          </div>
          <div className="w-full flex flex-col items-center gap-6 p-6 mx-auto sm:w-4/5 lg:2/3 sm:px-16 mb-16 md:px-24 lg:px-32">
            <div className="rounded-md w-full ql-editor bg-slate-300/40 flex flex-col gap-8 dark:bg-slate-800/40 backdrop-blur-md text-slate-800 dark:text-slate-200">
              <h1 className="font-semibold text-2xl">{heading}</h1>
              <div>
                <div className="flex w-full text-sm justify-end">- {owner}</div>
                <div className="flex w-full text-xs justify-end text-slate-400">time</div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: content }} className="w-full" />
            </div>
            <Comments />
          </div>
          <Footer />
        </div>)}
    </>

  );
}

export default BlogSlug;
