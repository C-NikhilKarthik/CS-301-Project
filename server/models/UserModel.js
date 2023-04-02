const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    Fname:String,
    Lname:String,
    EmailId:String,
    PhoneNumber:Number,
    DateOfBirth:Date,
    Password:String,
    Interests:[String],
    Friends:[Schema.Types.ObjectId]
},{collection:'user_details'});

const User=mongoose.model('User',UserSchema);
module.exports=User;



