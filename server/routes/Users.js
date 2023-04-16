const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/UserController");

// signin
router.route('/').post(user_controller.Users);

//router.route("/slug").post(home_controller.home);

module.exports = router;
