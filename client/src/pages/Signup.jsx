import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../Components/Home/Card";
import Footer from "../Components/Signup/Footer";
import Teammates from "../Components/Signup/Teammates";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
function Signup() {
  useState(() => {
    AOS.init();
  }, []);

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

  return (
    <div className="w-full flex flex-col bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-cover bg-center bg-fixed ">
      {/* navbar */}
      <motion.nav
        variants={variant2}
        animate="final1"
        initial="initial1"
        className="absolute z-10 top-0 backdrop-filter backdrop-blur-md flex py-6 px-6 w-full items-center justify-between"
      >
        <div className="text-slate-200 text-2xl font-semibold">
          The BlogPenn
        </div>
        <div className="sm:flex hidden">
          <ul className="flex justify-between items-center gap-6 px-4">
            <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
              About
            </li>
            <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
              Contact Us
            </li>
            <Link to="/login">
              <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Sign In
              </li>
            </Link>
          </ul>
          <div className="flex border-l-[1px] border-slate-200 px-2">
            <i className="fa text-blue-500 cursor-pointer fa-moon-o text-2xl px-2"></i>
            <i className="fa fa-github text-2xl hover:text-white cursor-pointer text-slate-200 px-2"></i>
          </div>
        </div>
      </motion.nav>
      {/* Text in the middle fo the page */}
      <div className="relative border-b-[1px] border-slate-600 top-0  h-[80vh] flex-col w-full bg-cover bg-fixed bg-center flex items-center justify-center">
        <div className="absolute inset-0 h-full w-full gridblock"></div>
        <div className="text-2xl sm:text-5xl z-[1] font-semibold text-slate-200 py-2 grid place-items-center ">
          <p className="typed">Unleash your inner creativity.</p>
        </div>
        <motion.div
          className="flex items-center flex-col"
          variants={variant1}
          initial="initial"
          animate="final"
        >
          <p className="sm:text-2xl z-[1] text-slate-200 py-2">
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
      <div className="bg-slate-900 sm:px-20 pb-4 flex justify-between items-center">
        <div
          data-aos="zoom-in-up"
          data-aos-delay="2000"
          data-aos-duration="600"
          className="relative -top-10"
        >
          <Card
            image={"images/bg.jpg"}
            text={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo quis ante ultricies, et viverra urna tempor. Praesent interdum tellus a lobortis vehicula. Ut quis lectus eget urna ornare varius. Curabitur sagittis dapibus dui, in tempor ante ultrices nec. Vestibulum magna massa, ultrices eget ultrices vitae, varius id mauris. Fusce et tortor id felis pretium pulvinar. Quisque pretium dui id eros pellentesque, nec malesuada lectus vulputate. Nullam est dolor, mollis sed sodales sed, posuere molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tincidunt justo, sed condimentum lorem porta maximus. Nullam vitae eleifend velit. Nulla mi lorem, porttitor sit amet lobortis eget, consequat ut dui."
            }
          />
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-duration="300"
          data-aos-delay="2500"
          data-aos-offset="0"
          className="text-slate-200 text-xl mt-4 gap-4 flex flex-col"
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

      <Teammates />
      <Footer />
    </div>
  );
}

export default Signup;
