const express = require('express');
const router = express.Router();
const cors = require('cors');
const compression = require('compression');
router.use(cors());

router.use(express.json({limit:'50mb'}));
router.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000, multipart: true }));

router.use(compression())

const create_blog_controller=require('../controllers/create_blog_controller')

router.route('/')
    .post(create_blog_controller.create_blog)
    

module.exports = router;