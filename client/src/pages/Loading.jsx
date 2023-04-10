import React from "react";

function Loading() {
  return (
    <div className="w-screen h-screen items-center justify-center overflow-hidden flex flex-col bg-bg2 bg-cover bg-center bg-fixed ">
      <div className="center">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>
      <div className="text-white text-2xl font-semibold mt-6">Loading...</div>
    </div>
  );
}

export default Loading;
