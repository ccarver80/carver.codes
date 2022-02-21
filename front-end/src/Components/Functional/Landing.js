import React, { Suspense } from "react";
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

        <Billboard position={[-25, -3, 120]}>
          <Html transform={true}>
            <div className="move-around">
              <h1>
                Move around and click on planets using your finger or mouse!
              </h1>
            </div>
          </Html>
        </Billboard>
      </Canvas>
    </Suspense>
  );
};

export default Landing;
