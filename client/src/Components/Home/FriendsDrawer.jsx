import React, { useEffect, useState } from "react";
import FriendsCard from "./FriendsCard";

function FriendsDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch("/friends", {
      method: "POST",
    });
    const json = await response.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {/* Button to toggle drawer */}
      <button className="absolute z-50" onClick={toggleDrawer}>
        {isOpen ? (
          <span className="text-slate-700 dark:text-gray-100 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            close
          </span>
        ) : (
          <span className="text-slate-700 dark:text-gray-100 text-3xl peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            group
          </span>
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed border-slate-600 border right-0 top-0 h-screen md:h-[32rem] w-full md:w-[max(33%,300px)] bg-gray-900 rounded backdrop-blur-[20px] backdrop-filter text-white overflow-hidden z-40 transition-transform duration-700 ease-in-out transform ${
          isOpen ? "translate-y-0" : "translate-y-[-110%]"
        }`}
      >
        <div className="sm:top-4 top-10 absolute left-4 text-slate-800 dark:text-slate-100 font-semibold text-2xl">Friends</div>
        <div className="w-full h-full flex flex-col gap-4 overflow-y-scroll px-4 pt-32 sm:pt-20 pb-4">
          {data.map((s) => (
            <FriendsCard Name={s} />
          ))}
        </div>
        {/* <ChatApp /> */}
      </div>
    </>
  );
}

export default FriendsDrawer;
