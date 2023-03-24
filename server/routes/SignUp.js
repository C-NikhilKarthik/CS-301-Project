const express=require('express');
const router=express.Router();

const signup_controller=require('../controllers/sign_up_controller')

//Signup
router.route('/')
    .post(signup_controller.signup)
    

module.exports=router;