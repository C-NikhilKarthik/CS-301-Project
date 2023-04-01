
const bcrypt=require('bcrypt');

const User=require('../models/UserModel');

const bodyParser=require('body-parser');

//mongodb user model

//Password handler

//Signup
const signup=(req,res)=>{
    // res.send('hii');
    let {fname,lname,email,password}=req.body;
    fname=fname.trim();
    lname=lname.trim();
    email=email.trim();
    password=password.trim();
    
    if(fname==""||lname==""||email==""||password==""){
        res.json({
            status: "FAILED",
            message:"Empty input fields!"
        });
    }
    else if(!/^[a-zA-Z]*$/.test(fname)){
        res.json({
            status: "FAILED",
            message:"Invalid fname entered"
        })
    }
    else if(!/^[a-zA-Z]*$/.test(lname)){
        res.json({
            status: "FAILED",
            message:"Invalid lname entered"
        })
    }
    else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)){
        res.json({
            status: "FAILED",
            message: "Invalid email entered"
        })
    }
    else if(password.length<8){
        res.json({
            status:"FAILED",
            message:"Password is too short!"
        })
    }
    else{
        // checking if user already exists
        User.find({email}).then(result => {
                if(result.length){
                    //A user already exists
                    res.json({
                        status:"FAILED",
                        message:"User with the provided email already exists"
                    })
                }else{
                    //Try to create new user

                    //password handling
                    const saltRounds=10;
                    bcrypt.hash(password,saltRounds).then(hashedPassword=>{
                        const newUser=new User({
                            Fname:fname,
                            Lname:lname,
                            EmailId:email,
                            Password:hashedPassword

                        });
                        newUser.save().then(result => {
                            console.log('Registration Success')
                            res.json({
                                status:"SUCCESS",
                                message: "Signup successful",
                                data: result,
                            })
                        })
                        .catch(err => {
                            res.json({
                                status:"FAILED",
                                message:"An error occured while saving user account!"
                            })
                        })

                    })
                    .catch(err => {
                        res.json({
                            status:"FAILED",
                            message:"An error occured while hashing password!"
                        })
                    })
                }
        }).catch(err=>{
            console.log(err);
            res.json({
                status:"FAILED",
                message:"An error occured while checking for existing user!"
            })
        })
    }

}


module.exports={signup};