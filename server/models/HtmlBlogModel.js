const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const HtmlBlogSchema=new Schema({
    Owner:String,
    Content:String,

},{collection:'Blog_Posts'});

const BlogHtml=mongoose.model('Blog',HtmlBlogSchema);
module.exports=BlogHtml;