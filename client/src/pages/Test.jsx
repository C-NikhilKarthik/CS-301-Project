import React, { useState } from "react";
import axios from "axios";
import Switcher from "../Components/Switcher";
import Footer from "../Components/Main/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../Components/TextEditor/EditorToolbar";
import Demo from "../pages/Demo";

const API_KEY = "8937380685439ac2333494366b96ed7c90cf1468";
const URL = "https://api-ssl.bitly.com/v4/shorten";

function Test() {
  const [state, setState] = useState({ value: null });
  const [send, setSend] = useState({ value: null });
  const handleChange = (value) => {
    setState({ value });
    // console.log(state.value);
  };

  const replaceImage = async () => {
    const imageIndex = state.value.indexOf("<img src=");
    // console.log(imageIndex);
    if (imageIndex !== -1) {
      const startIndex = state.value.lastIndexOf("<p>", imageIndex);
      const endIndex = state.value.indexOf("</p>", imageIndex) + 4;
      const imageTag = state.value.slice(startIndex, endIndex);
      const srcIndex = imageTag.indexOf("src=") + 5;
      const srcEndIndex = imageTag.indexOf('"', srcIndex);
      const baseUrlImage = imageTag.slice(srcIndex, srcEndIndex);
      console.log(baseUrlImage);
      const url = await shortenUrl(baseUrlImage);
      console.log(url);
    }
  };

  const shortenUrl = async (longUrl) => {
    const response = await axios.post(
      URL,
      {
        long_url: longUrl,
      },
      {
        headers: {
          Authorization: `Bearer ${API_KEY}`,
          "Content-Type": "application/json",
        },
        body:JSON.stringify({long_url:longUrl}),
      }
    );
  
    return response.data.link;
  };

  const submitBlog = async (e) => {
    e.preventDefault();
    replaceImage();
    const response = await fetch("/htmlBlog", {
      method: "POST",
      body: JSON.stringify({
        state: send,
      }),
      headers: { "Content-type": "application/json" },
    });
    const json2 = response.json();
    console.log(json2);
  };

  return (
    <div className="w-full min-h-[100vh] bg-slate-200 dark:bg-slate-900">
      <div className="w-full p-3">
        <nav className="w-full backdrop-filter backdrop-blur-md flex py-4 px-6 items-center justify-between dark:bg-slate-700 rounded">
          <div className="text-lg font-semibold dark:text-slate-200">
            The BlogPenn
          </div>
          <div className="sm:flex hidden">
            <ul className="flex justify-between text-sm items-center gap-6 px-4">
              <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Home
              </li>
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
      {/* Demo of the blog  */}
      <div className="w-full p-6 flex justify-center">
        <div className="w-full dark:text-slate-300 md:w-2/3 lg:w-3/5 flex flex-col p-3 gap-4 rounded">
          <h1 className="text-slate-800 dark:bg-slate-300 text-xl font-semibold">
            Preview
          </h1>
          <div className="w-full flex h-[30rem]">
            <Demo Data={state.value} />
          </div>
          <form onSubmit={submitBlog}>
            <EditorToolbar />
            <ReactQuill
              theme="snow"
              value={state.value}
              onChange={handleChange}
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
            />
            <button type="submit"> Create Blog</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

// export default Test;

// import React, { useState } from "react";
// import "tailwindcss/tailwind.css";
// import "react-quill/dist/quill.snow.css";
// import ReactQuill from "react-quill";

// function TextEditor() {
//   const [editorState, setEditorState] = useState("");

//   const handleEditorChange = (value) => {
//     setEditorState(value);
//   };

//   const toolbarOptions = [
//     [{ header: [1, 2, 3, 4, 5, false] }],
//     ["bold", "italic", "underline", "strike"],
//     [{ list: "ordered" }, { list: "bullet" }],
//     [{ color: [] }, { background: [] }],
//     [{ align: [] }],
//     ["link", "image"],
//     ["clean"],
//   ];

//   return (
//     <div className="mx-auto max-w-3xl bg-white rounded-md shadow-md p-4">
//       <label className="block text-gray-700 font-bold mb-2">Comment</label>
//       <ReactQuill
//         value={editorState}
//         onChange={handleEditorChange}
//         modules={{ toolbar: toolbarOptions }}
//       />
//     </div>
//   );
// }
// function Test() {
//   return (
//     <div className="bg-gray-100 min-h-screen">
//       <div className="py-10">
//         <TextEditor />
//       </div>
//     </div>
//   );
// }

export default Test;
