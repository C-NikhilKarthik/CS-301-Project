const User = require("../models/UserModel");
const Blog = require("../models/BlogModel");
const { ObjectId } = require("mongodb");
const getmore=async(req,res)=>{
    const present_user_email = req.body.email_login;
    const present_blog_count=req.body.blog_num

  const user_details=await User.collection.findOne({ EmailId: present_user_email })
  let blogs=[]
  if (typeof(user_details.Tags) !== "undefined") {
    const cursor=Blog.collection.find({ Owner: { $ne: user_details[0]._id },Tags:{$in:user_details[0].Interests} })
    blogs=await cursor.toArray()
    blogs=blogs.slice(present_blog_count,present_blog_count+5) 
          
    const blog_owners=[]

    //reduce load time more by storing owner username directly in blogs collection
    for(let i=0;i<blogs.length;i++)
    {
      const user=await User.collection.findOne({_id:new ObjectId(blogs[i].Owner)})
      if(user!=null)
      {
        blog_owners.push(user.UserName)
      }
      else{
        console.log(blogs[i].Owner)
      }
    }

    
    res.json({ all_blogs: blogs ,all_owners:blog_owners,blog_count:(present_blog_count+blogs.length)});
                 
    }
    else {
      res.json({ all_blogs: blogs });
    }


}

module.exports={getmore}