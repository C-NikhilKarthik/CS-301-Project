import React, { useState } from "react";
import InputField from "../InputField"; 


function Inpts() {
  const [interest, setInterest] = useState("");
  const [title, setTitle] = useState("");
  const [pic, setPic] = useState("");
  const [desc, setDesc] = useState("");
  const [url, setUrl] = useState("");
  const [message,setMessage]=useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };
  const handleDesc = (e) => {
    setDesc(e.target.value);
  };
  const handleInterest = (e) => {
    setInterest(e.target.value);
  };

  const imageHandler = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPic(reader.result);
    };
  };

  const formHandler = async (e) => {
    e.preventDefault();

    if (!pic) return;
    uploadOnCloudinary(pic);
    if(!url)return;
    const response= await uploadDatabase(interest, title, desc,url)
    if(response.err!=='FAILED')
    {
        alert('Blog Uploaded');
        window.location.replace("/createblog");
    }
    else{
      setMessage('Try Again');
    }
  };

  const uploadDatabase=async (interest, title, desc,url)=>{
    try{
      const response=await fetch("/postBlog", {
        method: "POST",
        body: JSON.stringify({
          interest: interest,
          title: title,
          desc: desc,
          url: url,
        }),
        headers: { "Content-type": "application/json" },
      });
      const json2=response.json();
      return json2;
    }catch (error) {
      console.log('Not able to send response to server');
    }
  }

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
      console.log(responseData.secure_url);
      setUrl(responseData.secure_url);
    } catch (error) {
      console.log('Not uploaded in cloudinary');
    }
  };

  return (
    <div className="w-full px-28 mt-10">
      <form onSubmit={formHandler}>
        <div className="w-full p-4 rounded-md bg-slate-700 shadow-md flex gap-4 flex-col">
          <p className="text-slate-200 font-semibold text-xl underline">
            Create Blog
          </p>
          <div className="flex flex-col border-t-[1px] py-8 gap-4 px-5 border-slate-500">
            <select
              name="languages"
              id="lang"
              value={interest}
              onChange={handleInterest}
            >
              <option value="">None</option>
              <option value="Tech">Tech</option>
              <option value="Travel">Travel</option>
              <option value="Automobiles">Automobiles</option>
              <option value="Education">Education</option>
              <option value="Painting">Painting</option>
              <option value="Weapons">Weapons</option>
              <option value="Dance">Dance</option>
            </select>
            <InputField
              type={"text"}
              name={"p1"}
              label={"Title"}
              onChange={handleTitle}
            />
            <InputField
              type={"file"}
              name={"p2"}
              label={"Choose Media"}
              onChange={imageHandler}
            />
            <InputField
              type={"text"}
              name={"p3"}
              label={"Description"}
              onChange={handleDesc}
            />
          </div>
          {message && (<p className="text-red-500 text-xs">{message}</p>)}
          <div className="w-full flex justify-end py-2">
            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
            >
              Post Blog
              <svg
                aria-hidden="true"
                class="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Inpts;
