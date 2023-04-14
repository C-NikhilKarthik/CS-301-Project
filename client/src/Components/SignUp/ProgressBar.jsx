import React, { useState } from "react";

function ProgressBar({ steps }) {
  const [step, setStep] = useState(0);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  return (
    <div className="flex flex-col bg-slate-200/50 dark:bg-slate-700/50 border-gray-200 border-[1px] backdrop-filter backdrop-blur-md p-6 rounded gap-8">
      <div className="h-[22rem]">
        {steps.map((s) =>
          s.id - 1 === step ? (
            <div
              key={s.id}
              className="h-full flex justify-center items-center text-white"
            >
              {s.content}
            </div>
          ) : null
        )}
      </div>
      <div className="relative flex justify-between items-center w-full">
        <div
          className="absolute z-20 left-0 h-3 transition-[width] rounded-full bg-blue-500"
          style={{ width: `${(step * 100) / 2}%` }}
        />
        {steps.map((s) => (
          <div
            key={s.id}
            className={`relative z-30 ${
              s.id <= step ? "text-blue-400" : "text-gray-500"
            }`}
          >
            <div className="flex justify-center items-center">
              {s.id <= step ? (
                <span className="flex items-center justify-center w-10 h-10 bg-blue-900 rounded-full lg:h-12 lg:w-12">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-blue-400 lg:w-6 lg:h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              ) : (
                <span className="flex items-center border border-gray-500 justify-center w-10 h-10 bg-slate-400 rounded-full lg:h-12 lg:w-12 dark:bg-slate-300 shrink-0">
                  {s.icon}
                </span>
              )}
            </div>
          </div>
        ))}
        <div className="absolute h-3 rounded-full bg-white w-full flex items-center justify-center"></div>
      </div>
      <div className="flex z-10 justify-end">
        <button
          className={`px-4 py-2 bg-green-600 text-white rounded ${
            step === steps.length - 1 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={nextStep}
          type="submit"
          disabled={step === steps.length - 1}
        >
          Continue
        </button>
      </div>
    </div>
  );
}

export default ProgressBar;
