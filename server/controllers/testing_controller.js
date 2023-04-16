const fetch = require('node-fetch');

const test1=async(req,res)=>{

    const responses={testcase1:"",testcase2:"",testcase3:""}

    const response=await fetch("http://localhost:3000/signin",{
        method:"POST",
        body: JSON.stringify({
            email_login: "avaneesh@gmail.com",
            password_login:"password"
          }),
          headers: { "Content-type": "application/json" },
    })

    const json =await response.json()

    if(json.status==="SUCCESS")
    {
        responses.testcase1="PASSED"
    }
    else{
        responses.testcase1="FAILED"
    }

    const response2=await fetch("http://localhost:3000/signin",{
        method:"POST",
        body: JSON.stringify({
            email_login: "avaneesh@gmail.com",
            password_login:"invalidpassword"
          }),
          headers: { "Content-type": "application/json" },
    })

    const json2=await response2.json()

    if(json2.status==="FAILED")
    {
        responses.testcase2="PASSED"
    }
    else{
        responses.testcase2="FAILED"
    }

    const response3=await fetch("http://localhost:3000/signin",{
        method:"POST",
        body: JSON.stringify({
            email_login: "invalid@gmail.com",
            password_login:"invalidpassword"
          }),
          headers: { "Content-type": "application/json" },
    })

    const json3=await response3.json()

    if(json3.status==="FAILED")
    {
        responses.testcase3="PASSED"
    }
    else{
        responses.testcase3="FAILED"
    }
    res.send("TEST CASE 1: " + responses.testcase1 + "<br>" + "TEST CASE 2: " + responses.testcase2+"<br>"+"TEST CASE 3: "+responses.testcase3)
}

const test2=async(req,res)=>{
    
    
}

module.exports={test1,test2}