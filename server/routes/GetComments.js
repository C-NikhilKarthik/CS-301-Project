const express=require('express');
const router=express.Router();

const GetComments_controller=require('../controllers/GetComments_controller')

// signin
router.route('/')
    .post(GetComments_controller.GetComments)
    
module.exports=router;