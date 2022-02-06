import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="center-div">
      <div className="center-text">
        <h1>Welcome to Carver.Codes</h1>
        <Link to='/home'><button>Enter</button></Link>
      </div>
    </div>
  );
};

export default Landing; 
