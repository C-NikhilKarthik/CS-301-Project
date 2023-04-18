const express = require("express");
const router = express.Router();

const getmoreexplore_blogs_controller = require("../controllers/getmoreexplore_blogs_controller");

router.route('/').post(getmoreexplore_blogs_controller.getmore);

module.exports = router;
