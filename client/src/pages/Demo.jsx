import React from "react";
import Footer from "../Components/Signup/Footer";
function Demo() {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);
  var time = today.toUTCString();

  return (
    <div className="w-screen h-screen bg-slate-800 flex flex-col rounded-md overflow-hidden pb-4">
      <div className="w-full flex-col flex bg-slate-700 shadow-md">
        <div className="p-2 flex items-start relative justify-center">
          <div class="flex h-full items-center absolute left-4 top-0">
            <div class="w-2.5 h-2.5 rounded-full bg-[#EC6A5F]"></div>
            <div class="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#F4BF50]"></div>
            <div class="ml-1.5 w-2.5 h-2.5 rounded-full bg-[#61C454]"></div>
            <svg
              width="24"
              height="24"
              fill="none"
              class="ml-4 sm:flex hidden flex-none text-slate-400 dark:text-slate-500"
            >
              <path
                d="m15 7-5 5 5 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
            <svg
              width="24"
              height="24"
              fill="none"
              class="ml-2 sm:flex hidden flex-none text-slate-400 dark:text-slate-500"
            >
              <path
                d="m10 7 5 5-5 5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
          <div class="rounded-md transition-[width] duration-700 font-medium text-xs leading-6 py-1 flex items-center justify-center ring-1 ring-inset ring-slate-900/5 sm:px-14 px-6 md:px-24 lg:w-2/3 dark:bg-slate-800 dark:text-slate-500">
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              class="text-slate-300 w-3.5 h-3.5 mr-1.5 dark:text-slate-500"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            TheBlogPenn.com
          </div>
          <div class="flex justify-end absolute right-4 h-full top-0 items-center">
            <svg
              width="24"
              height="24"
              fill="none"
              class="text-slate-400 dark:text-slate-500"
            >
              <path
                d="M12.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 6a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 12a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM12.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM18.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM6.5 18a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      {/* Main content */}
      <div className="w-full text-slate-200 flex flex-col pt-5 gap-8 overflow-auto">
        <div className="px-5 w-full gap-8 flex flex-col">
          <p className="text-xl font-semibold">Heading</p>
          <div className="w-full flex justify-end gap-4">
            <p className="text-xs">TheNetherAxe</p>
            <p className="text-xs whitespace-nowrap">{time}</p>
          </div>
          <div className="flex w-full justify-evenly">
            <img
              className=" object-contain w-auto sm:max-w-[600px] rounded"
              src="https://images.unsplash.com/photo-1432821596592-e2c18b78144f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmxvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"
            />
          </div>
          <div className="w-full flex flex-col gap-4 text-sm">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              sit amet ornare orci. Maecenas ultrices ante elit. Duis tempus et
              nunc vel euismod. Nunc rutrum nibh sed libero interdum efficitur.
              Donec vestibulum, arcu gravida condimentum dignissim, sem turpis
              cursus ligula, quis rutrum dui enim sollicitudin velit.
            </p>
            <p>
              Phasellus viverra ipsum ac turpis sollicitudin eleifend. Aliquam
              porta, diam ut euismod egestas, sem mi gravida sem, ut mattis
              ipsum arcu at velit. Fusce condimentum, quam ut pharetra
              consectetur, quam erat sollicitudin ligula, a fermentum mauris
              elit in velit.
            </p>
            <p>
              Nam ullamcorper nunc sit amet lectus gravida, vitae tempus enim
              malesuada. Aenean pharetra blandit pharetra. Donec in tincidunt
              elit. Sed posuere velit eget nisl posuere fermentum. Morbi vel
              ipsum ornare, convallis dolor et, eleifend lacus. Morbi sit amet
              sapien at dui luctus eleifend ut sed sem. Sed fermentum leo ac leo
              gravida, sed luctus urna consectetur. Maecenas at purus feugiat,
              aliquam nunc eget, pellentesque neque. Duis quis mauris at mauris
              convallis ullamcorper ac a nisi. Phasellus non fermentum nibh.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Demo;
