import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// ------- COMPONENTS -------
import ProjectCard from "../components/ProjectCard/ProjectCard";
import CalculationsCard from "../components/CalculationsCard/CalculationsCard";

function HomePage() {

  // ------- STATE -------
  const [projectList, setProjectList] = useState([]);
  const [pledgeList, setPledgeList] = useState([]);
  const [shuffledSortedProjectList, setShuffledSortedProjectList] = useState([]);
  
  // ------- CLEAN -------
  window.sessionStorage.removeItem("userData");

  // ------- ACTIONS & EFFECTS -------

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


    // Shuffle function
    const shuffleProjectList = () => {
      const shuffledList = [...projectList].sort(() => Math.random() - 0.5).slice(0, 6);
      setShuffledSortedProjectList(shuffledList);
    };

  // shuffle on first render
  useEffect(() => {
    shuffleProjectList();
  }, [projectList]);
  
  // ------- RENDER -------

  return (
    <>
      <div className="hero-container">
        <h1>Welcome Tree-Hugger</h1>
        <p className="feature-text">
        Welcome to Communitree, the crowdfunding platform where tree-huggers gather to branch out and make a real impact on our urban forest. Our roots run deep in the community, and we're committed to cultivating a greener, healthier future for all!
        </p>
        <Link to="/about" className="button-link">About</Link>

    {/* -- CALCULATIONS-- */}

      <h2>Communitree Impact</h2>
          <CalculationsCard projectList={projectList} pledgeList={pledgeList} />
      </div>

    {/* -- PROJECTS -- */}

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

/* 
see _attempts_and_alternatives.md for unfinished and tried solutions

see _references.md for links to references and notes 
*/
