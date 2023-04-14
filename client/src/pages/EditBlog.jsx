import React, { useState ,useEffect } from "react";
// import axios from "axios";
import Switcher from "../Components/Switcher";
import Footer from "../Components/Main/Footer";
import ReactQuill from "react-quill";
import "../Components/TextEditor/container.css";
import EditorToolbar, {
  modules,
  formats,
} from "../Components/TextEditor/EditorToolbar";
import Demo from "../pages/Demo";
import Navbar from "../Components/Main/Navbar";

// const API_KEY = "8937380685439ac2333494366b96ed7c90cf1468";
// const URL = "https://api-ssl.bitly.com/v4/shorten";

function EditBlog() {
  const [activeTab, setActiveTab] = useState(0);

  const [state, setState] = useState({ value: null });

  const [message,setMessage]=useState('')
  const [content,setContent]=useState("")
  const [home_url,setHomeUrl]=useState("")
  const [topic,setTopic]=useState("")
  const [title,setTitle]=useState("")
  
  const handleChange = (value) => {
    
    setContent(value)
    //setState({ value });
    // console.log(state.value);
  };

  const replaceImage = async () => {
    let count = 0;
    let modified = false; // Flag to indicate if any replacement was made
    do {
      modified = false;
      const imageIndex = state.value.indexOf("<img src=", count);
      if (imageIndex !== -1) {
        modified = true;
        const startIndex = state.value.lastIndexOf("<p>", imageIndex);
        const endIndex = state.value.indexOf("</p>", imageIndex) + 4;
        const imageTag = state.value.slice(startIndex, endIndex);
        const srcIndex = imageTag.indexOf("src=") + 5;
        const srcEndIndex = imageTag.indexOf('"', srcIndex);
        const baseUrlImage = imageTag.slice(srcIndex, srcEndIndex);
        const cloudinaryUrl = await uploadOnCloudinary(baseUrlImage);
        const replacedImageTag = imageTag.replace(baseUrlImage, cloudinaryUrl);
        state.value = state.value.slice(0, startIndex) +
          replacedImageTag +
          state.value.slice(endIndex);
      }
      count = imageIndex + 1; // Update count to the next character after the image tag
    } while (modified && count < state.value.length);
    console.log(state.value);
  };
  
  

  const uploadOnCloudinary = async (pic) => {
    const data = new FormData();
    data.append("file", pic);
    data.append("upload_preset", "tkjwrmag");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/da7gxivyc/image/upload",
        {
          method: "post",
          body: data,
        }
      );
      const responseData = await response.json();
      return responseData.secure_url;
    } catch (error) {
      console.log("Not uploaded in cloudinary");
    }
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    replaceImage();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get("blogId");
    const email = urlParams.get("email");
    const response = await fetch("/save_edited_blog", {
      method: "POST",
      body: JSON.stringify({
        content,
        blogId

      }),
      headers: { "Content-type": "application/json" },
    });
    const json2 = response.json();
    if (json2.err === "FAILED") {
      setMessage(json2.msg);
    }
    else{
      // var hrefUrl=new URL('http://localhost:3000/home')
      // window.location.replace(hrefUrl)
      let url=new URL('http://localhost:3000/slug')
      url.searchParams.set("email", `${email}`);
      url.searchParams.set("blogId", `${blogId}`);

      window.alert("POST SUCCESSFULLY UPDATED")
      window.location.href=url
      
    }
  };

  const generate_blogs = async (e) => {
    const temp_list = [];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const blogId = urlParams.get("blogId");
    const email = urlParams.get("email");

    const response = await fetch("/edit_blog", {
      method: "POST",
      body: JSON.stringify({
        BlogId: blogId,
      }),
      headers: { "Content-type": "application/json" },
    });

    const json = await response.json();

    setContent(json.blog_details.Content)
    setTitle(json.blog_details.Title)
    setTopic(json.blog_details.Topic)

    //setState(json.blog_details.Content)

    var url= new URL("http://localhost:3000/home")
    url.searchParams.set("email", `${email}`);
    setHomeUrl(url)

  }
  useEffect(() => {
    generate_blogs();
  }, []);

  const tabs = [
    {
      label: "Write Blog",
      content: (
        <form onSubmit={submitBlog} className="w-full h-fit min-h-[30rem]">
          <div className="dark:text-white text-xl">Heading</div>
          <div className="p-3 bg-slate-800 rounded mb-5" contentEditable="true"></div>
          <div className="dark:text-white text-xl">Description</div>
          <div className="p-3 bg-slate-800 rounded mb-5" contentEditable="true"></div>
          <EditorToolbar />
          <ReactQuill
            theme="snow"
            value={content}
            onChange={handleChange}
            placeholder={"Write something awesome..."}
            modules={modules}
            formats={formats}
          />
          {message && (
            <p className="text-red-500 text-xs">{message}</p>
          )}
          <button type="submit" className="z-[1] cursor-pointer mt-8 rounded-md font-semibold hover:outline-none hover:bg-blue-500 bg-blue-600 py-3 px-5 text-slate-200">
            Submit Blog
          </button>
        </form>
      ),
    },
    {
      label: "Preview",
      content: (
        <div className="w-full flex min-h-[30rem]">
          <Demo Data={content} />
        </div>
      ),
    },
  ];

  return (
    // <div className="w-full min-h-[100vh] bg-slate-200 dark:bg-slate-900">
    //   <div className="w-full p-3">
    //     <nav className="w-full backdrop-filter backdrop-blur-md flex py-4 px-6 items-center justify-between dark:bg-slate-700 rounded">
    //       <div className="text-lg font-semibold dark:text-slate-200">
    //         The BlogPenn
    //       </div>
    //       <div className="sm:flex hidden">
    //         <ul className="flex justify-between text-sm items-center gap-6 px-4">
    //           <a href={home_url} className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
    //             Home
    //           </a>
    //           <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
    //             Friends
    //           </li>
    //           <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
    //             Explore
    //           </li>
    //         </ul>
    //         <div className="flex border-l-[1px] items-center border-slate-200 px-2">
    //           <Switcher />
    //           <i className="fa fa-github text-2xl dark:hover:text-white cursor-pointer dark:text-slate-200 px-2"></i>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    //   {/* Demo of the blog  */}
    //   <div className="w-full p-6 flex justify-center">
    //     <div className="w-full dark:text-slate-300 md:w-2/3 lg:w-3/5 flex flex-col p-3 gap-4 rounded">
    //       <h1 className="text-slate-800 dark:bg-slate-300 text-xl font-semibold">
    //         Preview
    //       </h1>
    //       <div className="w-full flex h-[30rem]">
    //         <Demo Data={content} />
    //       </div>
    //       <form onSubmit={submitBlog}>
    //         <EditorToolbar />
    //         <ReactQuill
    //           theme="snow"
    //           value={content}
    //           onChange={handleChange}
    //           modules={modules}
    //           formats={formats}
    //         />
    //         {message &&(
    //                 <p className="text-red-500 text-xs">{message}</p>
    //               )}
    //         <button type="submit">Save Changes</button>
    //       </form>
    //     </div>
    //   </div>
    //   <Footer />
    // </div>
    <div className="w-full min-h-[100vh] bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed ">
    <Navbar />
    {/* Demo of the blog  */}
    <div className="w-full p-6 flex justify-center">
      <div className="w-full dark:text-slate-300 bg-[#fefeff] dark:bg-[#0c1116] md:w-2/3 lg:w-4/5 xl:w-3/5 flex flex-col gap-4 rounded-md">
        <div className="flex px-3 pt-4 border-b-[1px] border-[#d1d9de] dark:border-[#31373d] bg-[#f6f8fa] dark:bg-[#171b23] rounded -mb-px">
          {tabs.map((tab, index) => (
            <button
              key={tab.label}
              className={`${activeTab === index
                ? "border-x-[1px] border-t-[1px] text-slate-800 font-semibold dark:text-white border-b-transparent border-[#d1d9de] dark:border-[#31373d] rounded-t bg-[#fefeff] dark:bg-[#0c1116]"
                : "border-b border-transparent"
                } px-4 py-2 text-sm -mb-[2px] font-medium text-[#646d77] dark:text-gray-500 dark:hover:text-white focus:outline-none `}
              onClick={() => setActiveTab(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="mt-8 p-3">
          <p>{tabs[activeTab].content}</p>
        </div>
      </div>
    </div>
    <Footer />
  </div>

  );
}

export default EditBlog;