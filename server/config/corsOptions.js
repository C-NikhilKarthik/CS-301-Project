const allowedOrigins=require('./allowedOrigins')

const corsOptions={
    origin:(origin,callback)=>{

        /*!==-1 will limit only the ones in allowedOrigins to access the rest api but
        we also want applications like postman to access so we also tell !origin*/
        if(allowedOrigins.indexOf(origin)!==-1 || !origin)
        {
            callback(null,true)
        }
        else{
            callback(new Error('Not allowed by CORS'))                
        }
    },
    credentials:true,
    optionsSuccessStatus:200
    
}

module.exports=corsOptions
