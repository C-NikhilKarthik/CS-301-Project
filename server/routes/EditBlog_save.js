const express = require('express');
const router = express.Router();
const cors = require('cors');
const compression = require('compression');
router.use(cors());

router.use(express.json({limit:'50mb'}));
router.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000, multipart: true }));

router.use(compression())

const save_edit_blog_controller=require('../controllers/save_edit_blog_controller')

router.route('/')
    .post(save_edit_blog_controller.save)
    

module.exports = router;