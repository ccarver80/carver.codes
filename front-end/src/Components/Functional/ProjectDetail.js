import React, {  useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


import ReactMarkdown from "react-markdown";





import testingAPI from "../../api";



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
      <div className="flex shadow-2xl shadow-black rounded-2xl mt-10 w-2/4 bg-white border-2 border-red-600 mx-auto sm:h-36 h-24 sm:text-5xl text-3xl">
        <h1 className=" text-black mx-auto my-auto">Projects</h1>
      </div>

      <div className="flex  shadow-black shadow-2xl rounded-2xl mt-10 py-5 bg-white border-2 border-red-600">
        <div className="flex flex-col text-4xl text-center mx-auto">
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
            <div className="flex mx-auto sm:w-1/4 w-2/4 justify-between">
            <a className="text-blue-600 " href={"https://" + project.link1}>Live Demo</a>
            <a className="text-blue-600" href={"https://" + project.link2}>Github Repo</a></div>
          </div>
          <button onClick={()=> {
                                   nav('/projects')
                              }} className="bg-blue-400 w-fit mt-5 mx-auto p-5 rounded-xl ">Go back to projects</button>
          <button
            className="bg-red-400 w-fit mx-auto shadow-lg shadow-black mt-5 p-3 rounded-xl"
            onClick={() => {
              nav("/");
            }}
          >
            Go back to space!
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
