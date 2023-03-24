// const {MongoClient}=require('mongodb')

// let dbConnection

// /*connectToDb is for connecting to database and getDb will return the database connection*/
// module.exports={
//     connectToDb:(call_back)=>{

//         let url2='mongodb://localhost:27017/Project'
//         let url='mongodb+srv://AvaneeshS:aviproject%40123@cluster0.rpkvd1e.mongodb.net/project'
//         MongoClient.connect(url)
//         .then((client)=>{
//             dbConnection=client.db()
//             return call_back()
//         })
//         .catch(err=>{
//             console.log(err)
//             return call_back()
//         })
//     },
//     getDb:()=>dbConnection
// }

require('dotenv').config()

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