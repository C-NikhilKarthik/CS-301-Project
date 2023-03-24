const express=require('express');
const router=express.Router();

const login_controller=require('../controllers/sign_in_controller')

// signin
router.route('/')
    .post(login_controller.login)
    
module.exports=router;