// import React from "react";
// not required as it's already a jsx file

import { useState, useEffect } from "react";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

// // Data
import { allProjects } from "../data";

function HomePage() {

  // State
  const [projectList, setProjectList] = useState([]);

  console.log(import.meta.env.VITE_API_URL)

  useEffect(() => {

    // REQUEST DATA + PROMISE
    fetch(`${import.meta.env.VITE_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });

    // fetch: built in request in browser to server
      // when the results get back, will receive JSON
      // JSON key:value pair
      // When you send data back, we send strings back
      // when the results return - need to turn it into JSON
      // set the JSON to the projectList --> async code
      // fetch, then do this, then do that


  }, []);
  // runs the first time after the first render



  return (
    <div>
      <h1>Communitree</h1>
      <p>This is subtitle</p>
      <div id="project-list">
        {projectList.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
      </div>
    </div>
  );
}

export default HomePage;
// you then need to import without { }
// without default you import using { }