const express = require("express");
const router = express.Router();

const home_controller = require("../controllers/home_controller");

router.route('/').post(home_controller.home);

//router.route("/slug").post(home_controller.home);

module.exports = router;