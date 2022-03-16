import React, { Suspense, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import { useTexture, Html, OrbitControls, Billboard } from "@react-three/drei";

import savannah from '../Imgs/planetTexture/Savannah.png'


import TimeofDay from "../Supportive/TImeofDay";
import Loading from "../Supportive/Loading";
import testingAPI from "../../api";


function Plane() {
    const Savannah = useTexture(savannah);
    return (
      <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
        <meshLambertMaterial map={Savannah} />
      </mesh>
    );
  }
  

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
        <Suspense fallback={<Loading />} >
        <Canvas camera={{position: [20, 5, 0]}}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <TimeofDay />
            <Plane />
            <Billboard>
            <Html transform={true}>
                <div className="contact-form">
                <form onSubmit={sendContact}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          required="true"
          onChange={(e) => setContact({ ...contact, name: e.target.value })}
        />

        <label htmlFor="emai">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          required="true"
          onChange={(e) => setContact({ ...contact, email: e.target.value })}
        />

        <label htmlFor="message">Message</label>
        <textarea 
          id="message"
          name="message"
          type="text"
          required="true"
          onChange={(e) => setContact({ ...contact, message: e.target.value })}
        ></textarea>

      
        <button type="submit">Send Message</button>
      </form></div>
                    <div><button onClick={()=> {
                  nav('/')
                }} className="enter-button">Back to space!</button></div>
                
            </Html>
            </Billboard>
        </Canvas>
        </Suspense>
    )
}

export default ContactMe; 