const express=require('express');
const router=express.Router();

const removeFriendsController=require('../controllers/RemoveFriendController')

router.route('/')
    .post(removeFriendsController.removeFriends)
    
module.exports=router;