const express=require('express');

const User=require('../models/UserModel');
const Blog = require('../models/BlogModel');

const home=(req,res)=>{

    const present_user_email=req.body.email_login
    //console.log("entered home")

    let user_details=[]
    User.collection.find({email:present_user_email}).forEach(user=>user_details.push(user))
    .then(()=>{

        //console.log("found user")

        const blogs=[]
        Blog.collection.find({Owner:{$in:user_details[0].Friends}}).forEach(blog=>blogs.push(blog))
        .then(()=>{
            
            //console.log("found posts")
            //console.log("hello")
            res.json({all_blogs:blogs})
        })

    })

}

module.exports={home}