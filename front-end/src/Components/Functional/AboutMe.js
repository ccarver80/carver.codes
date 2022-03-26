import { useNavigate } from "react-router-dom";

import profile from "../Imgs/portfolio.jpeg";

const AboutMe = () => {
  const nav = useNavigate();

  return (
    <div className="flex bg-blue-400 pb-5 flex-col sm:h-screen ">
      <div className="flex shadow-2xl shadow-black rounded-2xl mt-10 w-2/4 bg-lime-100 border-2 border-red-600 mx-auto sm:h-36 h-24 sm:text-5xl text-3xl">
        <h1 className=" text-black mx-auto my-auto">About Me</h1>
      </div> 
      
      <div className="mt-10  sm:mx-auto mx-5 ">
          <img className="rounded-xl shadow-2xl shadow-black" src={profile} />
          </div>

      <div className="flex flex-row justify-between mx-5 p-5 shadow-black shadow-2xl rounded-2xl mt-10 bg-lime-100 border-2 border-red-600">

          <div className=" text-3xl mx-auto">
            <h1 className="text-5xl text-center mb-5 font-extrabold">Chris Carver</h1>
              
                <h3 className="text-2xl text-center mb-2 font-bold">Oil and Gas History</h3>
                <p>
                  I grew up in a small town in eastern Montana. I graduated high school in 2009 and went to work in the oil and gas industry right away.
                  I worked for the same company for over 9 years where I made it all the way to an assistant managment position. 
                </p>
                <h3 className="text-2xl text-center mb-2 mt-5 font-bold">Covid-19 and Oil Crash</h3>
                  <p>
                    The year was 2020, Covid had just made its break in the US. <p>Oil prices took a shocking turn and went negitive! Lucky enough I still kept my job,
                    but it got me thinking what would happen if oil one day disappeared.</p> 
                  </p>
                  <h3 className="text-2xl text-center mb-2 mt-5 font-bold">Python For Everybody</h3>
                    <p>
                      I enrolled in a small online class were I taught myself the very basics of programming with python. I fell in love with programming and wanted to 
                      learn more. After learning the basics of python I moved onto HTML, CSS and Javascript. 
                    </p>
            <button className="bg-blue-400 shadow-lg shadow-black mt-5 p-3 rounded-xl" onClick={() => {
              nav("/")
            }}>Go Back to Space!</button>
          </div>
        </div>
      </div>
    
  );
};

export default AboutMe;
