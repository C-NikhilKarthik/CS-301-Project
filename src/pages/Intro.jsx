import React from 'react'

function Intro() {
  return (
    <div class="group flex items-center relative rounded-md dark:bg-slate-700 dark:highlight-white/10 dark:focus-within:bg-transparent">
    <span className="absolute left-2 cursor-pointer peer-focus:text-white text-gray-400 material-symbols-outlined">
      Search
    </span>
    <input
      type="text"
      aria-label="Filter projects"
      placeholder="Search"
      class="appearance-none w-full text-sm leading-6 bg-transparent text-slate-900 placeholder:text-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-slate-100 dark:placeholder:text-slate-500 dark:ring-0 dark:focus:ring-2"
    />
  </div>  )
}

export default Intro