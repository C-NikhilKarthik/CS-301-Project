const express=require('express')
const {connectToDb,getDb}=require('./db')
const app=express()
const path=require('path')
app.use(express.urlencoded({extended:false}))//to be able to read data from the url or form which we send
app.use(express.json())

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var ObjectId = require('mongodb').ObjectId;
let present_user_id;

//db connection:
let db
connectToDb((err)=>{
    if(!err){
        app.listen(5000,()=>{
            console.log("listening on port 5000")
        })
        db=getDb()
        
    }
})

//for running with react app:
app.use(express.static(path.join(__dirname,'build')))

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'build','index.html'))
})

app.post('/authentication',(req,res)=>{
    const {fname,lname,email,password,email_login,password_login}=req.body
    if(email_login!='' && password_login!='')
    {
        //login authentication:
        let users=[]
        db.collection('user_details').find({EmailId:email_login,Password:password_login}).forEach(person=>users.push(person))
        .then(()=>{
            if(users.length>0)
            {
                console.log(users[0])
                present_user_id=users[0]._id
                
                res.json({mssg:"valid"})
            }
            else{
                res.json({mssg:"invalid"})
            }
            
        })

    }
    else{
        //create new account:
        console.log("create account")

        let exist=[]
        db.collection('user_details').find({EmailId:email}).forEach(person=>exist.push(person))
        .then(()=>{

            // {add condition to verify if email id valid}
            if(exist.length===0)
            {
                db.collection('user_details').insertOne({Fname:fname,Lname:lname,EmailId:email,Password:password,Interests:[]})
                .then(()=>{
                    console.log('new user added')
                    res.json({mssg:"new_account"})
                })
            }
            else{
                console.log("new account creation failed")
                res.json({mssg:"new_account_fail"})
            }

        })
          
    }
    
})


app.get('/home',(req,res)=>{

    //console.log("entered home")

    let user_details=[]
    db.collection('user_details').find({_id:present_user_id}).forEach(user=>user_details.push(user))
    .then(()=>{

        //console.log("found user")

        const blogs=[]
        db.collection('Blog_Posts').find({Owner:{$in:user_details[0].Friends},Topic:{$in:user_details[0].Interests}}).forEach(blog=>blogs.push(blog))
        .then(()=>{
            
            //console.log("found posts")

            const needed_blogs=[]
            for(let i=0;i<blogs.length;i++)
            {
                needed_blogs.push(blogs[i])
            }
            //console.log(needed_blogs)
            res.json({all_blogs:needed_blogs})
        })

    })

})


app.post('/getowner',(req,res)=>{
    //console.log(req.body)
    const ownerid=new ObjectId(req.body.blog_owner)
    
    const owner=[]
    db.collection('user_details').find({_id:ownerid}).forEach(user=>owner.push(user))
        .then(()=>{
            //console.log("hello")
            //console.log(owner[0].EmailId)
            res.json({owner_name:owner[0].EmailId})
        })

})

app.post('/test',(req,res)=>{
    console.log("testing")
    console.log(req.body)
})


// app.get('/explore',(req,res)=>{

//     //req.params.id will be a string
//     var id=new ObjectId(present_user_id)

//     let user=[]
//     db.collection('user_details').find({_id:id}).forEach(person=>user.push(person))
//     .then(()=>{

//         let user_interests=new Set()
//         for(let i=0;i<user[0].Interests.length;i++)
//         {
//             user_interests.add(user[0].Interests[i])
//         }
        
//         let all_posts=[]
//     db.collection('Blog_Posts').find({Owner:{$nin:[id]}}).forEach(post=>all_posts.push(post))
//     .then(()=>{

//         possible_posts=[]
//         for(let j=0;j<all_posts.length;j++)
//         {
//             if(user_interests.has(all_posts[j].Topic)===true)
//             {
//                 possible_posts.push(all_posts[j])
//             }
//         }

//         let seen_ran=new Set()
//         let count=0
//         let show_posts=[]

//         //keeping minimum number of posts to be shown as 2
//         if(possible_posts.length>=2)
//         {
//             //generating 2 random posts
//             while(true)
//             {
//                 //generating random integer from [0,all_length-1]
//                 let ran=Math.floor(Math.random()*all_posts.length)
//                 if(count===2)
//                 {
//                     break
//                 }
//                 else if(ran<all_posts.length && seen_ran.has(ran)===false && user_interests.has(all_posts[ran].Topic)==true)
//                 {
//                     show_posts.push(all_posts[ran])
//                     seen_ran.add(ran)
//                     count++
//                 }

//             }
//         }
//         else{
//             show_posts=possible_posts
//         }

//         res.json(show_posts)
         
//     })

//     })

// })


// app.post('/create_blog',(req,res)=>{
//     // console.log(req.body)
//     // const {Id,post_text}=req.body

//     // db.collection('Blog_Posts').updateOne({_id:new ObjectId(Id)},{$set:{Post_text:post_text}}).then(()=>{
//     //     res.json("document updated")
//     // })

// })

