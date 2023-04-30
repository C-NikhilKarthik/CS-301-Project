const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");

const search =async (req, res) => {
  const present_user_email = req.body.email_login;
  const search_query=req.body.search_query

  const user_details=await User.collection.findOne({ EmailId: present_user_email })
  
  let blogs=[]
  //const results =Blog.collection.find({ $text: { $search:search_query },Owner:{$ne:user_details._id} });
  //const cursor =Blog.collection.find({ Topic:{$regex:new RegExp(search_query,"i")},Owner:{$in:user_details.Friends}}).limit(5); 
  const cursor=Blog.collection.find({
    $or: [
      {
        $and: [
          { Tags: { $regex: new RegExp(search_query,"i") } },
          { Owner:{$eq:new ObjectId(user_details._id)} }
        ]
      },
      {
        $and: [
          { Heading: { $regex: new RegExp(search_query,"i") } },
          { Owner:{$eq:new ObjectId(user_details._id)}}
        ]
      }
    ]
  }).limit(5)
  blogs=await cursor.toArray()

  //console.log(blogs)
  const blog_owners=[]
  for(let i=0;i<blogs.length;i++)
    {
      const user=await User.collection.findOne({_id:new ObjectId(blogs[i].Owner)})
      blog_owners.push(user.EmailId)
    }
    
  res.json({ all_blogs: blogs ,all_owners:blog_owners});
                 
   
    
};

module.exports = { search };
