const express = require("express");
const router = express.Router();
const edit_blog_controller = require("../controllers/edit_blog_controller");

// GET all posts
router.route('/').post(edit_blog_controller.edit);

module.exports = router;
