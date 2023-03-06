import { useState, useEffect} from "react";
import { Link, useOutletContext } from "react-router-dom";

// ------- COMPONENTS -------
import ProjectCard from "../components/ProjectCard/ProjectCard";

function AllProjectsPage(props) {

  // ------- STATE -------
  const [projectList, setProjectList] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);
  const [loggedIn] = useOutletContext();
  const [shuffledSortedProjectList, setShuffledSortedProjectList] = useState([]);

  // ------- ACTIONS & EFFECTS 
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
      
      {/* -- SORT BUTTONS -- */}
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
      {/* -- PROJECT CARD -- */}
      <div className="card-list">
        {shuffledSortedProjectList.map((project, key) => {
          return <ProjectCard key={key} projectData={project} />;
        })}
      </div>
    </div>
  );
}

export default AllProjectsPage;

/* 
see _attempts_and_alternatives.md for unfinished and tried solutions

see _references.md for links to references and notes 
*/