const express = require("express");
const router = express.Router();

const getmore_blogs_controller = require("../controllers/getmore_blogs_controller");

router.route('/').post(getmore_blogs_controller.getmore);

module.exports = router;
