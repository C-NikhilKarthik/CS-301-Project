const cors = require("cors");
//const { cloudinary } = require('../config/cloudinary');

const Blog = require("../models/BlogModel");
const compression = require("compression");

const create_blog = async (req, res) => {
  const fileStr = req.body;
  // console.log(req.body);

  try {
    const newData = new Blog({
      Owner: null,
      Topic: fileStr.interest,
      Title: fileStr.title,
      Image_link: fileStr.url,
      Description: fileStr.desc,
    });

    const result = await newData.save();
    if (!result) {
      console.log(err, "database");
      res.status(500).json({
        err: "FAILED",
        msg: "Not able to save Data",
      });
    } else {
      console.log("Data Saved");
      res.status(200).send({
        err: "SUCCESS",
        msg: "Data saved succesfully",
      });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "FAILED" });
  }
};

module.exports = { create_blog };
