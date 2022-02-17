import React, { Suspense, } from "react";
import { Canvas, } from "@react-three/fiber";
import {
 
  OrbitControls,
  useTexture,
} from "@react-three/drei";

import Loading from "../Supportive/Loading";
import TimeofDay from "../Supportive/TImeofDay";

import tropical from "../Imgs/planetTexture/Tropical.png";


function Plane() {
  const Tropical = useTexture(tropical);
  return (
    <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial map={Tropical} />
    </mesh>
  );
}



  
  const BlogDetail = () => {
    return (
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [40, 0, 0] }}>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          
         
        
          <Plane />
          <TimeofDay />
        </Canvas>
      </Suspense>
    );
  };
  
  export default BlogDetail; 