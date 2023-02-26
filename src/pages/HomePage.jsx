import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function HomePage() {

  // State
  const [projectList, setProjectList] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);

  // ACTIONS

  // Project Data
  useEffect(() => {
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
    fetch(`${import.meta.env.VITE_API_URL}pledges`)
      .then((results) => {
        return results.json();
      })
      .then((data) => {
        setPledgeList(data);
      });

  }, []);

  // runs the first time after the first render

  // calc totals
  const projectsTotal = projectList.length;
  const pledgesTotal = pledgeList.length;
  const pledgesTotalFunds = pledgeList
    .map(pledge => pledge.amount)
    .reduce((runningTotal, amount) => runningTotal + amount,0);

  return (
    <div>
      <h1>Communitree</h1>
      <p>
      Welcome to Communitree, the crowdfunding website where tree-huggers gather to make a real impact on the urban forest of our community; register now to join us in creating a greener, healthier future for all by accessing funds for your urban forest strategy plans or supporting community projects for busy bees and planting days/events.</p>

      <h2>Communitree Impact</h2>
      <p>Get inspired by our "Communitree Impact", displaying the total funds raised and number of projects supported by our enthusiastic tree-huggers.</p>

      <p>Total Projects: {projectsTotal} | Total Pledges: {pledgesTotal} | Total Funds Raised: ${pledgesTotalFunds} </p> 
      
      <Link to="/create-project" className="button-link">Create a Project!</Link>
      
      <h3>Communitree Projects</h3>
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


// NOTES:
  // 
    // fetch: built in request in browser to server
      // when the results get back, will receive JSON
      // JSON key:value pair
      // When you send data back, we send strings back
      // when the results return - need to turn it into JSON
      // set the JSON to the projectList --> async code
      // fetch, then do this, then do that
  //
    // map = create new array that only contains the pledge amounts
    // reduce = sum up pledge amounts in the new array, return the total
      // 0 = initial value of reduce = 0
      // https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

      // import React from "react"; not required as it's already a jsx file
  