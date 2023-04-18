const User = require("../models/UserModel");
const interests=async(req,res)=>{
    const user_interests=[]
    for(let i=0;i<req.body.cards.length;i++)
    {
        if(req.body.cards[i].Selected===true)
        {
            user_interests.push(req.body.cards[i].title)
        }
    }

    User.collection.updateOne({UserName:req.body.user},{$set:{Interests:user_interests}})
    .then(()=>{
        console.log("interests added")
        res.json({mssg:"SUCCESS"})
    })
    
}

module.exports={interests}