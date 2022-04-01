import { useNavigate } from "react-router-dom";

import profile from "../Imgs/portfolio.jpeg";

const AboutMe = () => {
  const nav = useNavigate();

  return (
    <div className="flex bg-blue-400 pb-5 flex-col sm:h-screen ">
      <div className="flex shadow-2xl shadow-black rounded-2xl mt-10 w-2/4 bg-white border-2 border-red-600 mx-auto sm:h-36 h-24 sm:text-5xl text-3xl">
        <h1 className=" text-black mx-auto my-auto">About Me</h1>
      </div>

      <div className="mt-10  sm:mx-auto mx-5 ">
        <img className="rounded-xl shadow-2xl shadow-black" src={profile} alt="profile"/>
      </div>

      <div className="flex flex-row justify-between mx-5 p-5 shadow-black shadow-2xl rounded-2xl mt-10 bg-white  border-2 border-red-600">
        <div className="flex flex-col text-3xl mx-auto">
          <h1 className="text-5xl text-center mb-5 font-extrabold">
            Chris Carver
          </h1>

          <h3 className="text-2xl text-center mb-2 font-bold">
            Software Developer
          </h3>
          <p>
            Self taught and HIGHLY motivated, full stack JavaScript developer
            looking for a career change. Working 14 years in the oil industry I
            understand the value of hard work and determination. I began my developer
            journey in October 2020 learning the basics of programming and every
            day growing to become a software engineer. A list of my projects I
            have built so far can be found <a className="text-blue-600" href="https://github.com/ccarver80/Tech-Degree-Projects" target='_blank' rel="noopener noreferrer nofollow">here.</a>
          </p>
          <button
            className="bg-blue-400 mx-auto shadow-lg shadow-black mt-5 p-3 rounded-xl"
            onClick={() => {
              nav("/");
            }}
          >
            Go Back to Space!
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
