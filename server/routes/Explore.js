const express=require('express');
const router=express.Router();

const explore_controller=require('../controllers/explore_controller')

// signin
router.route('/')
    .post(explore_controller.explore)
    
module.exports=router;