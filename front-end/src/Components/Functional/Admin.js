import React, { useState, useEffect } from "react";


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
  }, [projects, blogPosts, mail]);

  return (
    <div className='flex flex-col p-5 w-11/12 mx-auto '>
      
      <div className="bg-white w-fit mx-auto text-center ">
      <h1 className="text-2xl">Admin page</h1>
        <a href="/admin/post-project">
          <button className="bg-blue-400 m-5 p-5 text-2xl">Add Project</button>
        </a>

        <a href="/admin/post-blog">
          <button className="bg-blue-400 m-5 p-5 text-2xl">Add Blog Post</button>
        </a>
      </div>



    <div className="flex sm:flex-row mt-10 flex-col justify-between">
      <div className="flex flex-col text-2xl">
        <h1 className="text-center text-4xl font-extrabold">Projects:</h1>
        {projects.map((project) => (
          <div className="mt-10 rounded shadow-xl shadow-black border-2 border-black  bg-blue-400 text-center">
            <a href={"/project/" + project.id}>
              <h1>{project.title}</h1>
            </a>
            <button
              className="bg-red-500 p-2 m-2"
              onClick={() => {
                Delete("projects", project.id)
                
                }
                }
            >
              Delete?
            </button>
            <button className="bg-green-600 p-2 m-2">Edit?</button>
          </div>
        ))}
      </div>





      <div className="flex flex-col text-2xl">
        <h1 className="text-center text-4xl font-extrabold sm:mt-0 mt-10">Blog:</h1>
        {blogPosts.map((post) => (
          <div className="mt-10 rounded shadow-xl shadow-black border-2 border-black  bg-blue-400 text-center">
            <a href={"/blog/" + post.id}>
              <h1>{post.title}</h1>
            </a>
            <button className="bg-red-500 p-2 m-2" onClick={() => Delete("blog", post.id)}>
              Delete?
            </button>
            <button className="bg-green-600 p-2 m-2">Edit?</button>
          </div>
        ))}
      </div>




      <div className="flex flex-col text-2xl">
        <h1 className="text-center sm:mt-0 mt-10 text-4xl font-extrabold">Mail:</h1>
        {mail.map((mail) => (
          <div className="mt-10 rounded shadow-xl shadow-black border-2 border-black  bg-blue-400 text-center">
            <a href={"/admin/mail/" + mail.id}>
              <h1>From: {mail.name}</h1>
            </a>
            <button
              className="bg-red-500 p-2 m-2"
              onClick={() => Delete("mail", mail.id)}
            >
              Delete?
            </button>
          </div>
        ))}
      </div>

</div>


    </div>
  );
}

export default Admin;
