const express = require('express');

const bcrypt = require('bcrypt');

const User = require('../models/UserModel');

const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser');

const app = express();

//add cookie parser middleware
app.use(cookieParser());


// signin
const login = async(req, res) => {
    const fileStr = req.body;
    EmailId = fileStr.email_login.trim();
    Password = fileStr.password_login.trim();

    if (EmailId == "" || Password == "") {
        res.json({
            status: "FAILED",
            message: "Empty credentials !"
        });
    }
    else {
        //check if user exist

        User.find({ EmailId })
            .then((data) => {
                if (data) {
                    //user exists

                    // Set a cookie with the user ID
                    res.cookie('userId',data[0].id);
                    const hashedPassword = data[0].Password;
                    bcrypt.compare(Password, hashedPassword)
                        .then(async(result) => {
                            if (result) {

                                //Password match
                                console.log('Signed In');
                                res.json({
                                    status: "SUCCESS",
                                    message: "Signin successful",
                                    data: data,
                                });
                            }
                            else {
                                res.json({
                                    status: "FAILED",
                                    message: "Invalid password",
                                });
                            }
                        })
                        .catch(err => {
                            res.json({
                                status: "FAILED",
                                message: "An error occured while comparing password"
                            })
                        })
                }
                else {

                    res.json({
                        status: "FAILED",
                        message: "Invalid credentials"
                    })
                }
            })
            .catch(err => {
                res.json({
                    status: "FAILED",
                    message: "An error occured while checking for existing user"
                })
            })
    }

}

module.exports = { login }