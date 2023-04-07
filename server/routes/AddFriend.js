const express=require('express');
const router=express.Router();

const addFriend_controller=require('../controllers/AddFriendController')

// signin
router.route('/')
    .post(addFriend_controller.addFriends)
    
module.exports=router;