import React, { useState } from "react";
function ProfileDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Button to toggle drawer */}
      <button className="absolute z-30" onClick={toggleDrawer}>
        {isOpen ? (
          <span className="text-slate-700 dark:text-gray-100 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            close
          </span>
        ) : (
          <span className="text-slate-700 dark:text-gray-100 peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            message
          </span>
        )}
      </button>

      {/* Drawer */}
      <div
        className={`fixed border-slate-600 border right-0 top-0 h-screen w-full md:w-[max(33%,300px)] bg-gray-900/50 rounded backdrop-blur-md text-white overflow-hidden z-20 transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "translate-x-[110%]"
        }`}
      >
        {/* <ChatApp /> */}
      </div>
    </>
  );
}

export default ProfileDrawer;
