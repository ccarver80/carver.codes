import React, { Suspense, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Billboard,
  Html, 
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
  const [pages, setPages] = useState();
  const pageNumbers = [];

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch(testingAPI + "api/projects")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
          setPages(data.length / 3);
        });
    };

    fetchProjects();
    
  }, []);


  for (let i = 1; i <= Math.ceil(pages); i++) {
    pageNumbers.push(i);
  }

  
  function pageClick(range) {
    console.log(range)
  }

  const nav = useNavigate();
  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [30, 0, 0] }}>
        <ambientLight intensity={0.5} />

        <Billboard position={[0, 0, 0]}>
          <Html transform={true}>
            <div className="projects">
              <h3>Click on a project to learn more!</h3>
              {projects.map((project) => (
                <div className="blogList">
                  <a href={"/project/" + project.id}>
                    <h1>{project.title}</h1>
                  </a>
                  <p>{project.desc}</p>
                </div>
              ))}
              <h3>Page:</h3>
              {pageNumbers.map((page) => (
                <button  className="pageNumber">{page}</button>
              ))}
              {/* Button back to space */}
              <div>
                <button
                  onClick={() => {
                    nav("/");
                  }}
                  className="enter-button"
                >
                  Back to space!
                </button>
              </div>
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
