import React, { Suspense } from "react";
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

//import plantet functions
import { Sun, Moon, Planet } from "../Supportive/Planets";

const Landing = () => {
  return (
   
    <Suspense fallback={<Loading />}> 
    <div className="header">
    
               <h3>Connect with me!</h3>
               <div className="icons">
                  <a href="https://www.linkedin.com/in/christopher-carver-5366871bb/" target='_blank' rel="noopener noreferrer nofollow" ><i class="fa-brands fa-linkedin fa-2xl"></i></a> 
                  <a href="https://github.com/ccarver80" target='_blank' rel="noopener noreferrer nofollow" ><i class="fa-brands fa-github fa-2xl"></i></a>
                  <a href="mailto:ckc_80@outlook.com"><i class="fa-solid fa-envelope fa-2xl"></i></a>
                  <a href="https://twitter.com/codingCarver" target="_blank" rel="noopener noreferrer nofollow" ><i class="fa-brands fa-twitter fa-2xl"></i></a>
                  <a href="https://www.instagram.com/codingcarver/" target="_blank" rel="noopener noreferrer nofollow" ><i class="fa-brands fa-instagram fa-2xl"></i></a>
                  <a href="https://www.tiktok.com/@codingcarver" target="_blank" rel="noopener noreferrer nofollow" ><i class="fa-brands fa-tiktok fa-2xl"></i></a>
                </div>

                <nav className="navigation">
                  <Link to="/about" className="link">About</Link>
                  <Link to="/projects" className="link">Projects</Link>
                  <Link to="/contact-me" className="link">Contact</Link>
                  <Link to="/skills" className="link">Skills</Link>
                  <Link to="/blog" className="link">Blog</Link>
                  
                </nav>
          
    </div>
      <Canvas camera={{ position: [-120, 10, 90] }}>
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
       
        <Billboard position={[-95, -3, 70]}>
        
          <Html transform={true}>
            
              <div className="home">
                <h1>Welcome to my corner of the universe!</h1>
                <h2>
                  I'm Chris Carver, and I built this site using React, Three.js,
                  React-Three/Fiber, and Drei
                </h2>
                
               <h3 style={{color: 'red'}}>Click and drag to move around and click on the planets to visit that section</h3>
               
            </div>
          </Html>
        </Billboard>
      </Canvas>
    </Suspense>
  );
};

export default Landing;
