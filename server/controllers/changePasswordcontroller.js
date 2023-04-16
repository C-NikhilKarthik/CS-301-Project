const express = require('express');
const router = express.Router();
const nodemailer = require("nodemailer");
const User = require('../models/UserModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');

const keysecret = process.env.SECRET_KEY;

const changepassword = async (req, res) => {
  try {
    const { id, token, password } = req.body || {};

    if (!id || !token || !password) {
      return res.status(400).json({ status: 400, message: "Missing required fields" });
    }

    const validuser = await User.findOne({ _id: id, verifytoken: token });

    if (!validuser) {
      return res.status(401).json({ status: 401, message: "User not found" });
    }

    const verifyToken = jwt.verify(token, keysecret);

    if (!verifyToken._id) {
      return res.status(401).json({ status: 401, message: "Invalid token" });
    }

    const newpassword = await bcrypt.hash(password, 12);
    const setnewuserpass = await User.findByIdAndUpdate({ _id: id }, { Password: newpassword });

    if (!setnewuserpass) {
      return res.status(500).json({ status: 500, message: "Failed to update user password" });
    }

    res.status(201).json({ status: 201, setnewuserpass });

  } catch (error) {
    res.status(500).json({ status: 500, error });
  }
}

module.exports = { changepassword };
