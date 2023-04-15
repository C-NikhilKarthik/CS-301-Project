const express = require("express");
const router = express.Router();

const interests_controller = require("../controllers/interests_controller");

//interests
router.route('/').post(interests_controller.interests);

module.exports = router;
