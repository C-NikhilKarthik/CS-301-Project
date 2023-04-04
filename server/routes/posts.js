const express = require("express");
const router = express.Router();
const { getPosts, getPostById } = require("../controllers/posts");

// GET all posts
router.get("/post", getPosts);

// GET a post by ID
router.get("/post/:id", getPostById);

module.exports = router;
