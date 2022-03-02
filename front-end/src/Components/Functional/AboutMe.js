import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import {
  Billboard,
  Html,
  Sky,
  useTexture,
  Cloud,
  ScrollControls,
  Scroll,
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

  return (
  
      <Suspense fallback={<Loading />}>
        <Canvas camera={{ position: [0, 10, -25] }}>
          <ambientLight intensity={0.5} />

          <Billboard position={[0, 0, 5]}>
            <ScrollControls pages={2}>
              <Scroll>
                <Html fullscreen transform={true}>
                  <div className="about-me">
                    <p>Planet X6Gf4-R - About Me</p>
                    <p>Class J Gas Giant</p>
                    <h1>Chris Carver</h1>
                    <h2>Full Stack JavaScript Developer</h2>
                    <p>
                      Self taught and HIGHLY motivated, full stack JavaScript
                      developer looking for a career change. Growing up in the
                      oil industry I have understand the value of hard work and
                      determination. I began my journey in October 2020 with
                      "Python For Everybody" on Coursera. This is where I
                      was introduced to the fundamentals of programming. After that I
                      expanded my knowlege HTML and CSS and eventually found Team
                      Treehouse where I began my quest to complete the Full Stack JavaScript Tech
                      Degree which includeds React, Node, Express, API's and so much
                      more. I Finished the Tech Degree in February 2022. All 10
                      projects from the Tech Degree can be found on my GitHub
                      account <a href="https://github.com/ccarver80/Tech-Degree-Projects">here.</a>
                    </p>

                    <div className="icons">
                      <h3>Connect with me!</h3>
                      <a
                        href="https://www.linkedin.com/in/christopher-carver-5366871bb/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <i class="fa-brands fa-linkedin fa-2xl"></i>
                      </a>
                      <a
                        href="https://github.com/ccarver80"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <i class="fa-brands fa-github fa-2xl"></i>
                      </a>
                      <a href="mailto:ckc_80@outlook.com">
                        <i class="fa-solid fa-envelope fa-2xl"></i>
                      </a>
                      <a
                        href="https://twitter.com/codingCarver"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <i class="fa-brands fa-twitter fa-2xl"></i>
                      </a>
                      <a
                        href="https://www.instagram.com/codingcarver/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <i class="fa-brands fa-instagram fa-2xl"></i>
                      </a>
                      <a
                        href="https://www.tiktok.com/@codingcarver"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                      >
                        <i class="fa-brands fa-tiktok fa-2xl"></i>
                      </a>
                    </div>

                    <button
                      onClick={() => {
                        nav("/landing");
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

          {/* Mimic fog on a gas giant */}
          <Cloud
            opacity={0.3}
            position={[0, 10, 10]}
            width={10}
            depth={2}
            segments={100}
          />
          <Cloud
            opacity={0.3}
            position={[0, 10, -10]}
            width={10}
            depth={2}
            segments={100}
          />
          <Cloud
            opacity={0.3}
            position={[10, 10, 0]}
            width={10}
            depth={2}
            segments={100}
          />
          <Cloud
            opacity={0.3}
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
