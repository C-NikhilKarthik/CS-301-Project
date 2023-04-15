const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");

const explore = (req, res) => {
  let present_user_email = req.body.email_login;
  let user_details = [];
  const UserName = user_details.UserName;

  User.collection
    .find({ EmailId: present_user_email })
    .forEach((user) => user_details.push(user))
    .then(() => {
      const blogs = [];

      Blog.collection
        .find({
          Owner: { $ne: user_details[0]._id },
          Topic: { $in: user_details[0].Interests },
        })
        .forEach((blog) => blogs.push(blog))
        .then(() => {
          //:need to shuffle the blogs
          res.json({ UserName:UserName,all_blogs: blogs });
        });
    });
};

module.exports = { explore };
