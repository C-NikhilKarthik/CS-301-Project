import React from "react";
import { motion } from "framer-motion";

function Card({ image, text,Heading,Owner,id }) {
  // useState(() => {
  //   AOS.init();
  // }, []);
  // const boxVariant = {
  //   visible: {
  //     opacity: 1,
  //     scale: 1,
  //     height: "100%",
  //     transition: { duration: 0.6, },
  //   },
  //   hidden: { opacity: 0, scale: 0.75, height: "0" },
  // };
  // const control = useAnimation();
  // const [ref, inView] = useInView();

  // useEffect(() => {
  //   if (inView) {
  //     control.start("visible");
  //   } else {
  //     control.start("hidden");
  //   }
  // }, [control, inView]);

  return (
    <motion.div
      // ref={ref}
      className="w-full max-w-xl flex flex-col p-3 bg-gray-800 rounded-lg border border-gray-600"
    >
      <motion.div
        layout="position"
        className="w-full border-b-[1px] border-gray-500 flex justify-between"
      >
        <div className="flex mb-3 items-center text-gray-300 ">
          <div className="rounded-full h-10 w-10 border-[1px] border-white bg-gray-500"></div>
          <div className="ml-3 flex flex-col">
            <p className="sm:text-xl text-normal">{Owner}</p>
            <p className="text-sm -top-1 relative">#{id}</p>
          </div>
        </div>
        <div className="flex items-start py-2 h-full">
          <p className="h-full flex text-xs items-end text-gray-300 mr-3">
            9:53 6th Feb,2023
          </p>
          <span className="material-symbols-outlined text-2xl text-gray-300 ">
            more_horiz
          </span>
        </div>
      </motion.div>
      {
        <motion.div
          // ref={ref}
          // variants={boxVariant}
          // initial="hidden"
          // animate={control}
          className="relative w-full py-3 flex"
        >
              <div className="sm:flex hidden relative w-full px-3 max-h-[15em] border-r-[1px] border-gray-500">
                <div className="h-full w-full rounded overflow-hidden">
                  <img className="object-cover" src={image} alt="images"/>
                </div>
              </div>
              <div className="relative px-2 w-[20rem] max-h-[15em] text-gray-200 text-ellipsis overflow-hidden">
                <div className="text-2xl py-2">
                  {Heading}
                </div>
                <div className="text-md ">{text}</div>
              </div>
          
        </motion.div>
      }

      <div className="flex items-center px-2 justify-between">
        <div className="flex">
          <span className="material-symbols-outlined text-sm sm:text-lg mr-6 cursor-pointer hover:scale-110 hover:text-red-600 transition-[text-color,scale] duration-500 text-gray-300 ">
            favorite
          </span>
          <span className="material-symbols-outlined text-sm mr-6 cursor-pointer hover:text-blue-400 text-gray-300 ">
            share
          </span>
          <span className="material-symbols-outlined text-sm mr-6 cursor-pointer hover:text-gray-100 text-gray-300 ">
            comment
          </span>
        </div>
        <button
          type="button"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
        >
          Continue Reading
          <svg
            aria-hidden="true"
            class="w-5 h-5 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default Card;
