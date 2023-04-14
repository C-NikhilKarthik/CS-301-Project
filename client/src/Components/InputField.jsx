import React from 'react'

function InputField({type,name,label,icon,onChange}) {
  return (
    <div className="relative z-0 w-full flex items-center group">
    <input
      type={type}
      name={name}
      onChange={onChange}
      className="pr-8 block px-2 backdrop-filter backdrop-blur-sm py-2.5 w-full text-sm text-gray-900 dark:bg-[#979dac] rounded-md appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
      placeholder=" "
      required
    />
    <label
      htmlFor={name}
      className="pointer-events-none z-[1] pl-2 peer-focus:font-medium absolute text-sm text-slate-500 dark:text-[#1b2345] duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-5"
    >
      {label}
    </label>
    <span className="text-[#1b2345] peer-focus:text-blue-500 dark:peer-focus:text-[#334065] transition-[color] absolute right-1 pointer-events-none material-symbols-outlined">
      {icon}
    </span>
  </div>  )
}

export default InputField