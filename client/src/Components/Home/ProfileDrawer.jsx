import React, { useState } from "react";

function ProfileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

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
            account_circle
          </span>
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed border-slate-600 border right-0 top-0 h-screen md:h-[32rem] w-full md:w-[max(33%,300px)] bg-gray-900/50 rounded backdrop-blur-md text-white overflow-hidden z-40 transition-transform duration-700 ease-in-out transform ${
          isOpen ? "translate-y-0" : "translate-y-[-110%]"
        }`}
      >
        {/* <ChatApp /> */}
      </div>
    </>
  );
}

export default ProfileDrawer;
