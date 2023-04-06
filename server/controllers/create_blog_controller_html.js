const cors = require("cors");
const express = require('express');
const app = express();
//const { cloudinary } = require('../config/cloudinary');

const BlogHtml = require("../models/HtmlBlogModel");
const compression = require("compression");

const create_blog_html = async (req, res) => {
  const fileStr = req.body;
  const userId = req.cookies;
  console.log(userId.userId);
  console.log(fileStr.state.value);

  if(fileStr.state.value==="")
  {
    res.status(500).json({
      err: "FAILED",
      msg: "Retry !",
    });
  }

  try {
    const post = new BlogHtml({
      Owner: userId.userId,
      Content: fileStr.state.value
    });

    const result = await post.save();
    if (!result) {
      console.log(err, "database");
      res.status(500).json({
        err: "FAILED",
        msg: "Retry !",
      });
    } else {
      console.log("Data Saved");
      res.status(200).send({
        err: "SUCCESS",
        msg: "Data saved succesfully",
      });
    }
  }catch (error) {
    console.error(error);
    res.status(500).json({ err: "FAILED" });
  }

};

const bodyParserOptions = {
  limit: "500mb", // increase the limit to 50 MB
  extended: true,
};

app.use(express.json(bodyParserOptions));
app.use(express.urlencoded(bodyParserOptions));
app.use(cors());
app.use(compression());

module.exports = { create_blog_html };
