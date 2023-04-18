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
  const [explore_url, setExplore_url] = useState([])
  const [yourblogs_url, setYourblogs_url] = useState([])
  const [time, setTime] = useState("");
  const [userName, setUserName] = useState("")

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
    const json = await response.json()
    SetContent(json.blog_details.Content);
    Setheading(json.blog_details.Heading);
    getTextFromHtml(json.blog_details.Content,setText)
    setTime(json.blog_details.Time);
    for (let i = 0; i < json1.length; i++) {
      if (json1[i]._id === json.blog_details.Owner) {
        setOwner(json1[i].UserName);
      }
      if(json1[i].EmailId === email){
        setUserName(json1[i].UserName)
      }
    }
    urlParams.delete('blogId');
    urlParams.set('email', email)
    const url = window.location.pathname.replace('/slug', '/home') + '?' + urlParams.toString();
    const url2 = window.location.pathname.replace('/slug', '/explore') + '?' + urlParams.toString();
    const url3 = window.location.pathname.replace('/slug', '/yourblogs') + '?' + urlParams.toString();

    setHomeUrl(url)
    setExplore_url(url2)
    setYourblogs_url(url3)
    setIsLoading(false)
    setTextToRead(json.blog_details.Content)
    // var url = new URL("http://localhost:3000/explore");
    // url.searchParams.set("email", `${email}`);
    // setExplore_url(url);

    //Setlist(temp_list);
  };

  //read speech:
  const [synthesis, setSynthesis] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  function startSpeech(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    const synth = window.speechSynthesis;

    synth.cancel();
    synth.speak(utterance);
    setIsPlaying(true);
    setSynthesis(synth);
  }

  function stopSpeech() {
    synthesis.cancel();
    setIsPlaying(false);
  }
  const [html, setHtml] = useState(content);
  const [text, setText] = useState("");

  const handleSpeechButtonClick = () => {
    if (!isPlaying) {
      startSpeech(text);
    } else {
      stopSpeech();
    }
  };

  function getTextFromHtml(html, callback) {
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, "text/html");
    let text = "";

    const treeWalker = doc.createTreeWalker(doc.body, NodeFilter.SHOW_TEXT, null, false);
    while (treeWalker.nextNode()) {
      text += treeWalker.currentNode.textContent.trim() + " ";
    }

    callback(text);
  }

  // const handleSpeakButtonClick = () => {
  //   const text = getTextFromHtml(content);

  // const utterance = new SpeechSynthesisUtterance(text);
  // window.speechSynthesis.speak(utterance);
  // };

  useEffect(() => {
    generate_blogs();
  }, []);
  return (
    <>
      {isLoading ? (<Loading />) : (
        <div className="overflow-hidden flex flex-col bg-bg3 dark:bg-bg2 bg-cover bg-top bg-fixed ">
          <div className="w-full p-3">
            <Navbar UserName={userName} explore_url={explore_url} yourblogs_url={yourblogs_url} home_url={home_url} />
          </div>
          <div className="w-full flex flex-col items-center gap-6 p-6 mx-auto sm:w-4/5 lg:2/3 sm:px-16 mb-16 md:px-24 lg:px-32">
            <div className="rounded-md w-full ql-editor bg-slate-300/40 flex flex-col gap-8 dark:bg-slate-800/40 backdrop-blur-md text-slate-800 dark:text-slate-200">
              <h1 className="font-semibold text-2xl">{heading}</h1>
              <div>
                <div className="flex w-full text-sm justify-end">- {owner}</div>
                <div className="flex w-full text-xs justify-end text-slate-400">{time}</div>
              </div>
              <div dangerouslySetInnerHTML={{ __html: content }} className="w-full" />
            </div>
          <button onClick={handleSpeechButtonClick} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
      {isPlaying ? "Stop" : "Speak"}
    </button>
            <Comments />
          </div>
          <Footer />
        </div>)}
    </>

  );
}

export default BlogSlug;
