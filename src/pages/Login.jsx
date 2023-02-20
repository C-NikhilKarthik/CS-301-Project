import React, { useState } from "react";
import { Link } from "react-router-dom";
import InputField from "../Components/InputField";

function Login() {
  const [login, setLogin] = useState(true);
  return (
    <div className="h-screen bg-cover flex justify-center p-3 items-center bg-center w-screen bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')]">
      <div className="absolute inset-0 h-full w-full gridblock"></div>
      <div className="z-[2] relative p-3 rounded-md flex justify-start sm:justify-center items-center overflow-hidden">
        <img
          className="absolute z-[1] w-full h-full object-cover"
          src="/images/login_cleanup.jpg"
        />
        <div className="relative sm:w-[40rem] z-[4] flex">
          <div className="flex flex-col sm:w-3/5 p-7 gap-4">
            <div className="text-slate-200 font-semibold">
              <p className="whitespace-nowrap">The BlogPenn</p>
            </div>
            {login ? (
              <div className="py-12 gap-4 flex flex-col px-3">
                <div className="flex text-slate-400 flex-col gap-3">
                  <div className="flex gap-1">
                    <p className="text-2xl font-semibold text-slate-300 whitespace-nowrap">
                      Welcome Back
                    </p>
                    <p className="text-2xl text-blue-500">.</p>
                  </div>
                  <div className="flex text-xs gap-2">
                    <p>Not a member yet?</p>
                    <p onClick={()=>{setLogin(!login)}} className="cursor-pointer text-blue-500">Sign up</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:pr-10">
                  <InputField
                    type={"email"}
                    name={"email"}
                    label={"Email Address"}
                    icon={"mail"}
                  />
                  <InputField
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                    icon={"lock"}
                  />
                  <Link to="/home">
                  <button
                    type="button"
                    className="w-full bg-blue-600 mt-3 px-3 py-2 text-sm rounded-md text-slate-300 hover:bg-blue-700"
                  >
                    Log In
                  </button>
                  </Link>
                  <div className="flex text-xs gap-2">
                    <p className="text-slate-400 hover:text-blue-500 cursor-pointer">
                      Forgot your password?
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="py-12 gap-4 flex flex-col px-3">
                <div className="flex text-slate-400 flex-col gap-3">
                  <p className="text-sm font-semibold">START FOR FREE</p>
                  <div className="flex gap-1">
                    <p className="text-2xl font-semibold text-slate-300 whitespace-nowrap">
                      Create new account
                    </p>
                    <p className="text-2xl text-blue-500">.</p>
                  </div>
                  <div className="flex text-xs gap-2">
                    <p>Already a member?</p>
                    <p onClick={()=>{setLogin(!login)}}className="cursor-pointer text-blue-500">Log In</p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:pr-10">
                  <div className="flex gap-3 mt-3">
                    <InputField
                      tpye={"text"}
                      name={"Fname"}
                      label={"First Name"}
                      icon={"person"}
                    />
                    <InputField
                      type={"text"}
                      name={"Lname"}
                      label={"Last Name"}
                      icon={"person"}
                    />
                  </div>
                  <InputField
                    type={"email"}
                    name={"email"}
                    label={"Email Address"}
                    icon={"mail"}
                  />
                  <InputField
                    type={"password"}
                    name={"password"}
                    label={"Password"}
                    icon={"lock"}
                  />
                  <button
                    type="button"
                    className="bg-blue-600 mt-3 px-3 py-2 text-sm rounded-md text-slate-300 hover:bg-blue-700"
                  >
                    Create Account
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
