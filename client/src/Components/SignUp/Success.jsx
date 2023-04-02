import React from "react";

function Success() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">
        Congratulations!
      </h1>
      <p className="text-lg text-slate-800 dark:text-gray-300 mb-8">
        You have successfully created an account.
      </p>
      <a
        href="/home"
        className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 ease-in-out"
      >
        Start using your account
      </a>
    </div>
  );
}

export default Success;
