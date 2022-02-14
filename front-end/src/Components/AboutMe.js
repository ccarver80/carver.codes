import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Billboard,
  Html,
  Sky,
  OrbitControls,
  useTexture,
  Cloud,
} from "@react-three/drei";

import gasGiant from "../Imgs/planetTexture/Gaseous1.png";
import Loading from "./Loading";

function Plane() {
  const gas = useTexture(gasGiant);
  return (
    <mesh position={[0, -5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial map={gas} />
    </mesh>
  );
}

const AboutMe = () => {
  return (
  <Suspense fallback={<Loading />}>

    <Canvas camera={{ position: [0, 20, -25] }}>
      
        <ambientLight intensity={0.5} />

        <OrbitControls enableZoom={false} />

        <mesh>
          <Billboard position={[0, 5, 0]}>
            <Html fullscreen transform={true}>
              <h1>Planet X6Gf4-R - About Me</h1>
              <h2>Class J Gas Giant</h2>
              <div className="about-me">
                <h1>Chris Carver</h1>
                <h2>Full Stack JavaScript Developer</h2>
                <p>
                  Self taught and HIGHLY motivated, full stack JavaScript
                  developer looking for a career change. Growing up in the oil
                  industry I have learned the value of hard work and
                  determination. I started learning in October 2020 with "Python
                  For Everybody" on Coursera. This is where I learned the
                  fundamentals of programming. After that I started learning
                  HTML and CSS and eventually found Team Treehouse where I
                  started the Full Stack JavaScript Tech Degree learning React,
                  Node, Express, API's and so much more. I Finished the Tech
                  Degree in February 2022. All 10 projects from the Tech Degree
                  can be found on my GitHub account.
                </p>
                <div className="icons">
                <h3>Connect with me!</h3>
                  <a href="https://www.linkedin.com/in/christopher-carver-5366871bb/" target='_blank' rel="noopener noreferrer nofollow" ><i className="fab fa-linkedin-in fa-2x"></i></a> 
                  <a href="https://github.com/ccarver80" target='_blank' rel="noopener noreferrer nofollow" ><i className="fab fa-github fa-2x"></i></a>
                  <a href="mailto:ckc_80@outlook.com"><i className="fa-solid fa-envelope fa-2x"></i></a>
                  <a href="https://twitter.com/codingCarver" target="_blank" rel="noopener noreferrer nofollow" ><i className="fa-brands fa-twitter fa-2x"></i></a>
                  <a href="https://www.instagram.com/codingcarver/" target="_blank" rel="noopener noreferrer nofollow" ><i className="fa-brands fa-instagram fa-2x"></i></a>
                  <a href="https://www.tiktok.com/@codingcarver" target="_blank" rel="noopener noreferrer nofollow" ><i class="fa-brands fa-tiktok fa-2x"></i></a>
                </div>
              </div>
            </Html>
          </Billboard>
        </mesh>
        {/* Mimic fog on a gas giant */}
        <Cloud
          opacity={1}
          position={[0, 10, 10]}
          width={10}
          depth={2}
          segments={100}
        />
        <Cloud
          opacity={1}
          position={[0, 10, -10]}
          width={10}
          depth={2}
          segments={100}
        />
        <Cloud
          opacity={1}
          position={[10, 10, 0]}
          width={10}
          depth={2}
          segments={100}
        />
        <Cloud
          opacity={1}
          position={[-10, 10, 0]}
          width={10}
          depth={2}
          segments={100}
        />
        <Sky sunPosition={[0, 1, 0]} />
        <Plane />
      
    </Canvas>
    </Suspense>
  );
};

export default AboutMe;
