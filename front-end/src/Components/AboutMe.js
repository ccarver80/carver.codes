import React from "react";
import profilePic from '../Imgs/profile.png'

const AboutMe = () => {
  return (
    <div className="center-div">
   
      <div className="center-text">
         <img src={profilePic} alt="profile" />
        <h1>Chris Carver</h1>
        <h2>Full Stack JavaScript Developer</h2> 
        <div className="icons">
        <i class="fab fa-html5 fa-2x"></i>
        <i class="fab fa-css3-alt fa-2x"></i>
          <i class="fab fa-react fa-2x">React</i>
          <i class="fab fa-node fa-2x">express.js</i>
          <i class="fas fa-database fa-2x">Sequalize</i>
        </div>
        
        <p>
          Self taught and HIGHLY motivated, full stack JavaScript developer
          looking for a career change. Growing up in the oil industry I have
          learned the value of hard work and determination. I started learning
          in October 2020 with "Python For Everybody" on Coursera.This is where I
          learned the fundamentals of programming. After that I started learning
          HTML and CSS and eventually found Team Treehouse where I started the Full
          Stack JavaScript Tech Degree learning React, Node and Express,
          API's and so much more. I Finished the Tech Degree in February 2022.
          All 10 projects from the Tech Degree can be found on my GitHub account.
        </p>
        <div className="icons">
        <i class="far fa-file fa-2x">Resume</i>
        <i class="fab fa-linkedin-in fa-2x"></i>
        <i class="fab fa-github fa-2x"></i>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
