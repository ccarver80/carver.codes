import React, { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { Stars, Html, OrbitControls, Billboard } from "@react-three/drei";

import Loading from "./Loading";

//Textures for planets
import gasy from "../Imgs/planetTexture/Gaseous1.png";
import earthy from "../Imgs/planetTexture/Savannah.png";
import moon from "../Imgs/planetTexture/Icy.png";
import martian from "../Imgs/planetTexture/Martian.png";
import sunny from "../Imgs/planetTexture/sun.png";
import habit from "../Imgs/planetTexture/Tropical.png";
import blue from "../Imgs/planetTexture/blue.jpg";
import venusmoon from "../Imgs/planetTexture/Venusian.png";
import volcanicmoon from "../Imgs/planetTexture/Volcanic.png";

import { Sun, Planet } from "./Planets";



const Home = () => {

  const nav = useNavigate();

  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [-5, 30, 200] }}>
        <Sun texture={sunny} scale={5} />
        <spotLight intensity={8} position={[0, 0, 40]} />
        <ambientLight intensity={0.8} />
        <OrbitControls />
        <Stars />
        <Planet planetOrbit={true} dist={50} speed={5} texture={gasy} pos={[-5, 0, 50]} scale={3} spin={6} />
        <Planet planetOrbit={true} dist={30} speed={2} texture={blue} pos={[5, 0, -30]} scale={2} spin={4} />
        <Planet planetOrbit={true} dist={20} speed={3} texture={martian} pos={[30, 0, 20]} scale={2} spin={3} />
        <Planet planetOrbit={true} dist={30} speed={4} texture={habit} pos={[-30, 0, -10]} scale={3} spin={2} />
        <Planet planetOrbit={true} dist={40} speed={2} texture={earthy} pos={[20, 0, -30]} scale={3} spin={3} />
        <Billboard position={[0, 13, 170]}>
          <Html transform={true}>
            <div className="center-div">
              <div className="home">
                <h1>Welcome to my corner of the universe!</h1>
                <h2>
                  I'm Chris Carver, and I built this site using React, Three.js
                  React-Three/Fiber, and Drei
                </h2>
                <button
                  className="enter-button"
                  onClick={() => {
                    nav("/landing");
                  }}
                >
                  Fly to my solar system!
                </button>
              </div>
            </div>
          </Html>
        </Billboard>
      </Canvas>
    </Suspense>
  );
};

export default Home;
