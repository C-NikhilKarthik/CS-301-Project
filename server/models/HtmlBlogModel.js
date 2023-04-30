const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    CommentId: Schema.Types.ObjectId,
    text: String
});

const HtmlBlogSchema = new Schema({
    Owner: Schema.Types.ObjectId,
    Time:String,
    Heading: String,
    Desc: String,
    Content: String,
    Tags:[String],
    Likes: [Schema.Types.ObjectId],
    Comments: [CommentSchema]
}, { collection: 'Blog_Posts' });

const BlogHtml = mongoose.model('HtmlBlog', HtmlBlogSchema);
module.exports = BlogHtml;
