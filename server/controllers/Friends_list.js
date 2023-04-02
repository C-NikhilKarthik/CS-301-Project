const express = require('express');
const User = require('../models/UserModel');
const Blog = require('../models/BlogModel');
const { ObjectId } = require('mongodb');
const cookieParser = require('cookie-parser');



const Friends = async (req, res) => {
  const friendName = [];
  // const myObjectIdString = '6427cb7e3bec49434e2c8b68';
  const userId =req.cookies;
  console.log(userId);
  // const userId = ObjectId.createFromHexString(myObjectIdString);
  try {
    // const userId=req.session.userId;
    const user = await User.findById(userId.userId);
    const friends = user.Friends;

    for (let i = 0; i < friends.length; i++) {
      let user_name = await User.findById(friends[i]);
      friendName.push(user_name.Fname)
      // console.log(user_name.Fname)
    }

    res.json(friendName);
    // console.log(friendName);
    console.log("Friends list sent");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { Friends };
