const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const jwt=require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keysecret=process.env.SECRET_KEY



const UserSchema=new Schema({
    UserName:String,
    Fname:String,
    Lname:String,
    EmailId:String,
    PhoneNumber:Number,
    DateOfBirth:Date,
    Password:String,
    Interests:[String],
    Friends:[Schema.Types.ObjectId],
    tokens:[
        {
            token:{
                type:String,
                required:true,
            }
        }
    ],
    verifytoken:{
        type:String
    }

},{collection:'user_details'});

//hashed password
UserSchema.pre("save",async function (next){
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.password=await bcrypt.hash(this.password,12);
    }
    next()

});

//token generate
UserSchema.methods.generateAuthtoken= async function(){
    console.log('trying to generate token');
    try {
        let token23 = jwt.sign({_id:this._id},keysecret,{
            expiresIn:"1d"
        });

        this.tokens=this.tokens.concat({token:token23});
        await this.save();
        return token23;
    } catch (error) {
        res.status(422).json(error)
    }
}

const User=mongoose.model('User',UserSchema);
module.exports=User;



