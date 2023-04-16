const express = require("express");
const router = express.Router();

const testing_controller = require("../controllers/testing_controller");

// signin
router.route('/test1').get(testing_controller.test1);
router.route('/test2').get(testing_controller.test2)

//router.route("/slug").post(home_controller.home);

module.exports = router;