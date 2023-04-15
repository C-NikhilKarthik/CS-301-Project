import React, { useState } from "react";
import Interests from "../Components/SignUp/Interests";
import ProgressBar from "../Components/SignUp/ProgressBar";
import Regsiter from "../Components/SignUp/Regsiter";
import Success from "../Components/SignUp/Success";
import { Link } from "react-router-dom";
import Switcher from "../Components/Switcher";

function SignUp() {
  const [user, setUser] = useState('none')
  const steps = [
    {
      id: 1,
      title: "Step 1",
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-900 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      content: <Regsiter setuser={(val) => setUser(val)} />,
    },
    {
      id: 2,
      title: "Step 2",
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-900 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      content: <Interests presentuser={user} />,
    },
    {
      id: 3,
      title: "Step 3",
      icon: (
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-gray-900 dark:text-gray-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
          <path
            fillRule="evenodd"
            d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          ></path>
        </svg>
      ),
      content: <Success />,
    },
  ];
  return (
    <div className="flex bg-[url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')] dark:bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-cover h-screen w-full items-center justify-center p-4 sm:p-10">
      <nav className="absolute z-10 top-0 backdrop-filter backdrop-blur-md flex py-6 px-6 w-full items-center justify-between">
        <div className="dark:text-slate-200 text-2xl font-semibold">
          The BlogPenn
        </div>
        <div className="sm:flex hidden">
          <ul className="flex justify-between items-center gap-6 px-4">
            <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
              About
            </li>
            <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
              Contact Us
            </li>
            <Link to="/login">
              <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Sign In
              </li>
            </Link>
          </ul>
          <div className="flex border-l-[1px] border-slate-200 items-center px-4 gap-2">
            <Switcher />
            <i className="fa fa-github text-2xl hover:text-white cursor-pointer text-slate-200 px-2"></i>
          </div>
        </div>
      </nav>
      <div className="flex flex-col w-full sm:w-[50rem]">
        <ProgressBar steps={steps} />
      </div>
    </div>
  );
}

export default SignUp;
