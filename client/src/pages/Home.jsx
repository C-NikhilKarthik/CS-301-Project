import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Topbar from "../Components/Home/Topbar";
import Card from "../Components/Home/Card";
import Notifications from "../Components/Home/Notifications";
import SidebarComponent from "../Components/Home/SidebarComponent";
import Bottombar from "../Components/Home/Bottombar";
import { Link } from "react-router-dom";
function Home() {

  const [op, Setop] = useState(true);

  const [list,Setlist]=useState([]);
  const [owner_name,SetOwner_name]=useState('')

  const find_blog_owner=async(owner)=>{

    const response=await fetch('/getowner',{
      method:'POST',
      body: JSON.stringify({blog_owner:owner}),
      headers:{
         'Content-Type': 'application/json' },
    })

    const json=await response.json()
    SetOwner_name(json.owner_name)

  }

  const generate_blogs=async(e)=>
  {

    const temp_list=[]

    const response=await fetch('/home',{
      method:'GET',
    })

    const json=await response.json()

    for(let i=0;i<json.all_blogs.length;i++)
    {
      
      find_blog_owner(json.all_blogs[i].Owner)
      temp_list.push(<Card
        image={"images/bg.jpg"}
        text={
          json.all_blogs[i].Post_text
        }
        Heading={json.all_blogs[i].Title}
        Owner={owner_name}
        id={String(json.all_blogs[i]._id)}
      />)
    }

    Setlist(temp_list)
    
  }

  generate_blogs() 
  

  function open() {
    document.getElementById("sidebar").style.width = "300px";
  }
  function close() {
    document.getElementById("sidebar").style.width = "4rem";
  }
  return (
    <div className='w-screen h-screen bg-[url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg")] bg-cover bg-bottom'>
      <div className="z-[2] w-full h-full lg:grid lg:grid-cols-[1fr_300px]">
        <div className="relative flex  w-full h-full overflow-hidden">
          <div className="z-[1] absolute inset-0 gridblock"></div>
          <div
            id="sidebar"
            className="z-[3] hidden border-r-[1px] border-slate-600 transition-[width] px-3 duration-500 relative h-full w-[300px] bg-slate-900 lg:flex flex-col items-center py-4"
          >
            {!op && (
              <div className="flex w-full justify-end">
                <button
                  onClick={() => {
                    open();
                    Setop(true);
                  }}
                  data-collapse-toggle="navbar-hamburger"
                  type="button"
                  class="h-min inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-hamburger"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    class="w-6 h-6"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
            {op && (
              <div className="flex w-full justify-end">
                <button
                  onClick={() => {
                    close();
                    Setop(false);
                  }}
                  data-collapse-toggle="navbar-hamburger"
                  type="button"
                  class="h-min inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-hamburger"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
            <SidebarComponent
              op={op}
              select={true}
              image={"Home"}
              text={"Home"}
            />
            <Link className="w-full" to="/explore">
              <SidebarComponent op={op} image={"Explore"} text={"Explore"} />
            </Link>
            <SidebarComponent op={op} image={"Chat"} text={"Messages"} />
            <SidebarComponent op={op} image={"Bookmarks"} text={"Bookmarks"} />
            <SidebarComponent op={op} image={"Settings"} text={"Settings"} />
            <div className="flex px-1 w-full">
              <Link to="/createblog" className="w-full">
                <motion.button className="bg-blue-600 gap-2 w-full flex items-center hover:bg-blue-500 text-slate-200 rounded-full border-none focus:outline-none">
                  <span className="cursor-pointer p-1 peer-focus:text-white text-gray-400 material-symbols-outlined">
                    Add
                  </span>
                  <AnimatePresence>
                    {op && (
                      <motion.p
                        animate={{ opacity: 1, duration: 1 }}
                        initial={{ opacity: 0 }}
                        layout
                        className="whitespace-nowrap w-full flex"
                      >
                        Create Blog
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.button>
              </Link>
            </div>
          </div>
          <div className="relative z-[6] text-slate-200 w-full ">
            <Topbar />
            <div className="relative sm:px-0 px-2 w-full h-full overflow-y-auto flex flex-col gap-8 items-center pt-28 pb-12">
             {list}
            </div>
            <Bottombar />
          </div>
        </div>
        <Notifications />
      </div>
    </div>
  );
}

export default Home;
