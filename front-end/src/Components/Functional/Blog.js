import React, { Suspense, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Billboard, Html, OrbitControls, useTexture } from "@react-three/drei";

import Loading from "../Supportive/Loading";
import TimeofDay from "../Supportive/TImeofDay";

import tropical from "../Imgs/planetTexture/Tropical.png";

import testingAPI from "../../api";
import prodAPI  from "../../api"

function Plane() {
  const Tropical = useTexture(tropical);
  return (
    <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial map={Tropical} />
    </mesh>
  );
}

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
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [20, 0, 0] }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />

        {/* ====== Replace with componet that returns titles from fetch request */}
        <Billboard position={[0, 0, 0]}>
          <Html transform={true}>
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
          </Html>
        </Billboard>

        <Plane />
        <TimeofDay />
      </Canvas>
    </Suspense>
  );
};

export default Blog;
