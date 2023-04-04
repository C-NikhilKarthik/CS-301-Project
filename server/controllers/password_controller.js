const express=require('express');
const router=express.Router();
const nodemailer=require("nodemailer");
const User=require('../models/UserModel')
const jwt=require("jsonwebtoken")
const keysecret=process.env.SECRET_KEY

//email config
const transporter=nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"sinhaanishkumar1@gmail.com",
        pass:"veqgkgmlawdkwacg"
    }
})


//send email Link For reset password
const PasswordR= async(req,res)=>{
    console.log(req.body)

    const{email}=req.body;
    if(!email){
        res.status(401).json({status:401,message:"Enter your email"})
    }

    try {
        const userfind=await User.findOne({EmailId:email});

        // console.log("userfind",userfind);
        // console.log("true");

        //token generate for reset password
        const token=jwt.sign({_id:userfind._id},keysecret,{
            expiresIn:"1d"
        });
        // console.log("token",token);
        // console.log("true2");
        

        const setusertoken=await User.findByIdAndUpdate({_id:userfind._id},{verifytoken:token},{new:true});
        
        // console.log("setusertoken",setusertoken);
        // console.log("After verifying token");

        if(setusertoken){
            const mailOptions={
                from:"sinhaanishkumar1@gmail.com",
                to:email,
                subject:"Sending email for password reset ",
                text:`This link is valid for 1 day http://localhost:3000/forgotpassword/${userfind.id}/${setusertoken.verifytoken}`
            }

            transporter.sendMail(mailOptions,(error,info)=>{
                if(error){
                    console.log("error",error);
                    res.status(401).json({status:401,message:"Email not sent"})
                }
                else{
                    console.log("Email sent",info.response);
                    res.status(201).json({status:201,message:"Email sent successfully"})
                }
            })
        }

    } catch (error) {
        res.status(401).json({status:401,message:"Invalid user"})
    }
}

module.exports={PasswordR};