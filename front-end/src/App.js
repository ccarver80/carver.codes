import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars, Html, Scroll, ScrollControls, ContactShadows, FlyControls, Billboard} from '@react-three/drei'
import './Style/style.css'

// Components
import Header from "./Components/Header";
import Landing from "./Components/Landing"
import Home from './Components/Home'
import AboutMe from "./Components/AboutMe";
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';

function Sun() {
  return (
    <mesh scale={10} position={[0, 0, 0]}>
      <sphereBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='yellow' />
    </mesh>
  )
}

function Planet1() {
  return (
    <mesh scale={3} position={[-5, 0, 200]}>
      <sphereBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='red' />
    </mesh>
  )
}

function Planet2() {
  return (
    <mesh scale={3}  position={[5, 0, 150]}>
      
      <sphereBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='green' />

     
    </mesh>
  )
}

function Planet3() {
  return (
    <mesh scale={3} position={[-5, 0, 100]}>
      
      <sphereBufferGeometry attach='geometry'/>
      <meshLambertMaterial attach='material' color='purple' />

     
    </mesh>
  )
}



function App() {
  return ( 
  <Canvas camera={{position: [0,0,250]}} >
    
    <ambientLight intensity={0.2} />
    <spotLight intensity={10} position={[0,0,40]} />
    <ContactShadows />
    <FlyControls movementSpeed={50} rollSpeed={0}  />
    <pointLight intensity={10} position={[-10, 0, 0]} />
    <Planet3 />
    <Planet2 />
    <Planet1 />
    <Sun />
    <Stars radius={100} count={10000}  />
  </Canvas>
  );
}

export default App;
