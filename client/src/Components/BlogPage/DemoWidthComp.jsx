import React from 'react'

function DemoWidthComp() {
  return (
    <div className="relative w-full h-full px-20 text-slate-300 text-[10px]">
    <div className="absolute h-full w-[1px] bg-slate-600 left-[640px]">
      <div className=" pointer-events-none relative p-1 w-fit bg-slate-700 ml-2 rounded">
        sm
      </div>
    </div>
    <div className="absolute h-full w-[1px] bg-slate-600 left-[768px]">
      <div className="pointer-events-none relative p-1 w-fit bg-slate-700 ml-2 rounded">
        md
      </div>
    </div>
    <div className="absolute h-full w-[1px] bg-slate-600 left-[1024px]">
      <div className="pointer-events-none relative p-1 w-fit bg-slate-700 ml-2 rounded">
        lg
      </div>
    </div>
    <div className="absolute h-full w-[1px] bg-slate-600 left-[1280px]">
      <div className="pointer-events-none relative p-1 w-fit bg-slate-700 ml-2 rounded">
        xl
      </div>
    </div>
  </div>  )
}

export default DemoWidthComp