import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Main/Navbar'
import CARD from '../Components/Home/CARD';
import TOPBAR from '../Components/Home/TOPBAR';
import FriendsCard from '../Components/Home/FriendsCard';
import Loading from './Loading';

function Profile({ bg, Image }) {
    const [list, Setlist] = useState([]);
    const [data, setData] = useState({
        loading: false,
        name: '',
        followers: '',
        following: '',
        blogs_number: '',
        friends: [],
        home: '',
        explore: '',
        yourblogs: '',
        url: []
    })

    const generate_blogs = async (e) => {
        setData({ loading: true });
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
        const response2 = await fetch("/users", {
            method: "POST",
            body: JSON.stringify({
                email_login: email,
            }),
            headers: { "Content-type": "application/json" },
        });
        const response3 = await fetch("/your_blogs", {
            method: "POST",
            body: JSON.stringify({
                email_login: email,
            }),
            headers: { "Content-type": "application/json" },
        });
        const response4 = await fetch("/friends", {
            method: "POST",
        });
        const json4 = await response4.json();
        const json3 = await response3.json(); //
        const json2 = await response2.json(); //all users
        const json = await response.json(); //user
        var followers = 0;
        const id = json._id;
        for (let i = 0; i < json2.length; i++) {
            for (let j = 0; j < json2[i].Friends.length; j++) {
                if (json2[i].Friends[j] === id) {
                    followers++;
                }
            }
        }
        for (let i = 0; i < json3.all_blogs.length; i++) {
            urlParams.set('email', email);
            urlParams.set('blogId', String(json3.all_blogs[i]._id));
            var blog_url = window.location.pathname.replace('/profile', '/slug') + '?' + urlParams.toString();

            urlParams.set('email', email);
            urlParams.set('blogId', String(json3.all_blogs[i]._id));
            var blog_edit_url = window.location.pathname.replace('/profile', '/edit') + '?' + urlParams.toString();

            urlParams.set('email', email);
            urlParams.delete('blogId')
            var url = window.location.pathname.replace('/profile', '/home') + '?' + urlParams.toString();
            var url1 = window.location.pathname.replace('/profile', '/explore') + '?' + urlParams.toString();
            var url2 = window.location.pathname.replace('/profile', '/yourblogs') + '?' + urlParams.toString();

            temp_list.push(
                <CARD
                    key={json3.all_blogs[i]._id}
                    id={json3.all_blogs[i]._id}
                    image={"images/bg.jpg"}
                    text={json3.all_blogs[i].Desc}
                    Heading={json3.all_blogs[i].Heading}
                    Owner={String(json3.all_owners[i])}
                    location={blog_url}
                    yourblog={true}
                    edit_location={blog_edit_url}
                />
            );
        }
        const urls = [];
        for (let i = 0; i < json4.urls.length; i++) {
            urlParams.set('email', json4.urls[i]);
            const url1 = window.location.pathname.replace('/profile', '/profile') + '?' + urlParams.toString();
            urls.push(url1);
        }
        console.log(json4.friendName);

        Setlist(temp_list);
        setData({
            name: json.UserName,
            followers: followers,
            following: json.Friends.length,
            blogs_number: json3.all_blogs.length,
            friends: json4.friendName,
            loading: false,
            home: url,
            explore: url1,
            yourblogs: url2,
            url: urls
        });
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
        <>
            {data.loading ? (<Loading />) : (<div className="w-full h-full pb-6 flex flex-col bg-bg3 dark:bg-bg2 bg-cover bg-center bg-fixed ">

                <Navbar home_url={data.home} explore_url={data.explore} yourblogs_url={data.yourblogs} UserName={data.name} />
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
                    <div className='w-full h-full grid grid-cols-[1fr_auto] gap-4'>
                        <div className='w-full flex h-full flex-col gap-4'>
                            <div className='flex justify-between bg-slate-800/60 rounded py-3 px-10'>
                                <div className='flex flex-col items-center'>
                                    <div className='text-lg font-semibold text-slate-200'>{data.following}</div>
                                    <p className='-mt-1 text-sm text-slate-400'>Following</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='text-lg font-semibold text-slate-200'>{data.followers}</div>
                                    <p className='-mt-1 text-sm text-slate-400'>Followers</p>
                                </div>
                                <div className='flex flex-col items-center'>
                                    <div className='text-lg font-semibold text-slate-200'>{data.blogs_number}</div>
                                    <p className='-mt-1 text-sm text-slate-400'>Blogs Posted</p>
                                </div>
                            </div>
                            <div className="relative rounded-md h-[70vh] flex flex-col items-center gap-6 w-full overflow-x-hidden overflow-y-scroll">
                                <TOPBAR />
                                {list}
                            </div>
                        </div>
                        <div className='flex flex-col gap-4'>
                            <div className='flex justify-between bg-slate-800/60 rounded py-3 text-xl text-slate-200 font-semibold px-10'>Friends</div>
                            <div className="w-[32rem] h-full flex flex-col gap-4 overflow-y-scroll pb-4">
                                {data.friends.map((s,index) => (
                                    <FriendsCard Fname={s} url={data.url[index]} profile={true} />
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            )}</>
    );
}


export default Profile