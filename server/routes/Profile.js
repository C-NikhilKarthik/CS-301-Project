const express=require('express');
const router=express.Router();

const profileController=require('../controllers/ProfileController')

// signin
router.route('/')
    .post(profileController.Profile)
    
module.exports=router;