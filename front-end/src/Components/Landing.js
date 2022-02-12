import React, { Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Html,
  ContactShadows,
  Billboard,
  useTexture,
} from "@react-three/drei";
import Loading from "./Loading";

//Textures for planets
import gasy from "../Imgs/planetTexture/Gaseous1.png";
import earthy from "../Imgs/planetTexture/Savannah.png";
import moon from "../Imgs/planetTexture/Icy.png";
import martian from "../Imgs/planetTexture/Martian.png";
import sunny from "../Imgs/planetTexture/sun.png";
import habit from "../Imgs/planetTexture/Tropical.png";
import blue from "../Imgs/planetTexture/blue.jpg";
import venusmoon from '../Imgs/planetTexture/Venusian.png'
import volcanicmoon from '../Imgs/planetTexture/Volcanic.png'

function Sun() {
  const Sun = useTexture(sunny);
  return (
    <mesh scale={20} position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial map={Sun} />
    </mesh>
  );
}


function Moon(props) {
  useFrame(({ clock }) => {
    const getElapsedTime = clock.getElapsedTime();
    
      let x =  props.pos[0]
      let y = props.pos[1]
      let z = props.pos[2]

      x += Math.sin(getElapsedTime / props.speed) * props.dist
      z += Math.cos(getElapsedTime / props.speed) * props.dist
      myMesh.current.position.set(x, y, z)
  
    
    myMesh.current.rotation.y = getElapsedTime / props.spin;
  });

  const myMesh = React.useRef();
  const Texture = useTexture(props.texture);
  return (
    <mesh ref={myMesh} scale={props.scale} position={props.pos}>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial map={Texture} />
    </mesh>
  );
}

function Planet(props) {
  useFrame(({ clock }) => {
    const getElapsedTime = clock.getElapsedTime();
   
    myMesh.current.rotation.y = getElapsedTime / props.spin;


  });
  const myMesh = React.useRef();
  const Texture = useTexture(props.texture);
  return (
    <>
      <Billboard scale={10} position={props.pos}>
        <Html transform={true}>
          <a href={props.location}>
            <h1 className={props.planetText}>{props.text}</h1>
          </a>
        </Html>
      </Billboard>
      <mesh ref={myMesh} scale={props.scale} position={props.pos}>
        <sphereBufferGeometry attach="geometry" />
        <meshStandardMaterial map={Texture} />
      </mesh>
    </>
  );
}

const Landing = () => {
  return (

    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [-30, 10, 140] }}>
        <ambientLight intensity={0.8} />

        {/* Adds spotlights all around sun making it super bright looking */}
        <spotLight intensity={8} position={[0, 0, 40]} />
        <spotLight intensity={8} position={[0, 0, -40]} />
        <spotLight intensity={8} position={[40, 0, 0]} />
        <spotLight intensity={8} position={[-40, 0, 0]} />
        <spotLight intensity={8} position={[0, 40, 0]} />
        <spotLight intensity={8} position={[0, -40, 0]} />
        <ContactShadows />
        <OrbitControls enableZoom={false} />
        <Planet
          texture={gasy}
          planetText="planetText"
          location="/about"
          pos={[-5, 0, 100]}
          scale={10}
          text="About Me"
          spin={6}
        />
        <Planet
          texture={blue}
          planetText="planetText"
          location="/skills"
          pos={[5, 0, -75]}
          scale={5}
          text="Skills"
          spin={4}
        />
        <Planet
          texture={martian}
          planetText="planetText"
          location="/projects"
          pos={[90, 0, 50]}
          scale={6}
          text="Projects"
          spin={3}
        />
        <Planet
          texture={habit}
          planetText="planetText-blog"
          location="/blog"
          pos={[-60, 0, -10]}
          scale={5}
          text="Blog"
          spin={2}
        />
        <Planet
          texture={earthy}
          planetText="planetText"
          location="/contact-me"
          pos={[50, 0, -30]}
          scale={8}
          text="Contact Me"
          spin={3}
        />
        <Sun />
        <Moon texture={moon} pos={[-5, 0, 100]} dist={20} speed={-1} scale={1} spin={3} />
        <Moon texture={venusmoon} pos={[-5, 3, 100]} scale={1} dist={25} speed={3} spin={5} />
        <Moon texture={moon} pos={[50, 0, -30]} scale={1} dist={15} speed={-3} spin={5} />
        <Moon texture={volcanicmoon} pos={[-60, 0, -10]} scale={2} dist={10} speed={-1} spin={5} />
        <Stars radius={100} count={10000} />
      </Canvas>
    </Suspense>
  );
};

export default Landing;
