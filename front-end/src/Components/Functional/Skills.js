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
    <div className="bg-black w-screen h-screen">
      <Canvas camera={{ position: [40, 5, 0] }}>
        <ambientLight intensity={0.7} />
        <Stars />
        <Planet texture={blue} pos={[-50, -5, 0]} scale={50} spin={5} />
        <Billboard>
          <Html transform={true}>
            <div className="flex rounded-xl shadow-2xl shadow-white p-24 flex-col text-center bg-white text-7xl">
              <h1 className=" text-9xl font-extrabold mb-10 ">Skills</h1>
              <ul >
                <h3 className="text-8xl mb-5 font-extrabold">Front end:</h3>
                <ul className=" shadow-md shadow-black border-2 border-black">
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                </ul>
                <h3 className="text-8xl mt-10 font-extrabold">Back end:</h3>
                <ul className="shadow-md shadow-black border-2 border-black">
                  <li>Express</li>
                  <li>Node</li>
                  <li>SQL</li>
                  <li>Sequalize ORM</li>
                </ul>
                <h3 className="text-8xl mt-10 font-extrabold">Tools:</h3>
                <ul className="shadow-md shadow-black border-2 border-black">
                  <li>VS Code</li>
                  <li>Atom.io</li>
                  <li>Git and Github</li>
                  <li>Linux</li>
                </ul>
              </ul>
              <div>
                <button
                  onClick={() => {
                    nav("/");
                  }}
                  className="bg-red-400 p-5 rounded mt-10 shadow-lg shadow-black border-4 border-black"
                >
                  Back to space!
                </button>
              </div>
            </div>
          </Html>
        </Billboard>
      </Canvas></div>
    </Suspense>
  );
}

export default Skills;
