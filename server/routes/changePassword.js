const express=require('express');
const router=express.Router();

const changepassword=require('../controllers/changePasswordcontroller')

// signin
router.route('/')
    .post(changepassword.changepassword)
    
module.exports=router;