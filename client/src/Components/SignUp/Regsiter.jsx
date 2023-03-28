import React from "react";
import InputField from "../InputField";
function Regsiter() {
  return (
    <div className="flex h-full flex-col items-end justify-evenly">
      <div className="grid px-2 py-6 rounded grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          type={"text"}
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
        <InputField
          type={"email"}
          name={"Email"}
          label={"Email Address"}
          icon={"mail"}
        />
        <InputField
          type={"password"}
          name={"Password"}
          label={"Password"}
          icon={"lock"}
        />
      </div>
      <button
        type="button"
        className="bg-blue-600 mt-3 px-3 w-fit py-2 text-sm rounded-md text-slate-300 hover:bg-blue-700"
      >
        Create Account
      </button>
    </div>
  );
}

export default Regsiter;
