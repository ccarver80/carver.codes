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
    <div className="post-blog">
      <form onSubmit={createblog}>

          
            <label htmlFor="title">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              onChange={(e) => setBlog({ ...blog, title: e.target.value })} 
            />

            <p></p>

            <label htmlFor="blogpost">Blog Post</label>
            <textarea
              id="blogpost"
              name="blogpost"
              onChange={(e) => setBlog({ ...blog, post: e.target.value })}
            ></textarea>
        
       
        <button type="submit">
          Post Blog
        </button>
      </form>
    </div>
  );
}

export default PostBlog;
