import { motion } from "framer-motion";
import React, { useState } from "react";
import Topbar from "../Components/Home/Topbar";
import Card from "../Components/Home/Card";
import Notifications from "../Components/Home/Notifications";
function Home() {
  const [op, Setop] = useState(true);
  function open() {
    document.getElementById("sidebar").style.width = "300px";
  }
  function close() {
    document.getElementById("sidebar").style.width = "4rem";
  }
  return (
    <div className='w-screen h-screen bg-[url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg")] bg-cover bg-bottom'>
      <div className="z-[2] w-full h-full lg:grid lg:grid-cols-[1fr_300px]">
        <div className="relative flex  w-full h-full overflow-hidden">
          <div className="z-[1] absolute inset-0 gridblock"></div>
          <div
            id="sidebar"
            className="z-[3] border-r-[1px] border-slate-600 transition-[width] justify-end pr-3 duration-500 relative h-full w-[300px] bg-slate-900 flex py-4"
          >
            {!op && (
              <button
                onClick={() => {
                  open();
                  Setop(true);
                }}
                data-collapse-toggle="navbar-hamburger"
                type="button"
                class="h-8 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-hamburger"
                aria-expanded="false"
              >
                <span class="sr-only">Open main menu</span>
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            )}
            {op && (
              <div className="flex w-full justify-end">
                <button
                  onClick={() => {
                    close();
                    Setop(false);
                  }}
                  data-collapse-toggle="navbar-hamburger"
                  type="button"
                  class="h-8 inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  aria-controls="navbar-hamburger"
                  aria-expanded="false"
                >
                  <span class="sr-only">Open main menu</span>
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </button>
              </div>
            )}
          </div>
          <div className="relative z-[6] text-slate-200 w-full ">
            <Topbar />
            <div className="relative w-full h-full overflow-y-auto flex flex-col gap-8 items-center py-16">
              <Card
                image={"images/bg.jpg"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo quis ante ultricies, et viverra urna tempor. Praesent interdum tellus a lobortis vehicula. Ut quis lectus eget urna ornare varius. Curabitur sagittis dapibus dui, in tempor ante ultrices nec. Vestibulum magna massa, ultrices eget ultrices vitae, varius id mauris. Fusce et tortor id felis pretium pulvinar. Quisque pretium dui id eros pellentesque, nec malesuada lectus vulputate. Nullam est dolor, mollis sed sodales sed, posuere molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tincidunt justo, sed condimentum lorem porta maximus. Nullam vitae eleifend velit. Nulla mi lorem, porttitor sit amet lobortis eget, consequat ut dui."
                }
              />
              <Card
                image={"images/bg.jpg"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo quis ante ultricies, et viverra urna tempor. Praesent interdum tellus a lobortis vehicula. Ut quis lectus eget urna ornare varius. Curabitur sagittis dapibus dui, in tempor ante ultrices nec. Vestibulum magna massa, ultrices eget ultrices vitae, varius id mauris. Fusce et tortor id felis pretium pulvinar. Quisque pretium dui id eros pellentesque, nec malesuada lectus vulputate. Nullam est dolor, mollis sed sodales sed, posuere molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tincidunt justo, sed condimentum lorem porta maximus. Nullam vitae eleifend velit. Nulla mi lorem, porttitor sit amet lobortis eget, consequat ut dui."
                }
              />
              <Card
                image={"images/bg.jpg"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo quis ante ultricies, et viverra urna tempor. Praesent interdum tellus a lobortis vehicula. Ut quis lectus eget urna ornare varius. Curabitur sagittis dapibus dui, in tempor ante ultrices nec. Vestibulum magna massa, ultrices eget ultrices vitae, varius id mauris. Fusce et tortor id felis pretium pulvinar. Quisque pretium dui id eros pellentesque, nec malesuada lectus vulputate. Nullam est dolor, mollis sed sodales sed, posuere molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tincidunt justo, sed condimentum lorem porta maximus. Nullam vitae eleifend velit. Nulla mi lorem, porttitor sit amet lobortis eget, consequat ut dui."
                }
              />
              <Card
                image={"images/bg.jpg"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo quis ante ultricies, et viverra urna tempor. Praesent interdum tellus a lobortis vehicula. Ut quis lectus eget urna ornare varius. Curabitur sagittis dapibus dui, in tempor ante ultrices nec. Vestibulum magna massa, ultrices eget ultrices vitae, varius id mauris. Fusce et tortor id felis pretium pulvinar. Quisque pretium dui id eros pellentesque, nec malesuada lectus vulputate. Nullam est dolor, mollis sed sodales sed, posuere molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tincidunt justo, sed condimentum lorem porta maximus. Nullam vitae eleifend velit. Nulla mi lorem, porttitor sit amet lobortis eget, consequat ut dui."
                }
              />
              <Card
                image={"images/bg.jpg"}
                text={
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin facilisis, ipsum nec eleifend consequat, elit sem fringilla elit, at vulputate erat erat eu tellus. Integer posuere ex dictum ex euismod, sit amet rhoncus turpis condimentum. Vivamus finibus bibendum sem. Etiam eget rhoncus libero, eget condimentum ex. Fusce porta, quam vitae convallis mattis, ligula nulla facilisis risus, eget pharetra justo eros non erat. Mauris convallis tincidunt viverra. Nunc efficitur porta volutpat.Nullam rhoncus maximus magna et bibendum. Nam viverra leo quis ante ultricies, et viverra urna tempor. Praesent interdum tellus a lobortis vehicula. Ut quis lectus eget urna ornare varius. Curabitur sagittis dapibus dui, in tempor ante ultrices nec. Vestibulum magna massa, ultrices eget ultrices vitae, varius id mauris. Fusce et tortor id felis pretium pulvinar. Quisque pretium dui id eros pellentesque, nec malesuada lectus vulputate. Nullam est dolor, mollis sed sodales sed, posuere molestie ante. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum volutpat tincidunt justo, sed condimentum lorem porta maximus. Nullam vitae eleifend velit. Nulla mi lorem, porttitor sit amet lobortis eget, consequat ut dui."
                }
              />
            </div>
          </div>
        </div>
        <Notifications/>
      </div>
    </div>
  );
}

export default Home;
