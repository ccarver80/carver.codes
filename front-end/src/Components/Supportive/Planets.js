import React from "react";
import { useFrame } from "@react-three/fiber";
import { useTexture, Billboard, Html } from "@react-three/drei";




function Sun(props) {
    const Sun = useTexture(props.texture);
    return (
      <mesh scale={props.scale} position={[0, 0, 0]}>
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
        
    myMesh.current.position.set(props.pos[0], props.pos[1], props.pos[2])
      const getElapsedTime = clock.getElapsedTime();
      
      //Planets only orbit sun on home screen.
      if(props.planetOrbit){
      
        let x = 0
        let y = 0
        let z = 0
  
        x += Math.sin(getElapsedTime / props.speed) * props.dist
        z += Math.cos(getElapsedTime / props.speed) * props.dist
        myMesh.current.position.set(x, y, z)
      }
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
  

export {Planet, Sun, Moon}