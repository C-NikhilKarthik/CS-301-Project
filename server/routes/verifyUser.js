const express=require('express');
const router=express.Router();

const Verifyuser_controller=require('../controllers/verifyUsercontroller')

// signin
router.route('/')
    .get(Verifyuser_controller.Verifyuser)
    
module.exports=router;