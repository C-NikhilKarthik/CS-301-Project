import React, { useState } from "react";
import Footer from "../Components/Main/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../Components/TextEditor/EditorToolbar";
import Demo from "../pages/Demo";
import Navbar from "../Components/Main/Navbar";

// const API_KEY = "8937380685439ac2333494366b96ed7c90cf1468";
// const URL = "https://api-ssl.bitly.com/v4/shorten";

function Test() {
  const [state, setState] = useState({ value: null });
  const [message,setMessage]=useState('')
  const handleChange = (value) => {
    setState({ value });
    // console.log(state.value);
  };

  const replaceImage = async () => {
    let count = 0;
    let modified = false; // Flag to indicate if any replacement was made
    do {
      console.log('hiii from client')
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
    const response = await fetch("/htmlBlog", {
      method: "POST",
      body: JSON.stringify({
        state,
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
    }
  };

  return (
    <div className="w-full min-h-[100vh] bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed ">
      <Navbar />
      {/* Demo of the blog  */}
      <div className="w-full p-6 flex justify-center">
        <div className="w-full dark:text-slate-300 md:w-2/3 lg:w-3/5 flex flex-col p-3 gap-4 rounded">
          <h1 className="text-slate-800 dark:text-slate-200 text-xl font-semibold">
            Preview
          </h1>
          <div className="w-full flex h-[30rem]">
            <Demo Data={state.value} />
          </div>
          <form onSubmit={submitBlog}>
            <div className="text-slate-white text-xl">Heading</div>
            <div className="p-3 bg-slate-800 rounded mb-5" contentEditable="true"></div>
            <div className="text-slate-white text-xl">Description</div>
            <div className="p-3 bg-slate-800 rounded mb-5" contentEditable="true"></div>
            <EditorToolbar />
            <ReactQuill
              theme="snow"
              value={state.value}
              onChange={handleChange}
              placeholder={"Write something awesome..."}
              modules={modules}
              formats={formats}
            />
            {message &&(
                    <p className="text-red-500 text-xs">{message}</p>
                  )}
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
