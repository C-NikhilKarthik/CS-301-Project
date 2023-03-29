const express = require('express');
const User = require('../models/UserModel');
const Blog = require('../models/BlogModel');
// const { userId } = require('../data/UserId');

const Friends = async (req, res) => {
    const friendName=[];
  try {
    const userId=req.session.userId;
    console.log(userId,'hii');
    const user = await User.findById(userId);
    const friends = user.Friends;
    
    for (let i = 0; i < friends.length; i++) {
        const user_name = await User.findById(friends[i]);
        friendName.push(user_name.fname)
        console.log(user_name.fname)
      }

    res.json({ friends });
    console.log( friendName );
    console.log("Friends list sent");
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { Friends };
