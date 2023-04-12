import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
//import { Link } from "react-router-dom";
//import InputField from "../Components/InputField";
import { AnimatePresence, motion } from "framer-motion";
import InputField from "../Components/InputField";

const PasswordReset = () => {
  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const setVal = (e) => {
    setEmail(e.target.value);
  };

  const sendLink = async (e) => {
    e.preventDefault();

    const res = await fetch("/sendpasswordlink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (data.status === 201) {
      setEmail("");
      setMessage(true);
    } else {
      toast.error("invalid user");
    }
  };

  return (
    <>
      <section className="w-screen h-screen flex bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed items-center justify-center">
        <div className="p-4 rounded-md dark:text-slate-100 bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md">
          <div className="form-heading">
            <h1 className="mb-6 text-slate-800 dark:text-slate-200 text-xl">
              Enter your email
            </h1>
          </div>

          {message ? (
            <p style={{ color: "green", fontWeight: "bold" }}>
              password reset link send successfully in your email
            </p>
          ) : (
            ""
          )}

          <form>
            <div className="form-input">
              <InputField
                type={"text"}
                name={"email"}
                label={"Email"}
                icon={"email"}
                onChange={(e) => setVal(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Send Mail
              <svg
                aria-hidden="true"
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </form>
          <ToastContainer />
        </div>
      </section>
    </>
  );
};
export default PasswordReset;
