const express = require("express");
const router = express.Router();

const your_blogs_controller = require("../controllers/your_blogs_controller");

// signin
router.route('/').post(your_blogs_controller.blogs);

//router.route("/slug").post(home_controller.home);

module.exports = router;
