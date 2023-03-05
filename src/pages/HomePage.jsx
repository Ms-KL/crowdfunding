import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CalculationsCard from "../components/CalculationsCard/CalculationsCard";

function HomePage() {

  // --------------- STATE 
  const [projectList, setProjectList] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);
  const [shuffledSortedProjectList, setShuffledSortedProjectList] = useState([]);
  
  // --------------- CLEANUP 
  window.sessionStorage.removeItem("userData");

  // --------------- ACTIONS 

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


    /* Shuffle function
      https://flaviocopes.com/how-to-shuffle-array-javascript/
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    */
    const shuffleProjectList = () => {
      const shuffledList = [...projectList].sort(() => Math.random() - 0.5).slice(0, 6);
      setShuffledSortedProjectList(shuffledList);
    };

  // shuffle on first render
  useEffect(() => {
    shuffleProjectList();
  }, [projectList]);

  return (
    <>
      <div className="hero-container">
        <h1>Welcome Tree-Hugger</h1>
        <p className="feature-text">
        Welcome to Communitree, the crowdfunding platform where tree-huggers gather to branch out and make a real impact on our urban forest. Our roots run deep in the community, and we're committed to cultivating a greener, healthier future for all!
        </p>
        <Link to="/about" className="button-link">About</Link>

{/* -------------------- Calculations Card-------------------- */}

      <h2>Communitree Impact</h2>
          <CalculationsCard projectList={projectList} pledgeList={pledgeList} />
      </div>

{/* -------------------- Projects Card -------------------- */}

      <h2>Featured Communitree Projects</h2>
      <button onClick={shuffleProjectList} className="button">Shuffle</button>     
      <Link to="/create-project" className="button-link" style={{ width: '20px', borderRadius: '100px'}}>
            +
        </Link>

      <div className="card-list">
        {shuffledSortedProjectList.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
      </div>
    </>
  );
}

export default HomePage;

/* NOTES:
  
    fetch: built in request in browser to server
      when the results get back, will receive JSON
      JSON key:value pair
      When you send data back, we send strings back
      when the results return - need to turn it into JSON
      set the JSON to the projectList --> async code
      fetch, then do this, then do that
  
    map = create new array that only contains the pledge amounts
    reduce = sum up pledge amounts in the new array, return the total
      0 = initial value of reduce = 0
      https://medium.com/poka-techblog/simplify-your-javascript-use-map-reduce-and-filter-bd02c593cc2d

      import React from "react"; not required as it's already a jsx file 
 */
