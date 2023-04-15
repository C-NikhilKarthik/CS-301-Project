import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Main/Navbar'

function Profile({ bg, Image }) {
    const [data, setData] = useState({
        name: ''
    })
    const generate_blogs = async (e) => {
        const temp_list = [];
        const queryString = window.location.search;
        const urlParams = new URLSearchParams(queryString);
        const email = urlParams.get("email");
        const response = await fetch("/profile", {
            method: "POST",
            body: JSON.stringify({
                email_login: email,
            }),
            headers: { "Content-type": "application/json" },
        });
        const json = await response.json();
        setData({ name: json.UserName });
        console.log(json);
    }


    useEffect(() => {
        generate_blogs();
    }, [])

    const backgroundStyle = bg
        ? { background: `url(${bg})` }
        : { background: 'linear-gradient(to right, #f8049c, #fdd54f)' };
    const ImageStyle = Image
        ? { background: `url(${Image})` }
        : { background: 'url("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png")' }
    return (
        <div className="w-screen h-screen pb-6 overflow-hidden flex flex-col bg-[url('https://wallpaperaccess.com/full/3298375.jpg')] dark:bg-bg2 bg-cover bg-center bg-fixed ">

            <Navbar />
            <div className="relative min-h-[30vh] w-full" style={backgroundStyle}>
                <div className='absolute left-10 rounded-full h-52 bg-cover bg-center aspect-square border-4 bottom-0 translate-y-[50%]' style={ImageStyle}></div>
            </div>
            <div className="flex w-full p-10 gap-4 h-full">
                <div className="w-fit h-fit flex flex-col gap-4 bg-slate-800/60 backdrop-blur-md rounded p-3 mt-20">
                    <div className='text-xl text-slate-200 font-semibold '>
                        <p>{data.name}</p>
                        <p className="-mt-1 text-sm text-slate-600">@elonmusk</p>
                    </div>
                    <div className='text-slate-400 max-w-[16rem] w-full'>I am a core backend developer at TheBlogPenn website, responsible for its backend operations.</div>
                </div>
                
            </div>
        </div>
    );
}


export default Profile