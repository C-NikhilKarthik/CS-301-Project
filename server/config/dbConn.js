//Method 1

const mongoose=require('mongoose')
const connectDB=async()=>{
    try{
        
        await mongoose.connect(process.env.DATABASE_URI)
        console.log("connected to database")
    }
    catch(err){
        console.log(err)
    }
}

module.exports=connectDB



//Method 2

// const express=require('express')
// const app=express();
// const mongoose = require('mongoose');
// const session = require('express-session');
// const MongoStore = require('connect-mongo');

// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.DATABASE_URI);
//     console.log("connected to database");

//     const sessionStore = MongoStore.create({
//       mongoUrl: process.env.DATABASE_URI,
//       ttl: 60 * 60, // 1 hour
//       autoRemove: 'interval',
//       autoRemoveInterval: 10, // In minutes. Default
//       crypto: {
//         secret: process.env.SESSION_SECRET
//       }
//     });

//     app.use(session({
//       secret: process.env.SESSION_SECRET,
//       resave: false,
//       saveUninitialized: true,
//       store: sessionStore,
//       cookie: {
//         maxAge: 1000 * 60 * 60, // 1 hour
//         sameSite: true,
//         secure: process.env.NODE_ENV === 'production'
//       }
//     }));

//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = connectDB;
