import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {Billboard, Html, Sky, OrbitControls, useTexture } from "@react-three/drei"
import gasGiant from '../Imgs/planetTexture/Gaseous1.png'

function Plane () {
  const gas = useTexture(gasGiant)
  return(
    <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial map={gas} />
    </mesh>
  )
}

function Mountain() {

  return (
    <mesh scale={10}  position={[-20, 0, 50]}>
      <coneBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='purple' />

    </mesh>
  )
}
const AboutMe = () => {
  return (
   <Canvas camera={{position: [0, 0, -25]}}>
   <Suspense fallback={null}>
   <ambientLight intensity={.5} />

    <OrbitControls enableZoom={false} />

    <Mountain />

   <mesh  position={[0, 10, 0]}>
   <Billboard>
   
   <Html fullscreen transform={true}>
   
   
   <div className="center-div">
   
   <div className="center-text">
     
     <h1>Chris Carver</h1>
     <h2>Full Stack JavaScript Developer</h2> 
     <p>
       Self taught and HIGHLY motivated, full stack JavaScript developer
       looking for a career change. Growing up in the oil industry I have
       learned the value of hard work and determination. I started learning
       in October 2020 with "Python For Everybody" on Coursera.This is where I
       learned the fundamentals of programming. After that I started learning
       HTML and CSS and eventually found Team Treehouse where I started the Full
       Stack JavaScript Tech Degree learning React, Node, Express,
       API's and so much more. I Finished the Tech Degree in February 2022.
       All 10 projects from the Tech Degree can be found on my GitHub account.
     </p>
   </div>
 </div>
  </Html>
   </Billboard>
   </mesh>


     <Sky sunPosition={[0, 1, 0]} />
     <Plane />
     </Suspense>
   </Canvas>
  );
};

export default AboutMe;
