import React, {useState} from 'react'
import {ToastContainer, toast} from 'react-toastify';
//import { Link } from "react-router-dom";
//import InputField from "../Components/InputField";
import { AnimatePresence,  motion } from "framer-motion";



const PasswordReset = () => {

    const [email,setEmail] = useState("");

    const[message,setMessage]=useState("");

    const setVal= (e)=>{
        setEmail(e.target.value)
    }

    const sendLink=async(e)=>{
        e.preventDefault();
        
            const res= await fetch("/sendpasswordlink",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({email})
            });
    
            const data=await res.json();
            if(data.status===201){
                setEmail("");
                setMessage(true)
            }else{
                toast.error("invalid user")
            }
        
    }

  return (
    

   <><section>
   <div className="form-data">
       <div className="form-heading">
       <h1>Enter your email</h1>
       </div>

       {message ? <p style={{color:"green",fontWeight:"bold"}}>password reset link send successfully in your email</p>:""}

       <form>
           <div className="form-input">
               <label htmlFor="email">Email</label>
               <input type="email" value={email} onChange={setVal} name="email" id="email" placeholder='Enter your Email Address'/>
           </div>

           <button className='btn' onClick={sendLink}>Send</button>
       </form>
       <ToastContainer />
   </div>
</section>
   </> 

    
//     <>  

// <div className="h-screen bg-cover flex justify-center p-3 items-center bg-center w-screen bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')]">
//     {/* // <div className="h-screen bg-cover flex justify-center p-3 items-center bg-center w-screen bg-slate-900"> */}
//       <div className="absolute inset-0 h-full w-full gridblock"></div>
//       <motion.div
//         animate={{ x: 0, transition: { duration: 0.9,ease:"easeInOut"} ,opacity:1}}
//         initial={{x:-100,opacity:0}}
//         className="z-[2] relative p-3 h-fit sm:w-auto w-full rounded-md flex justify-start sm:justify-center items-center overflow-hidden shadow-lg "
//       >
//         <img
//           className="absolute z-[1] left-0 w-full h-full object-cover"
//           src="/images/login_cleanup.jpg"
//         />
//         <div className="relative h-full sm:w-[40rem] z-[4] flex">
//           <div className="flex flex-col sm:w-3/5 p-7 gap-4">
//             <div className="text-slate-200 font-semibold">
//               <p className="whitespace-nowrap">The BlogPenn</p>
//             </div>
//             <AnimatePresence initial="false">
                
//             </AnimatePresence>
//           </div>
//         </div>
//       </motion.div>
//     </div>








//         {/* <section>
//             <div className="form-data">
//                 <div className="form-heading">
//                 <h1>Enter your email</h1>
//                 </div>

//                 <form>
//                     <div className="form-input">
//                         <label htmlFor="email">Email</label>
//                         <input type="email" value={email} onChange={setVal} name="email" id="email" placeholder='Enter your Email Address'/>
//                     </div>

//                     <button className='btn' onClick={sendLink}>Login</button>
//                 </form>
                
//             </div>
//         </section> */}
//     </>
  )
}

export default PasswordReset
