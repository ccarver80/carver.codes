import { useNavigate } from "react-router-dom";

import profile from "../Imgs/portfolio.jpeg";

const AboutMe = () => {
  const nav = useNavigate();

  return (
    <div className="flex bg-blue-400 flex-col sm:h-screen ">
      <div className="flex shadow-2xl shadow-black rounded-2xl mt-10 w-2/4 bg-lime-100 mx-auto sm:h-36 h-24 sm:text-5xl text-3xl">
        <h1 className=" text-black mx-auto my-auto">About Me</h1>
      </div> 
      
      <div className="mt-10 sm:mx-auto mx-5 ">
          <img className="rounded-xl" src={profile} />
          </div>

      <div className="flex flex-row justify-between mx-5 p-5 shadow-black shadow-2xl rounded-2xl mt-10 bg-lime-100">

          <div className=" text-3xl text-center">
            <h1 className="text-5xl mb-5 font-extrabold">Chris Carver</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
              porttitor congue massa. Fusce posuere, magna sed pulvinar
              ultricies, purus lectus malesuada libero, sit amet commodo magna
              eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
              tellus. Pellentesque habitant morbi tristique senectus et netus et
              malesuada fames ac turpis egestas. Proin pharetra nonummy pede.
              Mauris et orci. Aenean nec lorem. In porttitor. Donec laoreet
              nonummy augue. Suspendisse dui purus, scelerisque at, vulputate
              vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis
              eleifend. Ut nonummy.
            </p>
          </div>
        </div>
      </div>
    
  );
};

export default AboutMe;
