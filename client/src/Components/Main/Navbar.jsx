import React, { useState } from "react";
import Logo from "../../assets/Logo.png";
import { TbGridDots } from "react-icons/tb";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiHome } from "react-icons/hi";
import { MdExplore } from "react-icons/md";
import Switcher from "../Switcher";
import Modal from "../Home/Modal";
import FriendsSearch from "../Home/FriendsSearch";

function Navbar({ logo, explore_url, home_url }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <nav className="py-6 px-8 flex justify-between w-full text-white text-2xl items-center">
      <p className="flex font-semibold bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 text-transparent cursor-pointer">
        TheBlogPenn
      </p>
      <div className="flex gap-4 text-3xl items-center">
        {home_url ? (
          <a
            href={home_url}
            className="cursor-pointer flex py-2 px-3 z-10 rounded-full border-2 border-slate-300  gap-4 text-base items-center"
          >
            <HiHome />
            <div>Home</div>
          </a>
        ) : (
          <a
            href={home_url}
            className="cursor-pointer flex py-2 px-3 z-10 rounded-full border-2 border-blue-500 bg-blue-400/40 gap-4 text-base items-center"
          >
            <HiHome />
            <div>Home</div>
          </a>
        )}
        {explore_url ? (
          <a
            href={explore_url}
            className="cursor-pointer flex py-2 px-3 z-10 rounded-full border-2 border-slate-300  gap-4 text-base items-center"
          >
            <MdExplore />
            <div>Explore</div>
          </a>
        ) : (
          <a
            href={explore_url}
            className="cursor-pointer flex py-2 px-3 z-10 rounded-full border-2 border-blue-500 bg-blue-400/40 gap-4 text-base items-center"
          >
            <MdExplore />
            <div>Explore</div>
          </a>
        )}
        <Switcher />
        <button
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer w-10 aspect-square flex items-center justify-center"
        >
          <span className="text-slate-700 dark:text-gray-100 text-3xl peer-focus:text-blue-600 transition-[color pointer-events-none material-symbols-outlined">
            group
          </span>
        </button>
        <div className="flex p-1 bg-gray-600/50 backdrop-blur-md items-center cursor-pointer rounded-full gap-2">
          {logo ? (
            <img
              src={logo}
              alt="profile"
              className="h-full rounded-full aspect-square"
            />
          ) : (
            <div className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 h-8 aspect-square rounded-full" />
          )}
          <div className="text-lg">TheNetherAxe</div>
          <TiArrowSortedDown className="text-lg" />
        </div>
        <TbGridDots />
        <Modal isOpen={isOpen} handleClose={handleClose}>
          <FriendsSearch/>
        </Modal>
      </div>
    </nav>
  );
}

export default Navbar;
