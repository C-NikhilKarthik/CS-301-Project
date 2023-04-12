const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");

const home =async (req, res) => {
  const present_user_email = req.body.email_login;
  const user_details=await User.collection.findOne({ EmailId: present_user_email })
  let blogs=[]
  if (typeof(user_details.Friends) !== "undefined") {
    const cursor=Blog.collection.find({ Owner: { $in: user_details.Friends } }).limit(5)
    blogs=await cursor.toArray() 
          
    const blog_owners=[]

    //reduce load time more by storing owner username directly in database
    for(let i=0;i<blogs.length;i++)
    {
      const user=await User.collection.findOne({_id:new ObjectId(blogs[i].Owner)})
      blog_owners.push(user.EmailId)
    }
            
    res.json({ all_blogs: blogs ,all_owners:blog_owners});
                 
    }
    else {
      res.json({ all_blogs: blogs });
    }
    
};

module.exports = { home };
