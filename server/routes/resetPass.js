const express=require('express');
const router=express.Router();

const passwordR=require('../controllers/password_controller')

//Friends
router.route('/')
    .post(passwordR.PasswordR)
    
module.exports=router;