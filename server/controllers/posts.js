const Blog = require("../models/Blog");

// Get all posts
exports.getPosts = async (req, res, next) => {
  try {
    const posts = await Blog.find();
    res.status(200).json(posts);
  } catch (err) {
    next(err);
  }
};

// Get a post by ID
exports.getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await Blog.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(post);
  } catch (err) {
    next(err);
  }
};
