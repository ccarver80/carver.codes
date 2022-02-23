import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
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
import Loading from "../Supportive/Loading";

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
  
  const nav = useNavigate();
  
  return (<>
  <div className="desktop">
  <Suspense fallback={<Loading />}>

    <Canvas camera={{ position: [0, 10, -25] }}>
      
        <ambientLight intensity={0.5} />

        <OrbitControls enableZoom={false} />

        
          <Billboard position={[0, 0, 5]}>
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
                <div><button onClick={()=> {
                  nav('/landing')
                }} className="enter-button">Back to space!</button></div>
              </div>


            </Html>
          </Billboard>
        
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
    </Suspense></div>

    <div className="mobile">
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
                <div><button onClick={()=> {
                  nav('/landing')
                }} className="enter-button">Back to space!</button></div>
              </div>
    </div>
    </>
  );
};

export default AboutMe;
