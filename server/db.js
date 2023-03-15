
const {MongoClient}=require('mongodb')

let dbConnection

/*connectToDb is for connecting to database and getDb will return the database connection*/
module.exports={
    connectToDb:(call_back)=>{
        MongoClient.connect('mongodb://localhost:27017/Project')
        .then((client)=>{
            dbConnection=client.db()
            return call_back()
        })
        .catch(err=>{
            console.log("hello")
            console.log(err)
            return call_back()
        })
    },
    getDb:()=>dbConnection
}