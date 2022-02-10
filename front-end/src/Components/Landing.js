import React from "react";
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,  Text, Stars, Html, Scroll, ScrollControls, ContactShadows, FlyControls, Billboard, TrackballControls} from '@react-three/drei'


function Sun() {
  
  return (
    <mesh onClick={() => {
      <Html>
        <a href='www.google.com'>ClickMe</a>
      </Html>
    }}  scale={10} position={[0, 0, 0]}>
      <sphereBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='yellow' />
    </mesh>
  )
}

function Planet1() {
  return (
    
    <mesh scale={3} position={[-5, 0, 200]}>
     <Html transform={true}>
     <a href='/about'>
      <h1 className="planetText">About Me</h1></a>
    </Html>
      <sphereBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='red' />
    </mesh>
  )
}

function Planet2() {
  return (
    <mesh scale={3}  position={[5, 0, 150]}>
     <Html transform={true}>
     <a href="/projects">
      <h1 className="planetText">Projects</h1></a>
    </Html>
      
      <sphereBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='green' />

     
    </mesh>
  )
}

function Planet3() {
  return (
    <mesh scale={3} position={[-5, 0, 100]}>
       <Html transform={true}>
      <h1 className="planetText">Skills</h1>
    </Html>
      <sphereBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='purple' />

     
    </mesh>
  )
}
const Landing = () => {
  return (
    <Canvas camera={{position: [0,0,215]}} >
    <ambientLight intensity={0.2} />
    <spotLight intensity={10} position={[0,0,40]} />
    <ContactShadows />
    <TrackballControls />
    <pointLight intensity={10} position={[-10, 0, 0]} />
    <Planet3 />
    <Planet2 />
    <Planet1 />
    <Sun />
    <Stars radius={100} count={10000}  />
  </Canvas>
  )
};

export default Landing; 
