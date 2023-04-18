const express = require("express");
const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");
const cookieParser = require("cookie-parser");

const removeFriends = async (req, res) => {
  const current_uuid=req.cookies.userId;
  const Uuid=req.body.Uid;
  
  try {
    const updatedUser = await User.findOneAndUpdate(
        { _id: current_uuid },
        { $pull: { Friends:new ObjectId(Uuid) } },
        { new: true }
      );
    res.status(200).json({ msg: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "FAILED" });
  }
};

module.exports = { removeFriends };
