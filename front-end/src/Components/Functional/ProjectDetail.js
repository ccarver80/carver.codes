import React, { Suspense, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Billboard,
  Html,
  ScrollControls,
  Scroll,
  useTexture,
} from "@react-three/drei";

import ReactMarkdown from "react-markdown";

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

const ProjectDetail = () => {
  const params = useParams();
  const [project, setProject] = useState({});

  useEffect(() => {
    const fetchProject = async () => {
      await fetch(testingAPI + "api/projects/" + params.id)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            nav("/*"); // NAVIGATE TO SORRY NOT FOUND PAGE
          } else {
            setProject(data);
          }
        });
    };
    fetchProject();
  }, []);

  const nav = useNavigate();
  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [25, 0, 0] }}>
        <ambientLight intensity={0.5} />
        <Billboard>
          <ScrollControls pages={2}>
            {" "}
            <Scroll>
              <Html fullscreen transform={true}>
                <div className="projectPost">
                  <h1>{project.title}</h1>
                  <h3>Description:</h3>
                  <p>{project.desc}</p>
                  <h3>Tech used:</h3>
                  <ReactMarkdown>{project.tech}</ReactMarkdown>
                  <h3>Links:</h3>
                  <a href={"https://" + project.link1}>Live Demo</a>
                  <a href={"https://" + project.link2}>Github Repo</a>
                </div>
                {/* Nav buttons */}
                <div>
                  <button
                    onClick={() => {
                      nav("/landing");
                    }}
                    className="enter-button"
                  >
                    Back to space!
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      nav("/projects");
                    }}
                    className="enter-button"
                  >
                    Back to project list!
                  </button>
                </div>
              </Html>
            </Scroll>
          </ScrollControls>
        </Billboard>
        <Plane />
        <TimeofDay />
      </Canvas>
    </Suspense>
  );
};

export default ProjectDetail;
