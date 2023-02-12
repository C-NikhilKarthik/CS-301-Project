import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
function Login() {
  const [login, setlogin] = useState(true);
  const variant1 = {
    initial: {
      opacity: 0,
      x: -10,
    },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
    exit: {
      opacity: 0,
      x: 10,
    },
  };

  const variant2 = {
    initial1: {
      opacity: 0,
      scale:0.75,
      y:0
    },
    animate1: {
      opacity: 1,
      transition: { duration: 0.7 },
      y:0,
      scale:1
    },
    exit1:{
      opacity:0,
      scale:0.75,
      y:-100
    }

  };

  return (
    <AnimatePresence>
      <div className='flex w-screen h-screen bg-[url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg")] bg-cover items-center justify-center'>
        <div className="absolute inset-0 gridblock"></div>
        <motion.div
          layout
          transition={{ layout: { duration: 1, type: "spring" } }}
          variants={variant2}
          initial='initial1'
          animate='animate1'
          exit='exit1'
          className="relative w-[20rem] backdrop-filter backdrop-blur-md rounded bg-slate-800 p-8"
        >
          <div className="flex flex-col gap-4">
            <motion.div
              layour="position"
              className="flex pb-5 w-full text-slate-200 text-2xl justify-center font-semibold"
            >
              The BlogPenn
            </motion.div>
            {!login && (
              <motion.div
                variants={variant1}
                initial="initial"
                animate="animate"
                class="group flex items-center relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent"
              >
                <span className="absolute left-2 cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
                  Mail
                </span>
                <input
                  type="text"
                  aria-label="Filter projects"
                  placeholder="Email Id"
                  class="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
                />
              </motion.div>
            )}
            <motion.div class="group flex items-center relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent">
              <span className="absolute left-2 cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
                Person
              </span>
              <input
                type="text"
                aria-label="Filter projects"
                placeholder="Username"
                class="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
              />
            </motion.div>
            <motion.div class="group flex items-center relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent">
              <span className="absolute left-2 cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
                Lock
              </span>
              <input
                type="password"
                aria-label="Filter projects"
                placeholder="Password"
                class="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
              />
            </motion.div>
            {!login && (
              <motion.div
                variants={variant1}
                initial="initial"
                animate="animate"
                exit="exit"
                class="group flex items-center relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent"
              >
                <span className="absolute left-2 cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
                  Lock
                </span>
                <input
                  type="text"
                  aria-label="Filter projects"
                  placeholder="Re-Enter Password"
                  class="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
                />
              </motion.div>
            )}
            {!login && (
              <motion.button
                variants={variant1}
                initial="initial"
                animate="animate"
                exit="exit"
                onClick={() => {
                  setlogin(true);
                }}
                className="bg-blue-600 mt-5 py-2 rounded text-slate-200 hover:bg-blue-700"
              >
                Create Account
              </motion.button>
            )}
            {login && (
              <Link className='w-full' to='/home'>
              <motion.button
                variants={variant1}
                initial="initial"
                animate="animate"
                exit="exit"
                className="bg-blue-600 w-full mt-5 py-2 rounded text-slate-200 hover:bg-blue-700"
              >
                Log in
              </motion.button>
              </Link>
            )}
            {login && (
              <div className="border-t-[1px] border-slate-600 py-4">
                <div className="flex text-sm justify-between">
                  <p className="text-slate-300">Don't have an account?</p>
                  <a
                    onClick={() => {
                      setlogin(!login);
                    }}
                    className="cursor-pointer hover:underline text-blue-600"
                  >
                    Sign Up
                  </a>
                </div>
              </div>
            )}
            {!login && (
              <div className="border-t-[1px] border-slate-600 py-4">
                <div className="flex text-sm justify-between">
                  <p className="text-slate-300">Already have an account?</p>
                  <a
                    onClick={() => {
                      setlogin(!login);
                    }}
                    className="cursor-pointer hover:underline text-blue-600"
                  >
                    Log In
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

export default Login;
