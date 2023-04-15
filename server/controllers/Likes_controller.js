
const User = require("../models/UserModel");
const BlogHtml = require("../models/HtmlBlogModel");
const { ObjectId } = require("mongodb");
const cookieParser = require('cookie-parser');

const Likes =async (req, res) => {
    const userId=req.cookies;
    const blogId=req.body;
    try{
        await BlogHtml.findByIdAndUpdate(
            blogId.id,
            { $addToSet: { Likes: userId.userId } },
            { new: true }
          );
    }catch (error) {
        console.log(error);
        res.status(500).json({ msg: "FAILED" });
      }
    // console.log(userId,blogId);
};

module.exports = { Likes };
