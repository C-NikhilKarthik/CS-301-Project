import React from "react";
import Footer from "../Components/Signup/Footer";
import DemoWidthComp from "../Components/BlogPage/DemoWidthComp";
import Inpts from "../Components/BlogPage/Inpts";

// function makeResizableDiv() {
//   const element = document.getElementById("main");
//   const currentResizer = document.getElementById("hold");

//   currentResizer.addEventListener("mousedown", function (e) {
//     e.preventDefault();
//     window.addEventListener("mousemove", resize);
//     window.addEventListener("mouseup", stopResize);
//   });

//   function resize(e) {
//     element.style.width = e.pageX - element.getBoundingClientRect().left + "px";
//   }

//   function stopResize() {
//     window.removeEventListener("mousemove", resize);
//   }
// }

function CreateBlog() {
  const [initialPos, setInitialPos] = React.useState(null);
  const [initialSize, setInitialSize] = React.useState(null);

  const initial = (e) => {
    let resizable = document.getElementById("main");

    setInitialPos(e.clientX);
    setInitialSize(resizable.offsetWidth);
  };

  const resize = (e) => {
    let resizable = document.getElementById("main");

    resizable.style.width = `${
      parseInt(initialSize) + parseInt(e.clientX - initialPos)
    }px`;
  };

  return (
    <div className="w-full">
      <div className="w-full p-3">
        <nav className="w-full backdrop-filter backdrop-blur-md flex py-4 px-6 items-center justify-between bg-slate-700 rounded">
          <div className="text-lg font-semibold text-slate-200">
            The BlogPenn
          </div>
          <div className="sm:flex hidden">
            <ul className="flex justify-between text-sm items-center gap-6 px-4">
              <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Home
              </li>
              <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Friends
              </li>
              <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
                Explore
              </li>
            </ul>
            <div className="flex border-l-[1px] border-slate-200 px-2">
              <i className="fa text-blue-500 cursor-pointer fa-moon-o text-2xl px-2"></i>
              <i className="fa fa-github text-2xl hover:text-white cursor-pointer text-slate-200 px-2"></i>
            </div>
          </div>
        </nav>
      </div>

      {/* Demo of the blog  */}
      <div className="w-full py-10 flex flex-col">
        <div className="w-full flex gap-10 flex-col overflow-hidden">
          <div className="relative h-8 w-full my-5 border-b-[1px] border-slate-600">
            <DemoWidthComp />
          </div>
          <div className="sm:px-20 w-full h-[70vh] relative bg-[url('https://tailwindcss.com/_next/static/media/0-dark@tinypng.74768a0b.png')] bg-cover bg-center">
            <div className="absolute inset-0 h-full w-full gridblock inv"></div>
            <div
              id="main"
              className="relative shadow-lg md:min-w-[400px] w-full md:w-[400px] lg:max-w-full h-full -top-6 flex justify-center items-center flex-col"
            >
              <div
                id="hold"
                draggable="true"
                onDragStart={initial}
                onDrag={resize}
                className="resizer absolute w-1.5 h-8 bg-slate-500/60 rounded-full mr-2 -right-5 cursor-ew-resize"
              ></div>
              <iframe className="w-full h-full rounded-md" src="/demo"></iframe>
            </div>
          </div>
        </div>
        <Inpts />
      </div>
      <Footer />
    </div>
  );
}

export default CreateBlog;
