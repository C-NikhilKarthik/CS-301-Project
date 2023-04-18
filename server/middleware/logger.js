const {format}=require('date-fns')
const {v4:uuid}=require('uuid')
const fs=require('fs')
const fsPromises=require('fs').promises
const path=require('path')

//uuid will create a specific id for every log item
const logEvents=async(message,logFileName)=>{
    const dateTime=`${format(new Date(),'yyyyMMdd\tHH:mm:ss')}`
    const logitem=`${dateTime}\t${uuid()}\t${message}\n` 

    try{
        //if logs folder does not exist we have to create one
        if(!fs.existsSync(path.join(__dirname,'..','logs')))
        {
            await fsPromises.mkdir(path.join(__dirname,'..','logs'))
        }
        await fsPromises.appendFile(path.join(__dirname,'..','logs',logFileName),logitem)
    }
    catch(err)
    {
        console.log(err)
    }
}


const logger=(req,res,next)=>{
    logEvents(`${req.method}\t${req.url}\t${req.headers.origin}`,'reqLog.log')
    console.log(`${req.method} ${req.path}`)
    next()
}

module.exports={logEvents,logger}
