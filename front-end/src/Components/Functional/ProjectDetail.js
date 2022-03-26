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
    <div className="flex bg-blue-400 pb-5 flex-col sm:h-screen ">
      <div className="flex shadow-2xl shadow-black rounded-2xl mt-10 w-2/4 bg-lime-100 border-2 border-red-600 mx-auto sm:h-36 h-24 sm:text-5xl text-3xl">
        <h1 className=" text-black mx-auto my-auto">Projects</h1>
      </div>

      <div className="flex mx-5 p-5 shadow-black shadow-2xl rounded-2xl mt-10 bg-lime-100 border-2 border-red-600">
        <div className="flex flex-col text-center text-3xl mx-auto">
          <h1 className="font-bold">{project.title}</h1>
          <div className="flex flex-col">
            <div className="text-center my-10">
              <h3 className="font-bold">Description:</h3>
              <p>{project.desc}</p>
            </div>

            <div className="my-10">
              <h3 className="font-bold">Tech used:</h3>
              <ReactMarkdown>{project.tech}</ReactMarkdown>
            </div>
            
            <h3 className="font-bold">Links:</h3>
            <div className="flex mx-auto w-96 justify-between">
            <a className="text-blue-600 " href={"https://" + project.link1}>Live Demo</a>
            <a className="text-blue-600" href={"https://" + project.link2}>Github Repo</a></div>
          </div>
          <button onClick={()=> {
                                   nav('/projects')
                              }} className="bg-blue-400 w-fit mt-5 mx-auto p-5 rounded-xl ">Go back</button>
          <button
            className="bg-red-400 w-fit mx-auto shadow-lg shadow-black mt-5 p-3 rounded-xl"
            onClick={() => {
              nav("/");
            }}
          >
            Go Back to Space!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
