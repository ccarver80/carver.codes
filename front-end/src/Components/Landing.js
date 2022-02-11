import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Html,
  ContactShadows,
  Billboard,
  useTexture,
} from "@react-three/drei";

//Textures for planets
import gasy from "../Imgs/planetTexture/Gaseous1.png";
import earthy from "../Imgs/planetTexture/Savannah.png";
import icy from "../Imgs/planetTexture/Icy.png";
import martian from "../Imgs/planetTexture/Martian.png";
import sunny from '../Imgs/planetTexture/sun.png'
import habit from '../Imgs/planetTexture/Tropical.png'



function Sun() {
  const Sun = useTexture(sunny)
  return (
    <mesh scale={20} position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial map={Sun} />
    </mesh>
  );
}

function Planet1() {
  const Gas = useTexture(gasy);

  return (
    <mesh scale={10} position={[-5, 0, 100]}>
    <Billboard>
      <Html transform={true}>
        <a href="/about">
          <h1 className="planetText">About Me</h1>
        </a>
      </Html>
      </Billboard>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial map={Gas} />
    </mesh>
  );
}

function Planet2() {
  const Ice = useTexture(icy);
  return (
    <mesh scale={3} position={[5, 0, -110]}>
      <Billboard>
        <Html transform={true}>
          <a href="/projects">
            <h1 className="planetText">Skills</h1>
          </a>
        </Html>
      </Billboard>

      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial map={Ice} />
    </mesh>
  );
}

function Planet3() {
  const Earth = useTexture(earthy);
  return (
    <mesh scale={5} position={[-50, 0, -50]}>
      <Billboard>
        <Html transform={true}>
          <h1 className="planetText">Blog</h1>
        </Html>
      </Billboard>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial map={Earth} />
    </mesh>
  );
}

function Planet4() {
  const Mars = useTexture(martian);

  return (
    <mesh scale={6} position={[90, 0, 50]}>
    <Billboard>
      <Html transform={true}>
        <a href="/about">
          <h1 className="planetText">Projects</h1>
        </a>
      </Html>
      </Billboard>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial map={Mars} />
    </mesh>
  );
}

function Planet5() {
  const Habit = useTexture(habit);

  return (
    <mesh scale={8} position={[40, 0, -50]}>
    <Billboard>
      <Html transform={true}>
        <a href="/about">
          <h1 className="planetText">Contact me</h1>
        </a>
      </Html>
      </Billboard>
      <sphereBufferGeometry attach="geometry" />
      <meshStandardMaterial map={Habit} />
    </mesh>
  );
}
const Landing = () => {
  return (
    <Canvas camera={{ position: [-10, 0, 130] }}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.8} />
        <spotLight intensity={8} position={[0, 0, 40]} />
        <spotLight intensity={8} position={[0, 0, -40]} />
        <spotLight intensity={8} position={[40, 0, 0]} />
        <spotLight intensity={8} position={[-40, 0, 0]} />
        <spotLight intensity={8} position={[0, 40, 0]} />
        <spotLight intensity={8} position={[0, -40, 0]} />
        <ContactShadows />
        <OrbitControls enableZoom={false} />
        <Planet5 />
        <Planet4 />
        <Planet3 />
        <Planet2 />
        <Planet1 />
        <Sun />
        <Stars radius={100} count={10000} />
      </Suspense>
    </Canvas>
  );
};

export default Landing;
