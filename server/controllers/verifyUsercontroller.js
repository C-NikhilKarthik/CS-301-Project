const express=require('express');
const router=express.Router();
const nodemailer=require("nodemailer");
const User=require('../models/UserModel')
const jwt=require("jsonwebtoken")
const keysecret=process.env.SECRET_KEY

const Verifyuser=async(req,res)=>{
    const {id,token} = req.body;


    try {
        const validuser = await User.findOne({_id:id,verifytoken:token});
        
        const verifyToken = jwt.verify(token,keysecret);

        //console.log(verifyToken)

        if(validuser && verifyToken._id){
            res.status(201).json({status:201,validuser})
        }else{
            res.status(401).json({status:401,message:"user not exist"})
        }

    } catch (error) {
        res.status(401).json({status:401,error})
    }
}

module.exports = {Verifyuser};