const express=require('express');
const router=express.Router();

const home_controller=require('../controllers/home_controller')

// signin
router.route('/')
    .post(home_controller.home)
    
module.exports=router;