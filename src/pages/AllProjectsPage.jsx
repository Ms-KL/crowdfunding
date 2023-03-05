import { useState, useEffect} from "react";
import { Link, useOutletContext } from "react-router-dom";

// Components
import ProjectCard from "../components/ProjectCard/ProjectCard";

function AllProjectsPage(props) {

  // State
  const [projectList, setProjectList] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);
  const [loggedIn] = useOutletContext();
  const [shuffledSortedProjectList, setShuffledSortedProjectList] = useState([]);

  // ACTIONS
  window.sessionStorage.removeItem("userData");

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

  // SHUFFLE
  const shuffleProjectList = () => {
    const shuffledList = [...projectList].sort(() => Math.random() - 0.5);
    setShuffledSortedProjectList(shuffledList);
  };

  // ORDER new - old
  const orderProjectList = () => {
    const orderedList = [...projectList].sort((a, b) => new Date(b.date_created) - new Date(a.date_created));
    setShuffledSortedProjectList(orderedList);
  };

  // ORDER old - new
  const reorderProjectList = () => {
    const orderedList = [...projectList].sort((a, b) => new Date(a.date_created) - new Date(b.date_created));
    setShuffledSortedProjectList(orderedList);
  };

  // SORT A - Z
  const sortProjectList = () => {
    const sortedList = [...projectList].sort((a, b) => a.title.localeCompare(b.title));
    setShuffledSortedProjectList(sortedList);
  };

  // SORT Z - A
  const resortProjectList = () => {
    const sortedList = [...projectList].sort((a, b) => b.title.localeCompare(a.title));
    setShuffledSortedProjectList(sortedList);
  };

  // ORDER ends soon - ends later
  const deadlineNowProjectList = () => {
    const prioritisedList = [...projectList].sort((a, b) => new Date(a.deadline) - new Date(b.deadline));
    setShuffledSortedProjectList(prioritisedList);
  };

  // ORDER ends later - ends soon
  const deadlineLaterProjectList = () => {
    const prioritisedList = [...projectList].sort((a, b) => new Date(b.deadline) - new Date(a.deadline));
    setShuffledSortedProjectList(prioritisedList);
  };

  // alphabetically rendered first
  useEffect(() => {
    resortProjectList();
  }, [projectList]);

  return (
    <div>
      <h1>All Projects</h1>

      <button onClick={shuffleProjectList} className="button">shuffle</button>       
      <button onClick={sortProjectList} className="button">a - z</button>
      <button onClick={resortProjectList} className="button">z - a</button>
      <button onClick={orderProjectList} className="button">new - old</button>
      <button onClick={reorderProjectList} className="button">old - new</button>
      <button onClick={deadlineNowProjectList} className="button">ends soon</button>
      <button onClick={deadlineLaterProjectList} className="button">ends later</button>

      {loggedIn && (
        <Link to="/create-project" className="button-link" style={{ width: '20px', borderRadius: '100px'}}>
            +
        </Link>
      )}
      <div className="card-list">
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
  