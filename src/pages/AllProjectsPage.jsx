import { useState, useEffect} from "react";
import { Link, useOutletContext } from "react-router-dom";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CalculationsCard from "../components/CalculationsCard/CalculationsCard";

function AllProjectsPage(props) {

  // State
  const [projectList, setProjectList] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);
  const [loggedIn] = useOutletContext();
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

  const shuffleProjectList = () => {
    const shuffledList = [...projectList].sort(() => Math.random() - 0.5).slice(0, 6);
    setShuffledSortedProjectList(shuffledList);
  };

  const sortProjectList = () => {
    const sortedList = [...projectList].sort((a, b) => a.title.localeCompare(b.title));
    setShuffledSortedProjectList(sortedList);
  };


  // alphabetically rendered first
  useEffect(() => {
    sortProjectList();
  }, [projectList]);

  return (
    <div>
      <h1>All Projects</h1>

      <CalculationsCard projectList={projectList} pledgeList={pledgeList} />

      <button onClick={shuffleProjectList} className="button">Shuffle</button>       
      <button onClick={sortProjectList} className="button">A-Z</button>
      {loggedIn && (
        <Link to="/create-project" className="button-link" style={{ width: '20px', borderRadius: '100px'}}>
            +
        </Link>
      )}
      <div id="project-list">
        {shuffledSortedProjectList.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
      </div>
    </div>
  );
}

export default AllProjectsPage;
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
  