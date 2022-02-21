import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import testingAPI from "../../api";

const Delete = async (endpoint, id) => {
  await fetch(testingAPI + "api/" + endpoint + `/${id}`, {
    method: "DELETE",
  });
};

function Admin() {
  const [projects, setProjects] = useState([]);
  const [blogPosts, setBlogPosts] = useState([]);
  const [mail, setMail] =useState([])

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch(testingAPI + "api/projects")
        .then((res) => res.json())
        .then((data) => setProjects(data));
    };

    const fetchBlog = async () => {
      await fetch(testingAPI + "api/blog")
        .then((res) => res.json())
        .then((data) => setBlogPosts(data));
    };

    const fetchMail = async() => {
      await fetch(testingAPI + "api/mail")
      .then((res)=> res.json())
      .then((data) => setMail(data))
    };

    fetchProjects();
    fetchBlog();
    fetchMail()
  }, []);

  return (
    <div className="admin">
      <h1>Admin page</h1>
      <div className="admin-buttons">
        <a href="/admin/post-project">
          <button className="addProject">Add Project</button>
        </a>

        <a href="/admin/post-blog">
          <button className="addProject">Add Blog Post</button>
        </a>
      </div>

      <div className="col">
        <h1>Projects:</h1>
        {projects.map((project) => (
          <div className="List">
            <a href={"/project/" + project.id}>
              <h1>{project.title}</h1>
            </a>
            <button
              className="delete"
              onClick={() => {
                Delete("projects", project.id)
                
                }
                }
            >
              Delete?
            </button>
            <button className="edit">Edit?</button>
          </div>
        ))}
      </div>

      <div className="col">
        <h1>Blog:</h1>
        {blogPosts.map((post) => (
          <div className="List">
            <a href={"/blog/" + post.id}>
              <h1>{post.title}</h1>
            </a>
            <button className="delete" onClick={() => Delete("blog", post.id)}>
              Delete?
            </button>
            <button className="edit">Edit?</button>
          </div>
        ))}
      </div>
      <div className="col">
        <h1>Mail:</h1>
        {mail.map((mail) => (
          <div className="List">
            <a href={"/admin/mail/" + mail.id}>
              <h1>From: {mail.name}</h1>
            </a>
            <button
              className="delete"
              onClick={() => Delete("mail", mail.id)}
            >
              Delete?
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Admin;
