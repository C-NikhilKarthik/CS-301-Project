const express=require('express');
const router=express.Router();

const Likes_controller=require('../controllers/Likes_controller')

// signin
router.route('/')
    .post(Likes_controller.Likes)
    
module.exports=router;