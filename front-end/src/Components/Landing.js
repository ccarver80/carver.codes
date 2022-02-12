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

function Sun() {
  const Sun = useTexture(sunny);
  return (
    <mesh scale={20} position={[0, 0, 0]}>
      <sphereBufferGeometry attach="geometry" />
      <meshLambertMaterial map={Sun} />
    </mesh>
  );
}

function Planet1() {
  useFrame(({ clock }) => {
    const getElapsedTime = clock.getElapsedTime();

    myMesh.current.rotation.y = getElapsedTime / 6;
  });
  const myMesh = React.useRef();
  const Gas = useTexture(gasy);
  return (
    <>
      <Billboard scale={10} position={[-5, 0, 100]}>
        <Html transform={true}>
          <a href="/about">
            <h1 className="planetText">About Me</h1>
          </a>
        </Html>
      </Billboard>
      <mesh ref={myMesh} scale={10} position={[-5, 0, 100]}>
        <sphereBufferGeometry attach="geometry" />
        <meshStandardMaterial map={Gas} />
      </mesh>
    </>
  );
}

function Planet2() {
  useFrame(({ clock }) => {
    const getElapsedTime = clock.getElapsedTime();

    myMesh.current.rotation.y = getElapsedTime / 4;
  });
  const myMesh = React.useRef();

  const Blue = useTexture(blue);
  return (
    <>
      <Billboard scale={5} position={[5, 0, -110]}>
        <Html transform={true}>
          <a href="/projects">
            <h1 className="planetText">Skills</h1>
          </a>
        </Html>
      </Billboard>
      <mesh ref={myMesh} scale={3} position={[5, 0, -110]}>
        <sphereBufferGeometry attach="geometry" />
        <meshStandardMaterial map={Blue} />
      </mesh>
    </>
  );
}

function Planet3() {
  useFrame(({ clock }) => {
    const getElapsedTime = clock.getElapsedTime();

    myMesh.current.rotation.y = getElapsedTime / 2;
  });
  const myMesh = React.useRef();

  const Earth = useTexture(earthy);
  return (
    <>
      <Billboard scale={8} position={[-50, 0, -50]}>
        <Html transform={true}>
          <h1 className="planetText">Blog</h1>
        </Html>
      </Billboard>
      <mesh ref={myMesh} scale={5} position={[-50, 0, -50]}>
        <sphereBufferGeometry attach="geometry" />
        <meshLambertMaterial map={Earth} />
      </mesh>
    </>
  );
}

function Planet4() {
  useFrame(({ clock }) => {
    const getElapsedTime = clock.getElapsedTime();

    myMesh.current.rotation.y = getElapsedTime / 3;
  });
  const myMesh = React.useRef();

  const Mars = useTexture(martian);

  return (
    <>
      <Billboard scale={8} position={[90, 0, 50]}>
        <Html transform={true}>
          <a href="/about">
            <h1 className="planetText">Projects</h1>
          </a>
        </Html>
      </Billboard>
      <mesh ref={myMesh} scale={6} position={[90, 0, 50]}>
        <sphereBufferGeometry attach="geometry" />
        <meshLambertMaterial map={Mars} />
      </mesh>
    </>
  );
}

function Planet5() {
  useFrame(({ clock }) => {
    const getElapsedTime = clock.getElapsedTime();

    myMesh.current.rotation.y = getElapsedTime / 3;
  });
  const myMesh = React.useRef();

  const Habit = useTexture(habit);

  return (
    <>
      <Billboard scale={8} position={[40, 0, -50]}>
        <Html transform={true}>
          <a href="/about">
            <h1 className="planetText">Contact me</h1>
          </a>
        </Html>
      </Billboard>
      <mesh ref={myMesh} scale={8} position={[40, 0, -50]}>
        <sphereBufferGeometry attach="geometry" />
        <meshStandardMaterial map={Habit} />
      </mesh>
    </>
  );
}
const Landing = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Canvas camera={{ position: [-10, 0, 130] }}>
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
      </Canvas>{" "}
    </Suspense>
  );
};

export default Landing;
