const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");
const cookieParser = require("cookie-parser");


const Profile = async (req, res) => {
  const userId=req.cookies;

  const user = await User.findById(userId.userId);
  res.json(user)
  // const present_user_email = req.body.email_login;
  // const user_details = user_details;
  // res.json({UserDetails:user_details})
};

module.exports = {Profile};
