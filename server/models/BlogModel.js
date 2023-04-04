const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const BlogSchema=new Schema({
    Owner:String,
    Topic:String,
    Title:String,
    Image_link:String,
    Description:String,
    Content:String,

},{collection:'Blog_Posts'});

const Blog=mongoose.model('Blog',BlogSchema);
module.exports=Blog;