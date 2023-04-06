const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const HtmlBlogSchema=new Schema({
    Owner:Schema.Types.ObjectId,
    Content:String,
    Likes:Number,
    Comments:[String]

},{collection:'Blog_Posts'});

const BlogHtml=mongoose.model('HtmlBlog',HtmlBlogSchema);
module.exports=BlogHtml;