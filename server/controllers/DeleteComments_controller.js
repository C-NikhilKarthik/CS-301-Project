const express = require("express");
const User = require("../models/UserModel");
const BlogHtml = require("../models/HtmlBlogModel");
const { ObjectId } = require("mongodb");

const DeleteComments = async (req, res) => {
    const { commentId, blogId } = req.body;
  
    try {
      BlogHtml.collection.updateOne({_id:new ObjectId(blogId)},{$pull:{Comments:{_id:{$in:[new ObjectId(commentId)]}}}})
      .then(()=>{
        console.log('Deleted')
        res.status(200).json({ message: "Comment deleted successfully" });
      }
      )
  
    //   if (!updatedBlog) {
    //     return res.status(404).json({ message: "Blog not found" });
    //   }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error" });
    }
  };
  
  

module.exports = { DeleteComments };
