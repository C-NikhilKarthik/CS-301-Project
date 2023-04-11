import React, { useState } from "react";
import FriendsCard from "./FriendsCard";

function FriendsSearch() {
  const [search, setSearch] = useState("");
  const [people, setPeople] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const response = await fetch("/searchFriends", {
      method: "POST",
      body: JSON.stringify({
        searchData: search,
      }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    setPeople(json);
    console.log(json);
  };

  const addFriend = async (userId, index) => {
    const response = await fetch("/addFriends", {
      method: "POST",
      body: JSON.stringify({
        Uid: userId,
      }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.msg === "SUCCESS") {
      const updatedPeople = [...people];
      updatedPeople[index].Status = true;
      setPeople(updatedPeople);
    }
  };

  const removeFriend = async (userId, index) => {
    const response = await fetch("/removeFriends", {
      method: "POST",
      body: JSON.stringify({
        Uid: userId,
      }),
      headers: { "Content-type": "application/json" },
    });
    const json = await response.json();
    if (json.msg === "SUCCESS") {
      const updatedPeople = [...people];
      updatedPeople[index].Status = false;
      setPeople(updatedPeople);
    }
  };

  return (
    <form onSubmit={handleSearch} className="h-full">
      <div className="sm:w-[44rem] grid grid-rows-[auto_1fr_auto] h-full w-full bg-slate-800 text-base">
        <div class="relative w-full">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="voice-search"
            onChange={(e) => {
                setSearch(e.target.value);
              }}
            class="bg-transparent text-gray-900 dark:text-slate-200 outline-none text-sm block w-full pl-10 p-2.5"
            placeholder="Search Friends..."
            required
          />
          <button
            type="button"
            class="absolute inset-y-0 right-0 flex items-center pr-3"
          >
            <svg
              aria-hidden="true"
              class="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex-grow gap-2 p-2 flex flex-col h-full overflow-y-scroll border-b-[1px] border-t-[1px] border-slate-600">
          {people.map((item, index) => (
            <FriendsCard key={index} Fname={item.Fname} Lname={item.Lname} />
          ))}
        </div>
        <div className="flex justify-end p-3">
          <button
            type="submit"
            class="inline-flex items-center w-fit py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              aria-hidden="true"
              class="w-5 h-5 mr-2 -ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
            Search
          </button>
        </div>
      </div>
    </form>
  );
}

export default FriendsSearch;
