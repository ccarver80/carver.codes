import React from "react";
import {useNavigate} from 'react-router-dom'





  

function SentMessage() {
    const nav = useNavigate();
    return(
       <div className="flex  bg-blue-400 h-screen">
         <div className=" flex rounded-xl shadow-2xl shadow-black flex-col mx-auto my-auto h-96 p-10 bg-lime-200 ">
           <h1 className="mx-auto my-auto text-4xl">Your message was sent!</h1>
           <button onClick={()=> {
                                   nav('/contact-me')
                              }} className="bg-blue-400 w-fit mx-auto p-5 rounded">Go back</button>
           <button onClick={()=> {
                                   nav('/')
                              }} className="bg-red-400 w-fit mx-auto p-5 rounded mt-5">Go to space!</button>
         </div>
       </div>
      
    )
}

export default SentMessage;