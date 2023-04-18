const express=require('express');
const BlogHTML=require('../models/HtmlBlogModel')

const deleteblog=async(req,res)=>{
    const {id} = req.body;
    try {
        const result = await BlogHTML.deleteOne({ _id: id });
        if(result)
        {
            res.json({
                msg:'SUCCESS'
            });
        }
      } catch (err) {
        console.error(err);
        // handle the error here
      }
      
    

}

module.exports = {deleteblog};