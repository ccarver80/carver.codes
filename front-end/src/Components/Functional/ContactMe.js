import React, { Suspense } from "react";
import {useNavigate} from 'react-router-dom'
import { Canvas } from "@react-three/fiber";
import { useTexture, Html, OrbitControls, Billboard } from "@react-three/drei";

import savannah from '../Imgs/planetTexture/Savannah.png'


import TimeofDay from "../Supportive/TImeofDay";
import Loading from "../Supportive/Loading";


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
  const nav = useNavigate();
    return(
        <Suspense fallback={<Loading />} >
        <Canvas camera={{position: [40, 5, 0]}}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <TimeofDay />
            <Plane />
            <Billboard>
            <Html transform={true}>
                <div className="projects">
                    <h1>This part is still under construction, please check back later</h1>
                    <div><button onClick={()=> {
                  nav('/landing')
                }} className="enter-button">Back to space!</button></div>
                </div>
            </Html>
            </Billboard>
        </Canvas>
        </Suspense>
    )
}

export default ContactMe; 