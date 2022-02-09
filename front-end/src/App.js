import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {Canvas} from '@react-three/fiber'
import {OrbitControls, Stars, Html, Scroll, ScrollControls} from '@react-three/drei'
import './Style/style.css'

// Components
import Header from "./Components/Header";
import Landing from "./Components/Landing"
import Home from './Components/Home'
import AboutMe from "./Components/AboutMe";
import Projects from './Components/Projects';
import Blog from './Components/Blog';
import NotFound from './Components/NotFound';

function Box() {
  return (
    <mesh>
      <sphereBufferGeometry attach='geometry' />
      <meshLambertMaterial attach='material' color='blue' />
    </mesh>
  )
}

function App() {
  return ( 
  <Canvas>
    
    <ambientLight intensity={.5}/>
    <spotLight position={[10,10,10]} />
      <Html>
        <p>Hello</p>
      </Html>
    <OrbitControls/> 
    <Box position={[0,10,0]} />
    <Stars />
  </Canvas>
  );
}

export default App;
