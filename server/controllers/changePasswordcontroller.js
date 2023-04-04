const express=require('express');
const router=express.Router();
const nodemailer=require("nodemailer");
const User=require('../models/UserModel')
const jwt=require("jsonwebtoken")
const bcrypt=require('bcryptjs');

const keysecret=process.env.SECRET_KEY

const changepassword=async(req,res)=>{
    
        const {id,token,password} = req.body;
        // console.log(req.body);
        
        try {
            const validuser = await User.findOne({_id:id,verifytoken:token});
            
            const verifyToken = jwt.verify(token,keysecret);
    
            if(validuser && verifyToken._id){
                const newpassword = await bcrypt.hash(password,12);
    
                const setnewuserpass = await User.findByIdAndUpdate({_id:id},{Password:newpassword});
                setnewuserpass.save();
                res.status(201).json({status:201,setnewuserpass})
    
            }else{
                res.status(401).json({status:401,message:"user not exist"})
            }
        } catch (error) {
            res.status(401).json({status:401,error})
        }
    }
    


module.exports = {changepassword};