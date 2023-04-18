import React, { useEffect, useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
// import Box from "@mui/material/Box";
// import CircularProgress from "@mui/material/CircularProgress";

const ForgotPassword = () => {
  const { id, token } = useParams();

  const history = useNavigate();

  const [data2, setData] = useState(false);

  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const userValid = async () => {
    const res = await fetch(`/forgotpassword/${id}/${token}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, token }),
    });

    const data = await res.json();

    if (data.status === 201) {
      console.log("user valid");
    } else {
      history("*");
    }
  };

  const setval = (e) => {
    setPassword(e.target.value);
  };

  const sendpassword = async (e) => {
    e.preventDefault();

    if (password === "") {
      toast.error("password is required!", {
        position: "top-center",
      });
    } else if (password.length < 8) {
      toast.error("password must be 8 char!", {
        position: "top-center",
      });
    } else {
      const res = await fetch(`/${id}/${token}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, token, password }),
      });

      const data = await res.json();

      if (data.status === 201) {
        setPassword("");
        setMessage(true);
      } else {
        toast.error("! Token Expired generate new LInk", {
          position: "top-center",
        });
      }
    }
  };

  useEffect(() => {
    userValid();
    setTimeout(() => {
      setData(true);
    }, 3000);
  }, []);

  return (
    <>
      {data2 ? (
        <>
          <section className="w-screen h-screen flex bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed items-center justify-center">
            <div className="p-4 rounded-md dark:text-slate-100 bg-slate-300/60 dark:bg-slate-800/60 backdrop-blur-md">
            <div className="form_data">
              <div className="form_heading">
                <h1 className="mb-6 text-slate-800 dark:text-slate-200 text-xl">Enter Your NEW Password</h1>
              </div>

              <form>
                {message ? (
                  <p style={{ color: "green", fontWeight: "bold" }}>
                    Password Succesfully Update{" "}
                  </p>
                ) : (
                  ""
                )}
                <div className="form_input">
                  <label htmlFor="password">New password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={setval}
                    name="password"
                    id="password"
                    placeholder="Enter Your new password"
                  />
                </div>

                <button className="btn text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={sendpassword}>
                  Submit Password
                </button>
              </form>
              <button
              type="submit"
              className="text-white mt-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <p>
              <a href="/login">Try Signing In Again</a>
              </p>
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
              
              <ToastContainer />
            </div>
            </div>
          </section>
        </>
      ) : (
        <p>   Loading... &nbsp;

        </p>
      )}
    </>
  );
};

export default ForgotPassword;
