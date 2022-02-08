import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header"
const Landing = () => {
  return (
    <div>
    <Header />
    <div className="center-div">
      <div className="center-text">
        <h1>Welcome to Carver.Codes</h1>
        <Link to='/home'><button>Enter</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Landing; 
