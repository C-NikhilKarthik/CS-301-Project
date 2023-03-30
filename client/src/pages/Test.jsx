import React, { Component } from "react";
import Switcher from "../Components/Switcher";
import Footer from "../Components/Main/Footer";
import OptionButton from "../Components/TextEditor/OptionButton";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

// function f2() {
//   document.execCommand("italic", false, null);
// }

const icons = [
  {
    id: 1,
    icon: "format_bold",
  },
  {
    id: 2,
    icon: "format_italic",
    // func: f2(),
  },
  {
    id: 3,
    icon: "format_underlined",
  },
  {
    id: 4,
    icon: "strikethrough_s",
  },
  {
    id: 5,
    icon: "superscript",
  },
  {
    id: 6,
    icon: "subscript",
  },
];
function Test() {
  return (
    <div className="w-full min-h-[100vh] bg-slate-200 dark:bg-slate-900">
      <div className="w-full p-3">
        <nav className="w-full backdrop-filter backdrop-blur-md flex py-4 px-6 items-center justify-between dark:bg-slate-700 rounded">
          <div className="text-lg font-semibold dark:text-slate-200">
            The BlogPenn
          </div>
          <div className="sm:flex hidden">
            <ul className="flex justify-between text-sm items-center gap-6 px-4">
              <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Home
              </li>
              <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Friends
              </li>
              <li className="dark:text-gray-300 dark:hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Explore
              </li>
            </ul>
            <div className="flex border-l-[1px] items-center border-slate-200 px-2">
              <Switcher />
              <i className="fa fa-github text-2xl dark:hover:text-white cursor-pointer dark:text-slate-200 px-2"></i>
            </div>
          </div>
        </nav>
      </div>
      {/* Demo of the blog  */}
      <div className="w-full p-6 flex justify-center">
        <div className="w-full md:w-2/3 lg:w-3/5 flex flex-wrap p-3 gap-4 rounded">
          <Editor
            editorClassName="border dark:text-slate-800 dark:bg-slate-500 px-4 backdrop-blur-lg rounded"
            toolbarStyle={{
              backdropFilter: "blur(10px)",
            }}
            toolbar={{
              fontSize:{ className : "bg-slate-500"}
            }}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Test;
