const express=require('express');
const router=express.Router();

const AddComment_controller=require('../controllers/AddComment_controller')

// signin
router.route('/')
    .post(AddComment_controller.AddComment)
    
module.exports=router;