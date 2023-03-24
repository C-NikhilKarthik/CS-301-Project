const express=require('express');

const bcrypt=require('bcrypt');

const User=require('../models/UserModel');

const bodyParser=require('body-parser');


// signin
const login=(req,res)=>{
    const fileStr=req.body;
    email=fileStr.email_login.trim();
    password=fileStr.password_login.trim();

    if(email==""||password==""){
        res.json({
            status: "FAILED",
            message:"Empty credentials !"
        });
    }
    else{
        //check if user exist
        
        User.find({email})
        .then((data) => {
            if(data){
                //user exists
                const hashedPassword= data[0].password;
                bcrypt.compare(password, hashedPassword)
                .then((result) => {
                    if(result){
                        //Password match
                        console.log('Signed In');
                        res.json({
                            status:"SUCCESS",
                            message:"Signin successful",
                            data:data,
                        });
                    }
                    else{
                        res.json({
                            status:"FAILED",
                            message:"Invalid password",
                        });
                    }
                })
                .catch(err =>{
                    res.json({
                        status:"FAILED",
                        message:"An error occured while comparing password"
                    })
                })
            }
            else{

                res.json({
                    status:"FAILED",
                    message:"Invalid credentials"
                })
            }
        })
        .catch(err => {
            res.json({
                status:"FAILED",
                message:"An error occured while checking for existing user"
            })
        })
    }

}

module.exports={login}