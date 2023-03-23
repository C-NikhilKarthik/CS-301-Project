import React, {useState} from "react";
import InputField from "../Components/InputField";
import { AnimatePresence, motion } from "framer-motion";

function Login() {
  
  const [login, setLogin] = useState(true);

  //for create account:
  const [fname,setFname]=useState('')
  const [lname,setLname]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [message,setMessage]=useState('')
  const [signupMessage,setsignupMessage]=useState('')

  //for login:
  const [email_login,setEmail_login]=useState('')
  const [password_login,setPassword_login]=useState('')

  const handleSubmit=async(e)=>{
    e.preventDefault();
    const response=await createAccount(fname,lname,email,password);
    if(response.status==='FAILED')
  {
    setsignupMessage(response.message)
  }
}

const createAccount=async(fname,lname,email,password)=>{
  // console.log(email,password);
  try{
    const response=await fetch('/signup',{
      method:'POST',
      body:JSON.stringify({
        fname:fname,
        lname:lname,
        email:email,
        password:password
      }),
      headers:{'Content-type':'application/json'},
    });
    const json2=response.json();
    return json2;
  }catch(error){
    console.log(error);
}
}

const handleSubmitLogin=async (e)=>{
  e.preventDefault();
  const response=await loginhandle(email_login,password_login); 
  
  if(response.status==='FAILED')
  {
    // alert('Enter email/password');
    setMessage(response.message)
  }
  else if(response.status==='SUCCESS')
  {
    var url=new URL('http://localhost:3000/home')
    url.searchParams.set('email',`${email_login}`)
    window.location.replace(url);
  }
}
const loginhandle=async(email_l,password_l)=>{
  console.log(email_l,password_l);
  try{
    const response=await fetch('/signin',{
      method:'POST',
      body:JSON.stringify({
        email_login:email_l,
        password_login:password_l
      }),
      headers:{'Content-type':'application/json'},
    });
    const json=response.json();
    return json;
  }catch(error){
    console.log(error);
  }

}

  return (
    
    <div className="h-screen bg-cover flex justify-center p-3 items-center bg-center w-screen bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')]">
    {/* // <div className="h-screen bg-cover flex justify-center p-3 items-center bg-center w-screen bg-slate-900"> */}
      <div className="absolute inset-0 h-full w-full gridblock"></div>
      <motion.div
        animate={{ x: 0, transition: { duration: 0.9,ease:"easeInOut"} ,opacity:1}}
        initial={{x:-100,opacity:0}}
        className="z-[2] relative p-3 h-fit sm:w-auto w-full rounded-md flex justify-start sm:justify-center items-center overflow-hidden shadow-lg "
      >
        <img
          className="absolute z-[1] left-0 w-full h-full object-cover"
          src="/images/login_cleanup.jpg"
        />
        <div className="relative h-full sm:w-[40rem] z-[4] flex">
          <div className="flex flex-col sm:w-3/5 p-7 gap-4">
            <div className="text-slate-200 font-semibold">
              <p className="whitespace-nowrap">The BlogPenn</p>
            </div>
            <AnimatePresence initial="false">
            {login ? (
              
              <motion.div initial={{x:-100,scale:0.75,transition:{duration:0.9,delay:0.5,ease:"easeInOut"}}} exit={{x:100,scale:0.75}} animate={{x:0,scale:1}} className="py-12 gap-4 flex flex-col px-3">
                <div className="flex text-slate-400 flex-col gap-3">
                  <div className="flex gap-1">
                    <p className="text-2xl font-semibold text-slate-300 whitespace-nowrap">
                      Welcome Back
                    </p>
                    <p className="text-2xl text-blue-500">.</p>
                  </div>
                  <div className="flex text-xs gap-2">
                    <p>Not a member yet?</p>
                    <p
                      onClick={() => {
                        setLogin(!login);
                      }}
                      className="cursor-pointer text-blue-500"
                    >
                      Sign up
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:pr-10">
                  <InputField
                    type={"email"}
                    name={"email2"}
                    label={"Email Address"}
                    icon={"mail"}
                    value={email_login}
                    onChange={(e)=>setEmail_login(e.target.value)}
                    
                  />
                  <InputField
                    type={"password"}
                    name={"password2"}
                    label={"Password"}
                    icon={"lock"}
                    value={password_login}
                    onChange={(e)=>setPassword_login(e.target.value)}
                    
                  />
                  {message &&(
                    <p className="text-red-500 text-xs">{message}</p>
                  )}
                    <button
                      type="button"
                      onClick={handleSubmitLogin}
                      className="w-full bg-blue-600 mt-3 px-3 py-2 text-sm rounded-md text-slate-300 hover:bg-blue-700"
                    >
                      Log In
                    </button>
                  
                  <div className="flex text-xs gap-2">
                    <p className="text-slate-400 hover:text-blue-500 cursor-pointer">
                      Forgot your password?
                    </p>
                  </div>
                </div>
              </motion.div>
            
            ) : (
              
              <div className="py-12 gap-4 flex flex-col px-3">
                <div className="flex text-slate-400 flex-col gap-3">
                  <p className="text-sm font-semibold">START FOR FREE</p>
                  <div className="flex gap-1">
                    <p className="text-2xl font-semibold text-slate-300 whitespace-nowrap">
                      Create new account
                    </p>
                    <p className="text-2xl text-blue-500">.</p>
                  </div>
                  <div className="flex text-xs gap-2">
                    <p>Already a member?</p>
                    <p
                      onClick={() => {
                        setLogin(!login);
                      }}
                      className="cursor-pointer text-blue-500"
                    >
                      Log In
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-3 sm:pr-10">
                  <div className="flex gap-3 mt-3">
                    <InputField
                      type={"text"}
                      name={"Fname"}
                      label={"First Name"}
                      icon={"person"}
                      value={fname}
                      onChange={(e)=>setFname(e.target.value)}
                     
                      
                    />
                    <InputField
                      type={"text"}
                      name={"Lname"}
                      label={"Last Name"}
                      icon={"person"}
                      value={lname}
                      onChange={(e)=>setLname(e.target.value)}
                      
                    />
                  </div>
                  <InputField
                    type={"email"}
                    name={"Email"}
                    label={"Email Address"}
                    icon={"mail"}
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                   
                  />
                  <InputField
                    type={"password"}
                    name={"Password"}
                    label={"Password"}
                    icon={"lock"}
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                   
                  />
                   {signupMessage &&(
                    <p className="text-red-500 text-xs">{signupMessage}</p>
                  )}
                  <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-blue-600 mt-3 px-3 py-2 text-sm rounded-md text-slate-300 hover:bg-blue-700"
                  >
                    Create Account
                  </button>
                  
                </div>
              </div>
              
            )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
   

  );
}

export default Login;
