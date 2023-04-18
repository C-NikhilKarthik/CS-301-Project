const express = require("express");
const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");
const cookieParser = require("cookie-parser");

const searchFriends = async (req, res) => {
  const fileStr=req.body.searchData;
  const userId = req.cookies;
//   console.log(fileStr);

  const myMap = new Map();
  const user = await User.findById(userId.userId);
    const friends = user.Friends;
    for(let i=0;i<friends.length;i++)
    {
        myMap.set(friends[i].toString());
    }

  const person=await User.find({
    $or: [
      { Fname: { $regex: fileStr, $options: 'i' } }, // Search for keyword in Fname field, case-insensitive
      { Lname: { $regex: fileStr, $options: 'i' } }, // Search for keyword in Lname field, case-insensitive
    ],
  });

  const data=[]

  for(let i=0;i<person.length;i++)
  {
    const isFriend=myMap.has(person[i]._id.toString());
    data.push({
        Lname: person[i].UserName,
        Fname: person[i].UserName,
        Uid: person[i]._id,
        Status: isFriend
    })
  }

  res.json(data)
//   console.log(data);
   
};

module.exports = { searchFriends };
