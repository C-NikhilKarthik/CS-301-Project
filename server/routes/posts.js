const express = require("express");
const router = express.Router();
const posts_controller = require("../controllers/posts");

// GET all posts
router.route('/').post(posts_controller.readmore);

module.exports = router;
