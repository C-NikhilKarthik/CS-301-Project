const BlogHtml = require("../models/HtmlBlogModel");
const cookieParser = require('cookie-parser');

const Likes = async (req, res) => {
  const userId = req.cookies;
  const blogId = req.body;
  try {
    await BlogHtml.findByIdAndUpdate(
      blogId.id,
      { $addToSet: { Likes: userId.userId } },
      { new: true }
    );
    res.json({ msg: "SUCCESS" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "FAILED" });
  }
};


module.exports = { Likes };
