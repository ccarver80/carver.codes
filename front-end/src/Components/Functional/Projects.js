import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


import testingAPI from "../../api";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch(testingAPI + "api/projects")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
        });
    };

    fetchProjects();
  }, []);

  const nav = useNavigate();
  return (
    <div className="flex bg-blue-400 flex-col ">
      <div className="flex shadow-2xl shadow-black rounded-2xl mt-10 w-2/4 bg-white mx-auto sm:h-36 h-24 sm:text-5xl text-3xl">
        <h1 className=" text-black mx-auto my-auto">Projects</h1>
      </div>

      <div className="flex flex-col justify-between mx-5  p-5 shadow-black shadow-2xl rounded-2xl mt-10 bg-white ">
        <h3 className="text-3xl mx-auto">Click on a project to learn more!</h3>

        {projects.map((project) => (
          <a href={"/project/" + project.id}>
            <div className="text-xl p-5 w-fit border-2 border-blue-600 my-5 text-center mx-auto ">
              <h1 className="font-extrabold">{project.title}</h1>
            </div>{" "}
          </a>
        ))}
        <button
          className="bg-blue-400 shadow-lg mx-auto w-52 shadow-black mt-5 p-3 rounded-xl"
          onClick={() => {
            nav("/");
          }}
        >
          Go Back to Space!
        </button>
      </div>
    </div>
  );
};

export default Projects;
