const cors = require("cors");
const express = require('express');
const app = express();
//const { cloudinary } = require('../config/cloudinary');

const BlogHtml = require("../models/HtmlBlogModel");
const compression = require("compression");
const { ObjectId } = require("mongodb");

const save = async (req, res) => {
  const edited_content=req.body.content
  const blogid=req.body.blogId

  try {
    BlogHtml.collection.updateOne({_id:new ObjectId(blogid)},{$set:{Content:edited_content}})
    .then(()=>{
        res.json({err:"no problems"})
    })
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

module.exports = { save };
