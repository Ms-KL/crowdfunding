import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

// Dummy Data
// import { oneProject } from "../data";

// Components
import PledgeForm from "../components/PledgeForm/PledgeForm";
import ProjectCommentForm from "../components/ProjectCommentForm/ProjectCommentForm";
import PledgeCard from "../components/PledgeCard/PledgeCard";
import CommentCard from "../components/CommentCard/CommentCard";
import FundingStatusCard from "../components/FundingStatusCard/FundingStatusCard";


function ProjectPage() {
    // State
    const [project, setProject] = useState({});

    // Hooks
    const { id } = useParams();

    // Effects
    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_API_URL}projects/${id}`);
                const data = await response.json();
            // ----------- Sort new - old -----------
                data.pledges.sort((a, b) => new Date(b.date_pledged) - new Date(a.date_pledged));
            //  ----------- Sort old - new -----------
                data.comments.sort((a, b) => new Date(b.created) - new Date(a.created));
                setProject(data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchProject();
}, []);

    return (
        <div className="project-detail">
{/* -------------------- Project Details -------------------- */}
            <h2>{project.title}</h2>
            <img src={project.image} />
            
            <div className="hero-container">
                <h2><div className="avatar-container" id="project-page-avatar">
                    {project.owner_avatar && <img src={project.owner_avatar} alt="avatar" />}&emsp;
                {project.owner}'s project</div></h2>

{/* -------------------- Project Timeline -------------------- */}

                <h4>Project Start: {new Date(project.date_created).toLocaleDateString()} &emsp;|&emsp; Project Deadline: {new Date(project.deadline).toLocaleDateString()} &emsp;|&emsp; {project.is_open ? 'Active' : 'Inactive'}</h4>

                <p>{project.description}</p>

{/* -------------------- Funding Status -------------------- */}

                <FundingStatusCard project={project} />
            </div>

{/* -------------------- Comment Card -------------------- */}
            <div>
                <br />
                <h2>Comments:</h2>
                    <div className="card-list">
                        {project.comments &&
                        project.comments.map((comment, key) => {
                            return <CommentCard key={key} comment={comment} />;
                        })}
                    </div>
            <ProjectCommentForm project={project} />
            </div>

{/* -------------------- Pledge Card -------------------- */}
                <div>
                    <h2>Pledges:</h2>
                    <div className="card-list">
                        {project.pledges &&
                        project.pledges.map((pledge, key) => {
                            return <PledgeCard key={key} pledge={pledge} />;
                        })}
                    </div>
                    <PledgeForm project={project} /> 
                </div>
        </div>
    );
}

export default ProjectPage;

{/* -------------------- TroubleShooting --------------------
// MAP ISSUE:
// https://stackoverflow.com/questions/71135587/react-js-typeerror-cannot-read-properties-of-undefined-reading-map
// https://java2blog.com/typeerror-map-is-not-function-javascript/

// PROGRESS BAR:
// https://dev.to/ramonak/react-how-to-create-a-custom-progress-bar-component-in-5-minutes-2lcl */}