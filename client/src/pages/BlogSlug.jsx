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
  const [textToRead, setTextToRead] = useState("");

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

  function getTextFromHtml(html,callback) {
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

  console.log(content);
  useEffect(() => {
    generate_blogs();
    getTextFromHtml(content, setText);
  }, [html]);
  return (
    <>
      {isLoading ? (<Loading />) : (
      <div className="overflow-hidden flex flex-col bg-bg3 dark:bg-bg2 bg-cover bg-top bg-fixed ">
        <div className="w-full p-3">
        <Navbar home_url={home_url}/>
        </div>
        <div className="w-full flex flex-col items-center gap-6 p-6 mx-auto sm:w-4/5 lg:2/3 sm:px-16 mb-16 md:px-24 lg:px-32">
          <div dangerouslySetInnerHTML={{ __html: content }} className="rounded-md w-full ql-editor bg-slate-300/40 dark:bg-slate-800/40 backdrop-blur-md text-slate-800 dark:text-slate-200"></div>
          <button onClick={handleSpeechButtonClick} className="text-white">
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
