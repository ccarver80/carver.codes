import React, { Suspense, useEffect } from "react";
import {Link} from 'react-router-dom';
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Stars,
  Html,
  ContactShadows,
  Billboard,
} from "@react-three/drei";
import Loading from "../Supportive/Loading";
import '../../Style/style.css'

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
import hand from "../Imgs/handGester.jpg"

//import plantet functions
import { Sun, Moon, Planet } from "../Supportive/Planets";




const Landing = () => {
  
  useEffect(() => {
  setTimeout(() => {
  document.getElementById('disappear').style.display = "none"
}, 6000)
})
  return (
  
    <Suspense fallback={<Loading />}> 
    <div className=" flex border-4 border-blue-400  bg-lime-100 flex-col p-4">
    
               <div className="flex w-[700px] justify-between mx-auto mb-5">
                <h3 className="sm:text-2xl">Connect with me!</h3>
                  
                  <a href="https://www.linkedin.com/in/ccarver80/" target='_blank' rel="noopener noreferrer nofollow" ><i className="fa-brands fa-linkedin fa-2xl"></i></a> 
                  <a href="https://github.com/ccarver80" target='_blank' rel="noopener noreferrer nofollow" ><i className="fa-brands fa-github fa-2xl"></i></a>
                  <a href="mailto:ckc_80@outlook.com"><i class="fa-solid fa-envelope fa-2xl"></i></a>
                  <a href="https://twitter.com/codingCarver" target="_blank" rel="noopener noreferrer nofollow" ><i className="fa-brands fa-twitter fa-2xl"></i></a>
                  <a href="https://www.instagram.com/codingcarver/" target="_blank" rel="noopener noreferrer nofollow" ><i className="fa-brands fa-instagram fa-2xl"></i></a>
                  <a href="https://www.tiktok.com/@codingcarver" target="_blank" rel="noopener noreferrer nofollow" ><i className="fa-brands fa-tiktok fa-2xl"></i></a>
                  </div>
                 
                  
                 
                <nav className="flex mt-5 sm:text-4xl mb-5 justify-evenly">
                  <Link className="p-1 rounded hover:text-white hover:bg-sky-900" to="/about" >About</Link>
                  <Link className="p-1 rounded hover:text-white hover:bg-sky-900" to="/projects" >Projects</Link>
                  <Link className="p-1 rounded hover:text-white hover:bg-sky-900" to="/contact-me" >Contact</Link>
                  <Link className="p-1 rounded hover:text-white hover:bg-sky-900" to="/skills" >Skills</Link>
                  <Link className="p-1 rounded hover:text-white hover:bg-sky-900" to="/blog" >Blog</Link>
                  
                </nav> 
        
     </div>
    
    

     <div className="bg-black w-screen h-screen">
      <Canvas camera={{ position: [10, 0, 140] }}>
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
          planetText="text-sm text-white"
          location="/about"
          pos={[-5, 0, 100]}
          scale={10}
          text="About Me"
          spin={6}
        />
        <Planet
          texture={blue}
          planetText="text-xs text-white"
          location="/skills"
          pos={[5, 0, -75]}
          scale={5}
          text="Skills"
          spin={4}
        />
        <Planet
          texture={martian}
          planetText="text-xs text-white"
          location="/projects"
          pos={[90, 0, 50]}
          scale={6}
          text="Projects"
          spin={3}
        />
        <Planet
          texture={habit}
          planetText="text-lg"
          location="/blog"
          pos={[-60, 0, -10]}
          scale={7}
          text="Blog"
          spin={2}
        />
        <Planet
          texture={earthy}
          planetText="text-xs bg-white rounded-xl"
          location="/contact-me"
          pos={[50, 0, -30]}
          scale={8}
          text="Contact Me"
          spin={3}
        />
        <Sun texture={sunny} scale={20} />
        <Moon
          texture={moon}
          pos={[-5, 0, 100]}
          dist={20}
          speed={-1}
          scale={1}
          spin={3}
        />
        <Moon
          texture={venusmoon}
          pos={[-5, 3, 100]}
          scale={1}
          dist={25}
          speed={3}
          spin={5}
        />
        <Moon
          texture={moon}
          pos={[50, 0, -30]}
          scale={1}
          dist={15}
          speed={-3}
          spin={5}
        />
        <Moon
          texture={volcanicmoon}
          pos={[-60, 0, -10]}
          scale={2}
          dist={10}
          speed={-1}
          spin={5}
        />
        <Stars radius={100} count={10000} />
       
       
             
         
      
      </Canvas> </div> <div id="disappear" className="sticky bottom-0 p-5 mx-auto bg-white flex flex-col w-fit rounded-2xl ">
                <img className="mx-auto h-24 w-24" src={hand} />
                
               <h3 className="mx-auto text-xl text-red-700">Click and drag to move around and click on the planets to visit that section</h3>
               
            </div> 
    </Suspense>
  );
};

export default Landing;
