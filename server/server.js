const express=require('express')
require('dotenv').config()
const connectDb=require('./config/dbConn')
const {logger}=require('./middleware/logger')
const {logEvents}=require('./middleware/logger')
const errorHandler=require('./middleware/errorHandler')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const corsOptions=require('./config/corsOptions')
const app=express()
const path=require('path')
const bodyParser = require('body-parser');
PORT=5000

//Schema for registration
const User=require('./models/UserModel');

//Schema for Uploading Posts
const Blog = require('./models/BlogModel');

app.use(logger)

//to be able to read data from the url or form which we send
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }));



connectDb()

//for running with react app:
app.use(express.static(path.join(__dirname,'build')))
app.use('/',require('./routes/root'))

//SingIn
app.use('/signin',require('./routes/SignIn'))

//SignUp
app.use('/signup',require('./routes/SignUp'))

//CreateBlog
app.use('/postBlog',require('./routes/CreateBlog'))

//Home
app.use('/home',require('./routes/Home'))

//Explore Page
app.use('/explore',require('./routes/Explore'))

//Friends
app.use('/friends',require('./routes/Friends_list'))



app.listen(PORT,()=>{
            console.log(process.env.NODE_ENV)
            app.use(errorHandler)
            console.log("listening on port 5000")
})

