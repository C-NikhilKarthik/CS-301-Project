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



// const mongoose=require('mongoose')

// const userSchema=new mongoose.Schema({
//     Fname:{
//         type:String,
//         required:true
//     },
//     Lname:{
//         type:String,
//         required:true
//     },
//     EmailId:{
//         type:String,
//         required:true
//     },
//     Password:{
//         type:String,
//         required:true
//     },
//     Interests:[{
//         type:String,
//         required:false
//     }],
//     Friends:[{
//         type:String,
//         required:false
//     }]


// })

// module.exports=mongoose.model('user_details',userSchema)