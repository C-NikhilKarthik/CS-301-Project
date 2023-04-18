const express = require("express");
const User = require("../models/UserModel");
const BlogHtml = require("../models/HtmlBlogModel");
const { ObjectId } = require("mongodb");

const AddComment = async (req, res) => {
    const userId = req.cookies.userId; 
    const { comment, blogId } = req.body;
  
    try {
    
      const newComment = { CommentId:userId, text: comment };
        await BlogHtml.findByIdAndUpdate(
        blogId,
        { $push: {Comments:newComment} },
        { new: true } 
      );

    } catch (error) {
      console.error('hello');
      res.status(500).json({ message: "Internal server error" });
    }
  };
  

module.exports = { AddComment };
