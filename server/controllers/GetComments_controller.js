const express = require("express");
const BlogHtml = require("../models/HtmlBlogModel");
const User = require("../models/UserModel");

const GetComments = async (req, res) => {
    const { blogId } = req.body;
    const array=[];
    try {
        const blog = await BlogHtml.findById(blogId);
        const comments = blog.Comments;
        for (let i = 0; i < comments.length; i++) {
            let user = await User.findById(comments[i].CommentId);
            array.push(user.UserName);
          }
          const result={array,comments}
        // console.log(result);
        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { GetComments };
