import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import testingAPI from "../../api";

function PostProject() {
  const nav = useNavigate();
  const [project, setProject] = useState();

  const createProject = async (e) => {
    e.preventDefault();
    await fetch(testingAPI + "api/projects", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        } else {
          nav("/admin");
        }
      });
  };

  return (
    <div className="flex flex-col bg-blue-400 h-screen">
   
    
      <form className="my-auto mx-auto py-5 bg-white sm:w-2/4  flex flex-col border-2 border-black shadow-xl shadow-black" onSubmit={createProject}>
      <div className="my-auto flex flex-col">
        <label className="text-center text-4xl" htmlFor="title">Title</label>
        <input
          className=" text-2xl border-4 border-black w-3/4 mx-auto"
          id="title"
          name="title"
          type="text"
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />

        <label className="text-center mt-5 text-4xl" htmlFor="blogpost">Description</label>
        <textarea
          className=" text-2xl border-4 border-black w-3/4 mx-auto"
          id="blogpost"
          name="blogpost"
          onChange={(e) => setProject({ ...project, desc: e.target.value })}
        ></textarea>

        <label className="text-center mt-5 text-4xl" htmlFor="tech">Tech. used</label>
        <textarea 
          className=" text-2xl border-4 border-black w-3/4 mx-auto"
          id="tech"
          name="tech"
          type="tech"
          onChange={(e) => setProject({ ...project, tech: e.target.value })}
        ></textarea>

        <label className="text-center mt-5 text-4xl" htmlFor="link1">Production Link</label>
        <input
          className=" text-2xl border-4 border-black w-3/4 mx-auto"
          id="link1"
          name="link1"
          type="link1"
          onChange={(e) => setProject({ ...project, link1: e.target.value })}
        />

        <label className="text-center mt-5 text-4xl" htmlFor="link2">Github Link</label>
        <input
          className=" text-2xl border-4 border-black w-3/4 mx-auto"
          id="link2"
          name="link2"
          type="link2"
          onChange={(e) => setProject({ ...project, link2: e.target.value })}
        />

        <button className="text-2xl border-2 border-black bg-blue-400 w-fit mx-auto mt-5 p-5 rounded" type="submit">Post Project</button>

        </div>
      </form>
   
   
    </div>
  );
}

export default PostProject;
