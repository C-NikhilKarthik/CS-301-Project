const express=require('express');
const router=express.Router();

const comment_controller=require('../controllers/comment_controller')

// signin
router.route('/')
    .post(comment_controller.getComments)
    
module.exports=router;