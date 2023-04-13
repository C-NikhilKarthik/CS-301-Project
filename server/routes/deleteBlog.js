const express=require('express');
const router=express.Router();

const delete_blog_controller=require('../controllers/delete_blog_controller')

// signin
router.route('/')
    .post(delete_blog_controller.deleteblog)
    
module.exports=router;