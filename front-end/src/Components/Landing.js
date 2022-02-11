import React, { Suspense } from "react";
import {BrowserRouter, Route, Routes, useNavigate} from 'react-router-dom'
import {Canvas} from '@react-three/fiber'
import {OrbitControls,  Text, Stars, Html,  ContactShadows,  Billboard, useTexture} from '@react-three/drei'
import gasGiant from '../Imgs/planetTexture/TexturesForPlanets-GasGiantPack/Gaseous3.png'






function Sun() {
  
  return (
    <mesh scale={20} position={[0, 0, 0]}>
      <sphereBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='yellow' />
    </mesh>
  )
}

function Planet1() {

 const gas = useTexture( gasGiant)

  return (
    
    <mesh scale={5} position={[-5, 0, 100]}>
     <Html transform={true}>
     <a href='/about'>
      <h1 className="planetText">About Me</h1></a>
    </Html>
      <sphereBufferGeometry attach='geometry' />
      <meshStandardMaterial map={gas} />
      

    </mesh>
  )
}



function Planet2() {
  return (
    <mesh scale={3}  position={[5, 0, -100]}>
    <Billboard>
     <Html transform={true}>
     <a href="/projects">
      <h1 className="planetText">Projects</h1></a>
    </Html></Billboard>
      
      <sphereBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='green' />

     
    </mesh>
  )
}

function Planet3() {
  return (
    <mesh scale={5} position={[-50, 0, -50]}>
    <Billboard>
       <Html transform={true}>
      <h1 className="planetText">Skills</h1>
    </Html></Billboard>
      <sphereBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='purple' />

     
    </mesh>
  )
}

function Planet4() {
  return (
    
    <mesh scale={6} position={[90, 0, 50]}>
     <Html transform={true}>
     <a href='/about'>
      <h1 className="planetText">About Me</h1></a>
    </Html>
      <sphereBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='gray' />
    </mesh>
  )
}
const Landing = () => {
  return (
    <Canvas camera={{position: [-10 , 0 , 130]}} >
    <Suspense fallback={null}>
    <ambientLight intensity={0.2} />
    <spotLight intensity={8} position={[0,0,40]} />
    <spotLight intensity={8} position={[0,0,-40]} />
    <spotLight intensity={8} position={[40,0,0]} />
    <spotLight intensity={8} position={[-40,0,0]} />
    <spotLight intensity={8} position={[0,40,0]} />
    <spotLight intensity={8} position={[0,-40,0]} />
    <ContactShadows />
    <OrbitControls enableZoom={false} />
    <Planet4 />
    <Planet3 />
    <Planet2 />
    <Planet1 />
    <Sun />
    <Stars radius={100} count={10000}  />
</Suspense>
  </Canvas>
  )
};

export default Landing; 
