const express=require('express')
//initialising the app;
const app =express()

app.listen(3000,()=>{
    console.log("app listening on port 3000")

})

app.get('/books',(req,res)=>{
    res.json({mssg:"welcome to the api"})
})