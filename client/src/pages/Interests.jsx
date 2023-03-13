import React from "react";
import InterestsCard from "../Components/Explore/InterestsCard";
import { ExplorerData } from "../Components/Explore/ExploreData";
function Interests() {
  return (
    <div className='h-screen w-screen flex justify-center items-center bg-[url("https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg")] bg-cover bg-center'>
      <div className="h-fit sm:w-1/2 w-full flex flex-col rounded-md p-6">
        <div className="flex flex-col">
          <div className="text-slate-200 text-3xl font-semibold">
            Choose your Interests
          </div>
          <div className="text-slate-500 text-md">
            We'll only display blogs related your interests.
          </div>
        </div>
        <div className="flex py-4 gap-3 flex-wrap">
            {ExplorerData.map(data => {
                return <InterestsCard key={data.id} text={data.topic} />
            })}
        <InterestsCard text={"Space"}/>
        </div>
      </div>
    </div>
  );
}

export default Interests;
