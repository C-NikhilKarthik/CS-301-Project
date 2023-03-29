const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema=new Schema({
    fname:String,
    lname:String,
    email:String,
    phoneNumber:Number,
    dateOfBirth:Date,
    password:String,
    Interests:[String],
    Friends:[String]
},{collection:'user_details'});

const User=mongoose.model('User',UserSchema);
module.exports=User;
