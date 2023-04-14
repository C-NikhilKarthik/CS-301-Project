const Blog = require("../models/BlogModel");
const {ObjectId}=require('mongodb')

const edit=async(req,res)=>{
  const blogId=req.body.BlogId
  
  
  console.log(blogId)

  const blog_info= await Blog.collection.findOne({_id: new ObjectId(blogId)})
  console.log(blog_info)
  res.json({blog_details:blog_info})
  

}

module.exports={edit}

