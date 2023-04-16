const express = require("express");

const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");


const Users = async (req, res) => {

    try {
        const users = await User.find({});
        res.json(users);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

module.exports = {Users};
