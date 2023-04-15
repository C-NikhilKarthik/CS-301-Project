const express=require('express');
const router=express.Router();

const Unlikes_controller=require('../controllers/Unlike_controller')

// signin
router.route('/')
    .post(Unlikes_controller.Unlikes)
    
module.exports=router;