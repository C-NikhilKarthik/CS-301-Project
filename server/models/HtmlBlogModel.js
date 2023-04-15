const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const HtmlBlogSchema=new Schema({
    Owner:Schema.Types.ObjectId,
    Heading:String,
    Description:String,
    Content:String,
    Likes:[Schema.Types.ObjectId],
    Comments:[String]

},{collection:'Blog_Posts'});

const BlogHtml=mongoose.model('HtmlBlog',HtmlBlogSchema);
module.exports=BlogHtml;