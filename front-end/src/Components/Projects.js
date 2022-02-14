import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Billboard,
  Html,
  OrbitControls,
  Sky,
  Stars,
  useTexture,
} from "@react-three/drei";

import Loading from "./Loading";

import mars from "../Imgs/planetTexture/Martian.png";
import courses from '../Imgs/courses.png'



function Plane() {
  const Mars = useTexture(mars);
  return (
    <mesh position={[0, -20, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshLambertMaterial map={Mars} />
    </mesh>
  );
}





function TimeofDay() {
  const time = new Date();
  //Dawn sunrise:
  if (time.getHours() >= 5 && time.getHours() <= 10) {
    return <Sky sunPosition={[1, 0, 0]} />;
  }
  //Mid day sun:
  else if (time.getHours() >= 11 && time.getHours() <= 17) {
    return <Sky sunPosition={[0, 1, 0]} />;
  }
  //Dusk sunset:
  else if (time.getHours() >= 18 && time.getHours() <= 20) {
    return <Sky sunPosition={[0, 0, 1]} />;
  }
  //Night time sky:
  else {
    return <Stars />;
  }
}

const Projects = () => {

  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [0, 0, 150] }}>
        <ambientLight intensity={0.5} />
        <OrbitControls />
        <Billboard position={[0, -20, -20]}>
          <Html transform={true}>
            <div className="move-around">
              <h1>
              Move around and click on planets using your finger or mouse!
              </h1>
            </div>
          </Html>
        </Billboard>
        <Billboard position={[30, 0, 100]}>
          <Html transform={true}>
            <div className="projects">
              <h1>Fullstack React REST API</h1>
              <p>
                This is a fullstack REST API with a React front end. This web
                app will allow users to view a list of courses and the detail
                for a specific course, sign up to create an account or sign in
                with an existing account, and create, update, or delete courses.
              </p>
              <img src={courses}/>
              <p>
                Technolgies use:
                <ul>
                  <li>React</li>
                  <li>Express</li>
                  <li>Sequalize</li>
                </ul>
              </p>
              <a
                href="https://github.com/ccarver80/React-REST-FS-API"
                target={"_blank"}
                rel='"noopener noreferrer nofollow"'
              >
                <h2>Source Code</h2>
              </a>
            </div>
          </Html>
        </Billboard>
        <Billboard position={[20, 0, 0]}>
          <Html transform={true}>
            <div className="projects">
              <h1>SQL Library Manager</h1>
              <p>
                Web application for listing, adding, updating, and deleting
                books in a library application, using JavaScript, Node.js,
                Express, Pug, and the SQL ORM Sequelize.
              </p>
              <p>
                Technolgies use:
                <ul>
                  <li>Express</li>
                  <li>Node</li>
                  <li>Sequalize</li>
                </ul>
              </p>
            </div>
          </Html>
        </Billboard>
        <Billboard position={[-20, 0, 0]}>
          <Html transform={true}>
            <div className="projects">
              <h1>Fullstack React REST API</h1>
              <p>
                This is a fullstack REST API with a React front end. This web
                app will allow users to view a list of courses and the detail
                for a specific course, sign up to create an account or sign in
                with an existing account, and create, update, or delete courses.
              </p>
            </div>
          </Html>
        </Billboard>
        {/* <Billboard position={[0, 0, 30]}>
          <Html transform={true}>
            <div className="projects">
              <h1>Fullstack React REST API</h1>
              <p>
                This is a fullstack REST API with a React front end. This web
                app will allow users to view a list of courses and the detail
                for a specific course, sign up to create an account or sign in
                with an existing account, and create, update, or delete courses.
              </p>
            </div>
          </Html>
        </Billboard> */}
        <Plane />
        <TimeofDay />
      </Canvas>
    </Suspense>
  );
};

export default Projects;
