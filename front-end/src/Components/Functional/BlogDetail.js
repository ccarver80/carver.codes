import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Billboard,
  useTexture,
  Html,
  Scroll,
  ScrollControls,
} from "@react-three/drei";

import Loading from "../Supportive/Loading";


import tropical from "../Imgs/planetTexture/Tropical.png";
import { useNavigate, useParams } from "react-router-dom";
import testingAPI from "../../api";

function Plane() {
  const Tropical = useTexture(tropical);
  return (
    <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial map={Tropical} />
    </mesh>
  );
}

const BlogDetail = () => {
  const nav = useNavigate();

  const params = useParams();
  const [blogPost, setBlogPost] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      await fetch(testingAPI + "api/blog/" + params.id)
        .then((res) => res.json())
        .then((data) => {
          if (data.message) {
            nav("/*"); // NAVIGATE TO SORRY NOT FOUND PAGE
          } else {
            setBlogPost(data);
          }
        });
    };
    fetchBlog();
    console.log(blogPost);
  }, []);

  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [40, 0, 0] }}>
        <ambientLight intensity={0.5} />
        <Billboard position={[20, 0, 0]}>
          <ScrollControls pages={2}>
            <Scroll>
              <Html fullscreen transform={true}>
                <div className="blogPost">
                  <h1>{blogPost.title}</h1>
                  <h2>Posted: {blogPost.createdAt}</h2>
                  <p>{blogPost.post}</p>

                  <button
                    onClick={() => {
                      nav("/blog");
                    }}
                    className="enter-button"
                  >
                    Back to Blog list
                  </button>
                  <button
                    onClick={() => {
                      nav("/");
                    }}
                    className="enter-button"
                  >
                    Back to space!
                  </button>
                </div>
              </Html>
            </Scroll>
          </ScrollControls>
        </Billboard>

        <Plane />
     
      </Canvas>
    </Suspense>
  );
};

export default BlogDetail;
