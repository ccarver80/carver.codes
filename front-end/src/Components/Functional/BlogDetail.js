import React, { Suspense, useEffect, useState, } from "react";
import { Canvas, } from "@react-three/fiber";
import {
 
  Billboard,
  OrbitControls,
  useTexture,
  Html,
} from "@react-three/drei";

import Loading from "../Supportive/Loading";
import TimeofDay from "../Supportive/TImeofDay";

import tropical from "../Imgs/planetTexture/Tropical.png";
import { useNavigate, useParams } from "react-router-dom";


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
    const nav = useNavigate()

    const params = useParams()
    const [blogPost, setBlogPost] = useState({})

  useEffect(() => {
    const fetchBlog = async() => {
      await fetch('http://localhost:5000/api/blog/' + params.id)
      .then((res) => res.json())
      .then((data) => setBlogPost(data))
    }
    fetchBlog()
    console.log(blogPost)
  }, [])

  
    return (
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [40, 0, 0] }}>
          <ambientLight intensity={0.5} />
          <OrbitControls />
          <Billboard position={[20, 0, 0]}>
          <Html transform={true}>
          <div className="blogPost">
            <h1>{blogPost.title}</h1>
            <p>{blogPost.post}</p>
            
            <button
                  onClick={() => {
                    nav("/blog");
                  }}
                  className="enter-button"
                >
                  Back to Blog list
                </button>
            <button
                  onClick={() => {
                    nav("/landing");
                  }}
                  className="enter-button"
                >
                  Back to space!
                </button></div>
          </Html>
         </Billboard>
        
          <Plane />
          <TimeofDay />
        </Canvas>
      </Suspense>
    );
  };
  
  export default BlogDetail; 