const Blog = require("../models/BlogModel");
const {ObjectId}=require('mongodb')

// // Get all posts
// exports.getPosts = async (req, res, next) => {
//   try {
//     const posts = await Blog.find();
//     res.status(200).json(posts);
//   } catch (err) {
//     next(err);
//   }
// };

// // Get a post by ID
// exports.getPostById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const post = await Blog.findById(id);
//     if (!post) {
//       return res.status(404).json({ message: "Post not found" });
//     }
//     res.status(200).json(post);
//   } catch (err) {
//     next(err);
//   }
// };

const readmore=(req,res)=>{
  const blogId=req.body.BlogId
  
  
  const blog_info=[]
  Blog.collection.find({_id: new ObjectId(blogId)}).forEach((blog)=>blog_info.push(blog))
  .then(()=>{
    res.json({blog_details:blog_info[0]})
  })

}

module.exports={readmore}

  