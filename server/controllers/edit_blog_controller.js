const Blog = require("../models/BlogModel");
const {ObjectId}=require('mongodb')

const edit=async(req,res)=>{
  const blogId=req.body.BlogId
  
  

  const blog_info= await Blog.collection.findOne({_id: new ObjectId(blogId)})
  res.json({blog_details:blog_info})
  

}

module.exports={edit}

