const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");

const home =async (req, res) => {
  const present_user_email = req.body.email_login;
  const user_details=await User.collection.findOne({ EmailId: present_user_email })
  const UserName = user_details.UserName;
  let blogs=[]
  if (typeof(user_details.Friends) !== "undefined") {
    const cursor=Blog.collection.find({ Owner: { $in: user_details.Friends } })
    blogs=await cursor.toArray()
    const len=blogs.length
    blogs=blogs.slice(0,5) 
          
    const blog_owners=[]

    //reduce load time more by storing owner username directly in database
    for(let i=0;i<blogs.length;i++)
    {
      const user=await User.collection.findOne({_id:new ObjectId(blogs[i].Owner)})
      if(user!=null)
      {
        blog_owners.push(user.UserName)
      }
      else{
        console.log(blogs[i].Owner)
      }
    }
            
    res.json({ UserName:UserName,all_blogs: blogs ,all_owners:blog_owners,blog_count:blogs.length,total_num_blogs:len});
                 
    }
    else {
      res.json({ UserName:UserName,all_blogs: blogs });
    }
    
};

module.exports = { home };