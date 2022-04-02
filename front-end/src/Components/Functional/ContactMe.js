import React, {  useState } from "react";
import {useNavigate} from 'react-router-dom'




import testingAPI from "../../api";


  

function ContactMe()  {

  
  const [contact, setContact] = useState()  

  const sendContact = async(e) => {
    e.preventDefault(); 
    await fetch(testingAPI + "api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contact),
    })
    .then((res) => res.json())
    .then((data) => {
      if(data.message === "Your message has been sent!"){
        nav('/contact-me/message')
      }
    })
  }

  const nav = useNavigate();
    return(
        <>
    <div className="flex bg-blue-400">
      
       <form className="bg-white shadow-2xl shadow-black p-5 flex flex-col mx-auto my-auto sm:text-5xl" onSubmit={sendContact}>
       <h1 className="mx-auto">Contact me!</h1>
          <label className="mb-5" htmlFor="name">Name:</label>
              <input
                  className="mb-10 border-2 border-black"
                  id="name"
                  name="name"
                  type="text"
                  required="true"
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                />

          <label className="mb-5" htmlFor="emai">Email:</label>
                <input
                  className="mb-10 border-2 border-black"
                  id="email"
                  name="email"
                  type="email"
                  required="true"
                  onChange={(e) => setContact({ ...contact, email: e.target.value })}
                />

           <label className="mb-5" htmlFor="message">Message:</label>
                <textarea 
                  className="mb-10 h-64 border-2 border-black"
                  id="message"
                  name="message"
                  type="text"
                  required="true"
                  onChange={(e) => setContact({ ...contact, message: e.target.value })}
                ></textarea>

      
                          <button className="bg-blue-400 w-fit mx-auto p-5 rounded" type="submit">Send Message</button> 
                          
                          <button onClick={()=> {
                                   nav('/')
                              }} className="bg-red-400 w-fit mx-auto p-5 rounded mt-5">Back to space!</button>
      </form>
                   
    </div>


                
      </>
    )
}

export default ContactMe; 