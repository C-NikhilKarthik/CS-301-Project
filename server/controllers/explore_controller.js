const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");

const explore = async(req, res) => {
  console.log("entered explore controller")
  let present_user_email = req.body.email_login;
  const user_details=await User.collection.findOne({ EmailId: present_user_email })
  const UserName = user_details.UserName;
  let blogs=[]
  if(user_details)
  {
    const cursor=Blog.collection.find({ Owner: { $ne: user_details._id },Tags:{$in:user_details.Interests} })
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
    

  // User.collection
  //   .find({ EmailId: present_user_email })
  //   .forEach((user) => user_details.push(user))
  //   .then(() => {
  //     const blogs = [];

  //     Blog.collection
  //       .find({
  //         Owner: { $ne: user_details[0]._id },
  //         Tags: { $in: user_details[0].Interests },
  //       })
  //       .forEach((blog) => blogs.push(blog))
  //       .then(() => {
  //         //:need to shuffle the blogs
  //         res.json({ UserName:UserName,all_blogs: blogs });
  //       });
  //   });
};

module.exports = { explore };
