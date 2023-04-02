const express=require('express');

const User=require('../models/UserModel');
const Blog = require('../models/BlogModel');

const home=(req,res)=>{

    const present_user_email=req.body.email_login
    
    const blogs = [];

    let user_details=[];
    User.find({EmailId:present_user_email})
        .then(users => {
            user_details = users[0].Friends;
            console.log(user_details);
            return Blog.find({Owner: {$in: user_details}});
        })
        .then(posts => {
            posts.forEach(post => {
                blogs.push(post);
            });
            res.json({all_blogs:blogs});
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        });
}


module.exports={home}