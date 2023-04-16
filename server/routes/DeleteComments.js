const express=require('express');
const router=express.Router();

const DeleteComments_controller=require('../controllers/DeleteComments_controller')

// signin
router.route('/')
    .post(DeleteComments_controller.DeleteComments)
    
module.exports=router;