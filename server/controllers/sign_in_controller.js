const express=require('express')

const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');

const connectDB= require('../config/dbConn')

//Used to hash password
const bcrypt=require('bcrypt');

//modaels are called
const User=require('../models/UserModel');

//body-parser
const bodyParser=require('body-parser');

// const {userId} = require('../data/UserId')
const app=express();

const sessionStore = new MongoStore({
    mongoUrl: 'mongodb+srv://AvaneeshS:aviproject%40123@cluster0.rpkvd1e.mongodb.net/project?retrywrites=true&w=majority',
    // or client: mongoClientInstance,
  });

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60, // 1 hour
      sameSite: true,
      secure: process.env.NODE_ENV === 'production' // Only set secure flag in production
    }
  }));


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
                // req.session.userId = data[0]._id;
                console.log(data[0]._id);
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