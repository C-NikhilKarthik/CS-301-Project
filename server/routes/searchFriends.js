const express=require('express');
const router=express.Router();

const searchFriendsController=require('../controllers/searchFriendsController')

//Friends
router.route('/')
    .post(searchFriendsController.searchFriends)
    
module.exports=router;