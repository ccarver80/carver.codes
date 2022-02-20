import React, { Suspense, useState, useEffect,} from "react";
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

import testingAPI from "../../api";


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

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch(testingAPI + "api/projects")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    };

    fetchProjects();
  }, []);


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
    {
                 projects.map((project) => (
                   <div className="blogList">
                    <a href={"/project/" + project.id}>
                      <h1>{project.title}</h1>
                      </a>
                      <h2>Posted: {project.createdAt}</h2>
                    </div>
                  ))
                }
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
