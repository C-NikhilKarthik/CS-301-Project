
const bcrypt=require('bcrypt');

const User=require('../models/UserModel');

const bodyParser=require('body-parser');

//mongodb user model

//Password handler

//Signup
const signup=(req,res)=>{
    // res.send('hii');
    let {userName,fname,lname,email,password}=req.body;
    userName=userName.trim();
    fname=fname.trim();
    lname=lname.trim();
    email=email.trim();
    password=password.trim();
    
    if(userName==""||fname==""||lname==""||email==""||password==""){
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
    else if(!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
{
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
        User.findOne({$or:[{EmailId: email},{UserName:userName}]  }).then(result => {
            if (result) {
              res.json({
                status: "FAILED",
                message: "User with the provided email/username already exists",
              });
            } else {
              const saltRounds = 10;
              bcrypt.hash(password, saltRounds).then(hashedPassword => {
                const newUser = new User({
                  UserName:userName,
                  Fname: fname,
                  Lname: lname,
                  EmailId: email,
                  Password: hashedPassword,
                });
                newUser
                  .save()
                  .then(result => {
                    console.log("Registration Success");
                    res.json({
                      status: "SUCCESS",
                      message: "Signup successful",
                      data: result,
                    });
                  })
                  .catch(err => {
                    console.error(err);
                    res.json({
                      status: "FAILED",
                      message: "An error occurred while saving user account!",
                    });
                  });
              }).catch(err => {
                console.error(err);
                res.json({
                  status: "FAILED",
                  message: "An error occurred while hashing password!",
                });
              });
            }
          }).catch(err => {
            console.error(err);
            res.json({
              status: "FAILED",
              message: "An error occurred while checking for existing user!",
            });
          });
    }

}


module.exports={signup};