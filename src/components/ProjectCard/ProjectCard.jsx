import { Link } from "react-router-dom";

//CSS
import "./ProjectCard.css";


function ProjectCard(props) {
  const { projectData } = props;

  return (
    <div className="project-card">
      <div className="project-image-container">
        <Link to={`/project/${projectData.id}`}>
        <img src={projectData.image} />
        </Link>
      </div>
      <div className="project-card-text">
        <h3>{projectData.title}</h3>
        <p>{projectData.description}</p>
        <h4>${projectData.sum_pledges} raised  &emsp; {projectData.funding_status}</h4>
        
      </div>
    </div>
  );
}

export default ProjectCard;


{/* <h3>{project.funding_status} Project!</h3>
<h4>Goal: ${project.goal} | Total Pledges: ${project.sum_pledges}</h4>
<h4>Balance: ${project.goal_balance}</h4> */}