import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  Billboard,
  Stars,
} from "@react-three/drei";

import { Planet } from "../Supportive/Planets";

import Loading from "../Supportive/Loading";
import blue from "../Imgs/planetTexture/blue.jpg";

function Skills() {
  const nav = useNavigate();
  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [40, 5, 0] }}>
        <ambientLight intensity={0.7} />
        <Stars />
        <Planet texture={blue} pos={[-50, -5, 0]} scale={50} spin={5} />
        <Billboard>
          <Html transform={true}>
            <div className="skills">
              <h1>Skills</h1>
              <ul>
                <h3>Front end:</h3>
                <ul>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                </ul>
                <h3>Back end:</h3>
                <ul>
                  <li>Express</li>
                  <li>Node</li>
                  <li>SQL</li>
                  <li>Sequalize ORM</li>
                </ul>
                <h3>Tools:</h3>
                <ul>
                  <li>VS Code</li>
                  <li>Atom.io</li>
                  <li>Git and Github</li>
                  <li>Linux</li>
                </ul>
              </ul>
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
            </div>
          </Html>
        </Billboard>
      </Canvas>
    </Suspense>
  );
}

export default Skills;
