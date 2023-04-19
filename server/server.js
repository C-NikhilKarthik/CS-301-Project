const express=require('express')
require('dotenv').config()
// const {connectToDb,getDb}=require('./config/dbConn')
const connectDb=require('./config/dbConn')
//const mongoose=require('mongoose')
const {logger}=require('./middleware/logger')
const {logEvents}=require('./middleware/logger')
const errorHandler=require('./middleware/errorHandler')
const cookieParser=require('cookie-parser')
const cors=require('cors')
const corsOptions=require('./config/corsOptions')
const app=express()
const path=require('path')
const bodyParser = require('body-parser');

const User=require('./models/UserModel');
const Blog = require('./models/BlogModel');

app.use(logger)
app.use(cors());
// app.use(cors)
// app.use(cors(corsOptions))
app.use(express.urlencoded({extended:false}))//to be able to read data from the url or form which we send
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

//Friends
app.use('/friends',require('./routes/Friends_list'))

//Home
app.use('/home',require('./routes/Home'))

//PostBlog
app.use('/postBlog',require('./routes/CreateBlog'))

//PostBlogHTML
app.use('/htmlBlog',require('./routes/CreateBlogHtml'))

//Explore Page
app.use('/explore',require('./routes/Explore'))

//read more on blog
app.use('/readmore',require('./routes/posts'))

//Password Reset

app.use('/sendpasswordlink',require('./routes/resetPass'))

app.use('/forgotpassword/:id/:token',require('./routes/verifyUser'))

app.use('/:id/:token',require('./routes/changePassword'))

//search friends
app.use('/searchFriends',require('./routes/searchFriends'));

//add Friends
app.use('/addFriends',require('./routes/AddFriend'));

//remove Friends
app.use('/removeFriends',require('./routes/RemoveFriends'));

//search query in home page
app.use('/search_query_home',require('./routes/SearchHome'))

//search query in your blogs page
app.use('/search_query_yourblogs',require('./routes/SearchYourBlogs'))

//your blogs
app.use('/your_blogs',require('./routes/YourBlogs'))

//edit blogs
app.use('/edit_blog',require('./routes/EditBlog'))

//save_edited_blogs
app.use('/save_edited_blog',require('./routes/EditBlog_save'))

//delete blog
app.use('/deletBlog',require('./routes/deleteBlog'))

//likes
app.use('/likes',require('./routes/Likes'))

//unlikes
app.use('/unlikes',require('./routes/Unlikes'))

//profile
app.use('/profile',require('./routes/Profile'))

//submit interests
app.use('/handleinterests',require('./routes/HandleInterests'))

//users
app.use('/users',require('./routes/Users'))

//add comments
app.use('/addComment',require('./routes/AddComment'))

//add comments
app.use('/getComments',require('./routes/GetComments'))

//add comments
app.use('/deleteComments',require('./routes/DeleteComments'))

//get more blogs
app.use('/get_more_blogs',require('./routes/getmoreblogs'))

//get more blogs for explore
app.use('/get_more_blogs_explpore',require('./routes/getmoreblogsExplore'))

//test
app.use('/testing',require('./routes/testing'))


app.all('*', (req, res) => {
    res.status(404)
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, 'views', '404.html'))
    } else if (req.accepts('json')) {
        res.json({ message: '404 Not Found' })
    } else {
        res.type('txt').send('404 Not Found')
    }
})


//Listening on port 5000
app.listen(5000,()=>{
            console.log(process.env.NODE_ENV)
            app.use(errorHandler)
            console.log("listening on port 5000")
})

