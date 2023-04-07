import React, { useEffect, useState } from "react";

function SearchFriend() {
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

  const addFriend=async(userId,index)=>{
    const response=await fetch ('/addFriends',{
        method:"POST",
        body:JSON.stringify({
            Uid:userId,
        }),
        headers: { "Content-type": "application/json" },
    });
    const json=await response.json()
    if(json.msg==='SUCCESS')
    {
        const updatedPeople = [...people];
      updatedPeople[index].Status = true;
      setPeople(updatedPeople);
    }
  }

  const removeFriend=async(userId,index)=>{
    const response=await fetch ('/removeFriends',{
        method:"POST",
        body:JSON.stringify({
            Uid:userId,
        }),
        headers: { "Content-type": "application/json" },
    });
    const json=await response.json()
    if(json.msg==='SUCCESS')
    {
        const updatedPeople = [...people];
      updatedPeople[index].Status = false;
      setPeople(updatedPeople);
    }
  }

  
  

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
      <table>
        <thead>
          <tr>
            <th>Friends</th>
          </tr>
        </thead>
        <tr>
          <tbody>
            {people.map((item, index) => (
              <tr key={index}>
                <td>{item.Fname}</td>
                <td>{item.Lname}</td>
                <td>
                  {item.Status ? (
                    <button onClick={()=>removeFriend(item.Uid,index)}>
                      Remove Friend
                    </button>
                  ) : (
                    <button onClick={()=>addFriend(item.Uid,index)}> 
                      Add Friend
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </tr>
      </table>
    </div>
  );
}

export default SearchFriend;
