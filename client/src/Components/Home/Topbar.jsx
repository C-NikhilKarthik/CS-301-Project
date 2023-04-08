import React, { useState } from "react";
import Switcher from "../Switcher";
import Drawer from "./Drawer";
import FriendsDrawer from "./FriendsDrawer";
import ProfileDrawer from "./ProfileDrawer";
import Logo from "../../assets/Logo.png";
import Modal from "./Modal";

function Topbar() {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <div className="absolute top-0 sm:gap-0 gap-4 z-10 w-full bg-slate-200/50 dark:bg-slate-900/75 justify-between backdrop-blur-md backdrop-filter py-1 border-b-[1px] items-center px-4 border-slate-600 flex sm:flex-row flex-col ">
      <img src={Logo} className="h-16 cursor-pointer" alt="Logomain" />
      <ul className="flex sm:w-auto w-full justify-between sm:text-normal text-sm items-center gap-6 px-4">
        <Switcher />
        <li className="text-slate-700 dark:text-gray-100 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
          For you
        </li>
        <button onClick={() => setIsOpen(true)} className="relative cursor-pointer w-10 aspect-square flex items-center justify-center">
          <span className="text-slate-700 dark:text-gray-100 text-3xl peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            group
          </span>
        </button>
        <li className="relative w-10 aspect-square flex items-center justify-center">
          <ProfileDrawer />
        </li>
        <li className="relative w-10 aspect-square flex items-center justify-center">
          <Drawer />
        </li>
      </ul>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <p className="text-lg">
          Modal content goes here.
        </p>
      </Modal>
    </div>
  );
}

export default Topbar;
