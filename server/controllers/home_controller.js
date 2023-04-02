const express=require('express');

const User=require('../models/UserModel');
const Blog = require('../models/BlogModel');

const home=(req,res)=>{

    const present_user_email=req.body.email_login
    
    
    let user_details=[]
    User.collection.find({EmailId:present_user_email}).forEach(user=>user_details.push(user))
    .then(()=>{

       
        const blogs=[]
        

        if(typeof user_details[0].Friends!=='undefined')
        {
            
            Blog.collection.find({Owner:{$in:user_details[0].Friends}}).forEach(blog=>blogs.push(blog))
            .then(()=>{
                
                res.json({all_blogs:blogs})
            })
        }
        else{
            
            res.json({all_blogs:blogs})
        }

    })

}

module.exports={home}