import { useNavigate } from "react-router-dom";

import profile from "../Imgs/portfolio.jpeg";

const AboutMe = () => {
  const nav = useNavigate();

  return (
    <div className="flex bg-blue-400 pb-5 flex-col ">
      <div className="flex shadow-2xl shadow-black rounded-2xl mt-10 w-2/4 bg-white border-2 border-red-600 mx-auto sm:h-36 h-24 sm:text-5xl text-3xl">
        <h1 className=" text-black mx-auto my-auto">About Me</h1>
      </div>

      <div className="mt-10  sm:mx-auto mx-5 ">
        <img
          className="rounded-xl shadow-2xl shadow-black"
          src={profile}
          alt="profile"
        />
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
            I have been working in the oil and gas industry for 14 years. In
            2020 I realized it was time for a career change, and I started
            learning web development every day after work. </p>
            <br />
            <p>I progressed everyday
            and graduated in February of 2022 from Team Treehouse’s full stack
            JavaScript Tech Degree program Now I specialize in React, Express,
            Node, and SQL.</p>
            A full list of projects from my tech degree program can be found <a
              className="text-blue-600"
              href="https://github.com/ccarver80/Tech-Degree-Projects"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              here.
            </a>

            <h1 className="text-5xl mt-5 text-center mb-5 font-extrabold">Hobbies</h1>
            <ul className="mx-auto flex flex-col h-[200px] justify-between">
              <li> Ice hockey</li>
              <li> Golf</li>
              <li> Astronomy</li>
              <li> Disk golf</li>
            </ul>
          
          <button
            className="bg-blue-400 mx-auto shadow-lg shadow-black mt-10 p-3 rounded-xl"
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
