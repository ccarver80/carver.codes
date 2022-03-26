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

    <div className="flex  bg-blue-400 h-screen">
    <div className=" flex rounded-xl shadow-2xl shadow-black flex-col mx-auto my-auto h-96 p-10 bg-lime-200 ">
      <h1 className="mx-auto my-auto text-4xl">Comming Soon!!!!</h1>
      <button onClick={()=> {
                                   nav('/')
                              }} className="bg-red-400 w-fit mx-auto p-5 rounded mt-5">Go to space!</button>
      </div>
      </div>
    
      
            // <div className="blog">
            //   {
            //      blogPosts.map((post) => (
            //        <div className="blogList">
            //         <a href={"/blog/" + post.id}>
            //           <h1>{post.title}</h1>
            //           <h2>{post.createdAt}</h2>
            //           </a>
            //         </div>
            //       ))
            //     }
            //   <div>
            //     <button
            //       onClick={() => {
            //         nav("/");
            //       }}
            //       className="enter-button"
            //     >
            //       Back to space!
            //     </button>
            //   </div>
            // </div>
        
  
  );
};

export default Blog;
