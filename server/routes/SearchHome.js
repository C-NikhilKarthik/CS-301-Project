const express = require("express");
const router = express.Router();

const search_home_controller = require("../controllers/search_home_controller");

// signin
router.route('/').post(search_home_controller.search);

//router.route("/slug").post(home_controller.home);

module.exports = router;
