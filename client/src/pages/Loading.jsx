import React from "react";

function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center flex-col items-center bg-slate-900">
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
