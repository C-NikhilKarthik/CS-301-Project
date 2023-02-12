import React from 'react'

function Topbar() {
  return (
    <div className='absolute top-0 z-10 w-full bg-slate-900/75 backdrop-blur-md backdrop-filter py-3 border-b-[1px] justify-between px-4 border-slate-600 flex items-center'>
        <p className='text-slate-200 text-2xl font-semibold'>The BlogPenn</p>
        <ul className="flex justify-between items-center gap-6 px-4">
            <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
              For you
            </li>
            <li className="text-gray-300 hover:text-white after:transition-[width] cursor-pointer after:rounded after:mt-1 after:block after:w-0 after:h-1 after:bg-blue-500 hover:after:w-full">
              Following
            </li>
          </ul>
    </div>
  )
}

export default Topbar