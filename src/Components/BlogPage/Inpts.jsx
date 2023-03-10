import React from "react";
import InputField from "../InputField";

function Inpts() {
  return (
    <div className="w-full px-28 mt-10">
      <div className="w-full p-4 rounded-md bg-slate-700 shadow-md flex gap-4 flex-col">
        <p className="text-slate-200 font-semibold text-xl underline">
          Create Blog
        </p>
        <div className="flex flex-col border-t-[1px] py-8 gap-4 px-5 border-slate-500">
          <InputField
            type={"text"}
            name={"p1"}
            label={"Enter Paragraph"}
          />
          <InputField
            type={"text"}
            name={"p2"}
            label={"Enter Paragraph"}
          />
          <InputField
            type={"text"}
            name={"p3"}
            label={"Enter Paragraph"}
          />
          <InputField
            type={"text"}
            name={"p4"}
            label={"Enter Paragraph"}
          />
          <InputField
            type={"text"}
            name={"p5"}
            label={"Enter Paragraph"}
          />
        </div>
        <div className="w-full flex justify-end py-2">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-lg text-xs sm:text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 "
          >
            Post Blog
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
      </div>
    </div>
  );
}

export default Inpts;
