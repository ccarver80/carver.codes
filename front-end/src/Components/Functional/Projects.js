import React, { Suspense } from "react";
import {useNavigate} from 'react-router-dom'
import { Canvas, } from "@react-three/fiber";
import {
  Billboard,
  Html,
  OrbitControls,
  useTexture,
} from "@react-three/drei";

import Loading from "../Supportive/Loading";
import TimeofDay from "../Supportive/TImeofDay";

import mars from "../Imgs/planetTexture/Martian.png";


function Plane() {
  const Mars = useTexture(mars);
  return (
    <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial map={Mars} />
    </mesh>
  );
}


// =====CREATE A FETCH REQUEST TO SERVER TO GET TITLES OF ALL PROJECTS ====//



const Projects = () => {
  const nav = useNavigate()
  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [40, 0, 0] }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />

        
         {/* ====== Replace with componet that returns titles from fetch request */}
        <Billboard position={[0, 0, 0]}>
  <Html transform={true}>
    <div className="projects">
     <h1>This part is still under construction please check back later</h1>
      {/* Button back to space */}
       <div><button onClick={()=> {
                  nav('/landing')
                }} className="enter-button">Back to space!</button></div>
    </div>
   
  </Html>
</Billboard>
      
        <Plane />
        <TimeofDay />
      </Canvas>
    </Suspense>
  );
};

export default Projects;
