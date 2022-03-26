import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";



import testingAPI from "../../api";
import prodAPI  from "../../api"

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      await fetch(testingAPI + "api/blog")
        .then((res) => res.json())
        .then((data) => setBlogPosts(data));
    };

    fetchBlog();
  }, []);

  const nav = useNavigate();
  return (
    
      
            <div className="blog">
              {
                 blogPosts.map((post) => (
                   <div className="blogList">
                    <a href={"/blog/" + post.id}>
                      <h1>{post.title}</h1>
                      <h2>{post.createdAt}</h2>
                      </a>
                    </div>
                  ))
                }
              <div>
                <button
                  onClick={() => {
                    nav("/");
                  }}
                  className="enter-button"
                >
                  Back to space!
                </button>
              </div>
            </div>
        
  
  );
};

export default Blog;
