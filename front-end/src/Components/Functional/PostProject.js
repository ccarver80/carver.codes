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
    <div className="post-blog">
   
    
      <form onSubmit={createProject}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />

        <label htmlFor="blogpost">Description</label>
        <textarea
          id="blogpost"
          name="blogpost"
          onChange={(e) => setProject({ ...project, desc: e.target.value })}
        ></textarea>

        <label htmlFor="tech">Tech. used</label>
        <textarea className="tech"
          id="tech"
          name="tech"
          type="tech"
          onChange={(e) => setProject({ ...project, tech: e.target.value })}
        ></textarea>

        <label htmlFor="link1">Production Link</label>
        <input
          id="link1"
          name="link1"
          type="link1"
          onChange={(e) => setProject({ ...project, link1: e.target.value })}
        />

        <label htmlFor="link2">Github Link</label>
        <input
          id="link2"
          name="link2"
          type="link2"
          onChange={(e) => setProject({ ...project, link2: e.target.value })}
        />

        <button type="submit">Post Project</button>
      </form>
   
   
    </div>
  );
}

export default PostProject;
