import React, { useState, useEffect } from "react";
import Footer from "../Components/Main/Footer";
import Switcher from "../Components/Switcher";
import "../Components/TextEditor/container.css";
import Comments from "../Components/BlogPage/Comments";
import Loading from "./Loading";

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

    let url = new URL("http://localhost:3000/home")
    url.searchParams.set("email", `${email}`)
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
      {isLoading ? (<Loading />) : (<div className="w-full flex flex-col bg-[url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')] dark:bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-cover bg-center bg-fixed ">
        <div className="w-full p-3">
          <nav className="w-full backdrop-filter backdrop-blur-md flex py-4 px-6 items-center justify-between dark:bg-slate-700 rounded">
            <div className="text-lg font-semibold dark:text-slate-200">
              The BlogPenn
            </div>
            <div className="sm:flex hidden">
              <ul className="flex justify-between text-sm items-center gap-6 px-4">
                <a href={home_url} className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                  Home
                </a>
                <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                  Friends
                </li>
                <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                  Explore
                </li>
              </ul>
              <div className="flex border-l-[1px] items-center border-slate-200 px-2">
                <Switcher />
                <i className="fa fa-github text-2xl dark:hover:text-white cursor-pointer dark:text-slate-200 px-2"></i>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full flex flex-col items-center p-6 sm:p-16 md:p-24 lg:p-32">
          <div dangerouslySetInnerHTML={{ __html: content }} className="ql-editor text-slate-800 dark:text-slate-200"></div>
        </div>
        <Comments />
        <Footer />
      </div>)}
    </>

  );
}

export default BlogSlug;
