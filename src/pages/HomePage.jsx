import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CalculationsCard from "../components/CalculationsCard/CalculationsCard";

function HomePage() {

  // State
  const [projectList, setProjectList] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);
  const [shuffledSortedProjectList, setShuffledSortedProjectList] = useState([]);


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

  // https://flaviocopes.com/how-to-shuffle-array-javascript/
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
  // create new list, make it random ordered and only return 6. 
    // set the state when the function is called
    // use for button in return

  const shuffleProjectList = () => {
    const shuffledList = [...projectList].sort(() => Math.random() - 0.5).slice(0, 6);
    setShuffledSortedProjectList(shuffledList);
  };

  const sortProjectList = () => {
    const sortedList = [...projectList].sort((a, b) => a.title.localeCompare(b.title));
    setShuffledSortedProjectList(sortedList);
  };


  // shuffle the first project list (without pressing shuffle)
  useEffect(() => {
    sortProjectList();
  }, [projectList]);

  return (
    <>
      <div className="hero-container">
        <h1>Welcome Tree-Hugger</h1>
        <p>
        Welcome to Communitree, the crowdfunding website where tree-huggers gather to make a real impact on the urban forest of our community; register now to join us in creating a greener, healthier future for all by accessing funds for your urban forest strategy plans or supporting community projects for busy bees and planting days/events.</p>
        <h2>Communitree Impact</h2>
        <p>Get inspired by our "Communitree Impact", displaying the total funds raised and number of projects supported by our enthusiastic tree-huggers.</p>

        <CalculationsCard projectList={projectList} pledgeList={pledgeList} />
      </div>
      <h3>Featured Communitree Projects</h3>
      <button onClick={shuffleProjectList} className="button">Shuffle</button>       
      <button onClick={sortProjectList} className="button">A-Z</button>
      <Link to="/create-project" className="button-link" style={{ width: '20px', borderRadius: '100px'}}>
            +
        </Link>

      <div id="project-list">
        {shuffledSortedProjectList.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
      </div>
    </>
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
  