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
  const [pledgeList, setPledgeList] = useState([]);

  // ACTIONS

  // Project Data
  useEffect(() => {
    // REQUEST DATA + PROMISE
    fetch(`${import.meta.env.VITE_API_URL}projects`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setProjectList(data);
      });
  }, []);
    
  // Pledge Data
  useEffect(() => {
    // REQUEST DATA + PROMISE
    fetch(`${import.meta.env.VITE_API_URL}pledges`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPledgeList(data);
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

  // calc totals
  const projectsTotal = projectList.length;
  const pledgesTotal = pledgeList.length;
  const pledgesTotalFunds = pledgeList
    .map(pledge => pledge.amount)
    .reduce((runningTotal, amount) => runningTotal + amount,0);

    // map = create new array that only contains the pledge amounts
    // reduce = sum up pledge amounts in the new array, return the total
      // 0 = initial value of reduce = 0
      // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d
  
  return (
    <div>
      <h1>Communitree</h1>
      <p className="kl-to-do">This is subtitle</p>

      <h2>Tree-Hugger Activity</h2>
      <p className="kl-to-do">Add Activity Feed - sideways scroll? Feed like ASX?</p>

      <h2>Communitree Support Totals</h2>
      <p>Communitree projects: {projectsTotal} | Communitree pledges: {pledgesTotal} | Communitree funds raised: {pledgesTotalFunds} </p> 
      <p className="kl-to-do"> need to figure out how to sum a field imported from DRF and return total</p>

      <h3>All Projects</h3>
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






// Resources:
  // https://stackoverflow.com/questions/54002792/in-general-is-it-better-to-use-one-or-many-useeffect-hooks-in-a-single-component#:~:text=It's%20perfectly%20fine%20to%20have%20have%20multiple%20useEffect.
  // https://stackoverflow.com/questions/62358365/react-js-get-sum-of-numbers-in-array