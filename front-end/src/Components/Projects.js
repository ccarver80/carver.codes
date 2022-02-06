import React, { useEffect, useState } from "react";

const Projects = () => {
  const [repos, setRepos] = useState();

  useEffect(async() =>  {
    await fetch("https://api.github.com/users/ccarver80/repos?sort=created&per_page=5", {
     
    })
      .then((response) =>  response.json())
      .then((data) => {
        setRepos(data); // Prints result from `response.json()` in getRequest
      })
      .catch((error) => console.error(error));
  }, [repos]);

  return (
    <div className="center-div">
        <div className="center-text">
      <h1>Latest Projects!</h1>
      {repos ? repos.map((name) => 
      <div className="card">
      <h2>{name.name}</h2>
      </div>) : ""}

      <h3>Find more here</h3>
      </div>
    </div>
  );
};

export default Projects;
