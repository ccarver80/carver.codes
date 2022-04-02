import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import testingAPI from "../../api";


function PostBlog() {

  const nav = useNavigate()
  const [blog, setBlog] = useState();

  const createblog = async (e) => {
    e.preventDefault();
    await fetch(testingAPI + "api/blog", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(blog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message)
        }else {
          nav('/admin')
        }
      });
  };

  return (
    <div className="flex flex-col bg-blue-400 h-screen">
      <form className="my-auto mx-auto py-5 bg-white sm:w-2/4 sm:h-2/4 flex flex-col border-2 border-black shadow-xl shadow-black" onSubmit={createblog}>

      <div className="my-auto flex flex-col">
            <label className="text-center text-4xl" htmlFor="title">Title</label>
            <input
             className=" text-2xl border-4 border-black w-3/4 mx-auto"
              id="title"
              name="title"
              type="text"
              onChange={(e) => setBlog({ ...blog, title: e.target.value })} 
            />

            <p></p>

            <label className="text-center mt-10 text-4xl" htmlFor="blogpost">Blog Post</label>
            <textarea
             className=" text-2xl border-4 h-56 border-black w-5/6  mx-auto"
              id="blogpost"
              name="blogpost"
              onChange={(e) => setBlog({ ...blog, post: e.target.value })}
            ></textarea>
        
       
        <button className="text-2xl border-2 border-black bg-blue-400 w-fit mx-auto mt-5 p-5 rounded" type="submit">
          Post Blog
        </button>
        </div>
      </form>
    </div>
  );
}

export default PostBlog;
