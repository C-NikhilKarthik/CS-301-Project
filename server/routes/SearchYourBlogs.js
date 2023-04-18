const express = require("express");
const router = express.Router();

const search_yourblogs_controller = require("../controllers/search_yourblogs_controller");

// signin
router.route('/').post(search_yourblogs_controller.search);

//router.route("/slug").post(home_controller.home);

module.exports = router;
