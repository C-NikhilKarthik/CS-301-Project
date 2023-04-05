const cors = require("cors");
//const { cloudinary } = require('../config/cloudinary');

const Blog = require("../models/BlogModel");
const compression = require("compression");

const create_blog_html = async (req, res) => {
  const fileStr = req.body;
  console.log(req.body);

};

module.exports = { create_blog_html };
