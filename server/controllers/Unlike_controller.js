
const User = require("../models/UserModel");
const BlogHtml = require("../models/HtmlBlogModel");
const { ObjectId } = require("mongodb");
const cookieParser = require('cookie-parser');

const Unlikes = async (req, res) => {
  const userId = req.cookies;
  const blogId = req.body;
  try {
    await BlogHtml.findByIdAndUpdate(
      blogId.id,
      { $pull: { Likes: userId.userId } },
      { new: true }
    );
    res.json({ msg: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "FAILED" });
  }
};


module.exports = { Unlikes };
