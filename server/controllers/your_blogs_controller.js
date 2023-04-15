const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");

const blogs =async (req, res) => {
  const present_user_email = req.body.email_login;
  const user_details=await User.collection.findOne({ EmailId: present_user_email })
  const UserName = user_details.UserName;
  let blogs=[]
  
    const cursor=Blog.collection.find({ Owner:user_details._id }).limit(5)
    blogs=await cursor.toArray() 
          
    const blog_owners=[]

    //reduce load time more by storing owner username directly in database
    for(let i=0;i<blogs.length;i++)
    {
      const user=await User.collection.findOne({_id:new ObjectId(blogs[i].Owner)})
      blog_owners.push(user.UserName)
    }
    // console.log(blogs);
    res.json({ UserName:UserName,all_blogs: blogs ,all_owners:blog_owners});
                 
    
    
};

module.exports = { blogs };
