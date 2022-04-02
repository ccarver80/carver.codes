import React from "react";
import { useNavigate } from "react-router-dom";

function Skills() {
  const nav = useNavigate();
  return (
      <div className="bg-blue-400">
            <div className="flex rounded-xl shadow-2xl shadow-white p-24 flex-col text-center text-7xl">
              <h1 className=" text-9xl font-extrabold mb-10 ">Skills</h1>
              <ul >
                <h3 className="text-8xl mb-5 font-extrabold">Front end:</h3>
                <ul className=" shadow-md bg-white shadow-black border-2 border-black">
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>React</li>
                </ul>
                <h3 className="text-8xl mt-10 font-extrabold">Back end:</h3>
                <ul className="shadow-md bg-white shadow-black border-2 border-black">
                  <li>Express</li>
                  <li>Node</li>
                  <li>SQL</li>
                  <li>Sequalize ORM</li>
                </ul>
                <h3 className="text-8xl mt-10 font-extrabold">Tools:</h3>
                <ul className="shadow-md bg-white shadow-black border-2 border-black">
                  <li>VS Code</li>
                  <li>Atom.io</li>
                  <li>Git and Github</li>
                  <li>Linux</li>
                </ul>
              </ul>
              <div>
                <button
                  onClick={() => {
                    nav("/");
                  }}
                  className="bg-red-400 p-5 rounded mt-10 shadow-lg shadow-black border-4 border-black"
                >
                  Back to space!
                </button>
              </div>
            </div>
       </div>
  );
}

export default Skills;
