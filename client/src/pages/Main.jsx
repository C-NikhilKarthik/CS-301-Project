import React, { useState } from "react";
import { motion } from "framer-motion";
import CARD from "../Components/Home/CARD";
import Footer from "../Components/Main/Footer";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EditorToolbar, {
  modules,
  formats,
} from "../Components/TextEditor/EditorToolbar";
import Demo from "../pages/Demo"; import Teammates from "../Components/Main/Teammates";
import { Link } from "react-router-dom";
import AOS from "aos";
import Switcher from "../Components/Switcher";
import "aos/dist/aos.css";
function Main() {
  useState(() => {
    AOS.init();
  }, []);
  const [activeTab, setActiveTab] = useState(0);

  const [state, setState] = useState({ value: null });
  const [message, setMessage] = useState('')
  const handleChange = (value) => {
    setState({ value });
    // console.log(state.value);
  };
  //this is for the animation constraints
  const variant1 = {
    initial: {
      opacity: 0,
      y: 10,
    },
    final: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 2 },
    },
  };
  const variant2 = {
    initial1: {
      opacity: 0,
      y: -100,
      scale: 0.75,
    },
    final1: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, delay: 2 },
    },
  };

  const tabs = [
    {
      label: "Write Blog",
      content: (
        <form className="w-full h-fit min-h-[30rem]">
          <div className="dark:text-white text-xl">Heading</div>
          <div className="p-3 bg-slate-800 rounded mb-5" contentEditable="true"></div>
          <div className="dark:text-white text-xl">Description</div>
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
          {message && (
            <p className="text-red-500 text-xs">{message}</p>
          )}
        </form>
      ),
    },
    {
      label: "Preview",
      content: (
        <div className="w-full flex min-h-[30rem]">
          <Demo Data={state.value} />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full flex flex-col bg-[url('https://tailwindcss.com/_next/static/media/hero@75.b2469a49.jpg')] dark:bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-cover bg-center bg-fixed ">
      {/* navbar */}
      <motion.nav
        variants={variant2}
        animate="final1"
        initial="initial1"
        className="absolute z-10 top-0 backdrop-filter backdrop-blur-md flex py-6 px-6 w-full items-center justify-between"
      >
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
      </motion.nav>
      {/* Text in the middle fo the page */}
      <div className="relative border-b-[1px] border-slate-600 top-0  h-[80vh] flex-col w-full bg-cover bg-fixed bg-center flex items-center justify-center">
        <div className="absolute inset-0 h-full w-full gridblock"></div>
        <div className="text-2xl sm:text-5xl z-[1] font-semibold dark:text-slate-200 py-2 grid place-items-center ">
          <p className="typed">Unleash your inner creativity.</p>
        </div>
        <motion.div
          className="flex items-center flex-col"
          variants={variant1}
          initial="initial"
          animate="final"
        >
          <p className="sm:text-2xl z-[1] dark:text-slate-200 py-2">
            Design and publish your blog with ease!
          </p>
          <Link className="z-[2]" to="/login">
            <button className="z-[1] cursor-pointer mt-2 rounded-md font-semibold hover:outline-none hover:bg-blue-500 bg-blue-600 py-3 px-5 text-slate-200">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
      {/* The Card explaintation  */}
      <div className="bg-slate-100 dark:bg-slate-900 sm:px-20 p-2 pb-4 flex flex-col gap-4 xl:grid xl:grid-cols-2 justify-between items-center">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="2000"
          data-aos-duration="600"
          className="relative -top-10 w-full"
        >
          <CARD
            image={"images/bg.jpg"}
            Heading={"Heading"}
            Owner={"Elon Musk"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo "
            }
          />
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="300"
          data-aos-delay="2500"
          data-aos-offset="0"
          className="dark:text-slate-200 text-xl pl-10 mt-4 gap-4 flex flex-col"
        >
          <div className="whitespace-nowrap text-3xl font-semibold">
            Robust and Clean Design
          </div>
          <div className="flex-wrap sm:max-w-md ">
            <p>
              Provides a brief description of the blog and along with the stats
              of the blog
            </p>
          </div>
        </div>

      </div>
      <div className="bg-slate-100 dark:bg-slate-900 sm:px-20 flex flex-col-reverse p-2 pb-4 justify-between items-center xl:grid lg:grid-cols-2 w-full ">
          <div
            data-aos="zoom-in-left"
            data-aos-duration="300"
            data-aos-delay="2500"
            data-aos-offset="0"
            className="dark:text-slate-200 text-xl pl-10 mt-4 gap-4 flex flex-col"
          >
            <div className="whitespace-nowrap text-3xl font-semibold">
              Open up your imagination
            </div>
            <div className="flex-wrap sm:max-w-md ">
              <p>
                Provides complete control over blog Design with integrated Preview system.
              </p>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-delay="2000"
            data-aos-duration="600"
            className="relative w-full"
          >
            <div className="w-full dark:text-slate-300 bg-[#fefeff] dark:bg-[#0c1116] dark:bg-opacity-[50%] bg-opacity-[50%] flex flex-col gap-4 rounded-md">
              <div className="flex px-3 pt-4 border-b-[1px] border-[#d1d9de] dark:border-[#31373d] bg-[#f6f8fa] dark:bg-[#171b23] rounded -mb-px">
                {tabs.map((tab, index) => (
                  <button
                    key={tab.label}
                    className={`${activeTab === index
                      ? "border-x-[1px] border-t-[1px] text-slate-800 font-semibold dark:text-white border-b-transparent border-[#d1d9de] dark:border-[#31373d] rounded-t bg-[#fefeff] dark:bg-[#0c1116]"
                      : "border-b border-transparent"
                      } px-4 py-2 text-sm -mb-[2px] font-medium text-[#646d77] dark:text-gray-500 dark:hover:text-white focus:outline-none `}
                    onClick={() => setActiveTab(index)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <div className="mt-8 p-3">
                <p>{tabs[activeTab].content}</p>
              </div>
            </div>
          </div>
        </div>
      <Teammates />
      <Footer />
    </div>
  );
}

export default Main;
