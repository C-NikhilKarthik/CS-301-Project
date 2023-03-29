const express=require('express');
const router=express.Router();

const Friends=require('../controllers/Friends_list')

//Friends
router.route('/')
    .post(Friends.Friends)
    
module.exports=router;