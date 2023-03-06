// RENDERED ON HOMEPAGE.JSX + ALLPROJECTSPAGE.JSX + USERPROFILE.JSX

import { Link } from "react-router-dom";

//CSS
import "./ProjectCard.css";

// ------- COMPONENTS -------
import FundingStatusCard from "../FundingStatusCard/FundingStatusCard";


function ProjectCard(props) {
  const { projectData, user } = props;

  return (
    <div className="project-card">
      <div className="project-image-container">
        <Link to={`/projects/${projectData.id}`}>
          <img src={projectData.image} alt={projectData.title} />
        </Link>
      </div>
      <div className="project-card-text">
        <h3>{projectData.title}</h3>
        <p>Started: {new Date(projectData.date_created).toLocaleDateString()} | Deadline: {new Date(projectData.deadline).toLocaleDateString()}</p>
        <p>{projectData.description}</p>

        {/* FUNDING STATUS CARD */}
        {!user &&
        <FundingStatusCard project={projectData} /> 
        }
      </div>
    </div>
  );
}

export default ProjectCard;